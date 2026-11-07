import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const mRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let mX = -100;
    let mY = -100;
    let isHovering = false;
    let isMoving = false;
    let isCurrentlyYellow = false;

    // Apply color theme directly to DOM elements for zero-lag instant transition
    const applyColorTheme = (yellow) => {
      isCurrentlyYellow = yellow;
      if (mRef.current) {
        if (yellow) {
          mRef.current.classList.add('is-yellow');
          mRef.current.classList.remove('is-purple');
        } else {
          mRef.current.classList.remove('is-yellow');
          mRef.current.classList.add('is-purple');
        }
      }
      if (ringRef.current) {
        if (yellow) {
          ringRef.current.classList.add('is-yellow');
          ringRef.current.classList.remove('is-purple');
        } else {
          ringRef.current.classList.remove('is-yellow');
          ringRef.current.classList.add('is-purple');
        }
      }
    };

    // Determine if the background under (x, y) is purple or dark
    const checkIsPurpleOrDarkAt = (x, y) => {
      // 1. Dark mode active -> always yellow
      if (
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark'
      ) {
        return true;
      }

      const el = document.elementFromPoint(x, y);
      if (!el) return false;

      let current = el;
      while (current && current !== document.documentElement) {
        try {
          const style = window.getComputedStyle(current);
          const bg = style.backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

              if (a >= 0.4) {
                // Perceived luminance
                const lum = 0.299 * r + 0.587 * g + 0.114 * b;

                // Purple / Plum hue: Red & Blue high, Green low
                const isPurple = r > g + 10 && b > g + 10 && lum < 155;

                // Deep dark background
                const isDark = lum < 110;

                if (isPurple || isDark) {
                  return true;
                } else {
                  // Found an opaque light or yellow/cream background
                  return false;
                }
              }
            }
          }
        } catch (e) {}

        current = current.parentElement;
      }

      return false;
    };

    // Initial color setup
    const isDark =
      document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark';
    applyColorTheme(isDark);

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isMoving) {
        isMoving = true;
        mX = targetX;
        mY = targetY;
        ringX = targetX;
        ringY = targetY;
        setIsVisible(true);
      }

      // Check background color under pointer
      const overPurple = checkIsPurpleOrDarkAt(targetX, targetY);
      if (overPurple !== isCurrentlyYellow) {
        applyColorTheme(overPurple);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isMoving = false;
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const animate = () => {
      if (isMoving) {
        // High-performance smooth speed tracking without React setState latency
        mX += (targetX - mX) * 0.82;
        mY += (targetY - mY) * 0.82;

        // Fluid spring lerp on the outer 'o' ring so 'm' stays gracefully centered inside 'o'
        ringX += (targetX - ringX) * 0.24;
        ringY += (targetY - ringY) * 0.24;

        if (mRef.current) {
          mRef.current.style.transform = `translate3d(${mX}px, ${mY}px, 0) translate(-50%, -50%) scale(${
            isHovering ? 1.25 : 1
          })`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
            isHovering ? 1.55 : 1
          })`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    // Interactive element hover listeners (only scales up for tactile feedback, leaves color to background)
    const handleElementHover = () => {
      isHovering = true;
      if (ringRef.current) ringRef.current.classList.add('is-hovered');
    };
    const handleElementLeave = () => {
      isHovering = false;
      if (ringRef.current) ringRef.current.classList.remove('is-hovered');
    };

    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .project-row, .cursor-pointer'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
        el.addEventListener('mouseenter', handleElementHover, { passive: true });
        el.addEventListener('mouseleave', handleElementLeave, { passive: true });
      });
      return interactiveElements;
    };

    const elements = updateInteractiveListeners();

    // Rebind on DOM changes (e.g. modals opening, filters clicked)
    const domObserver = new MutationObserver(() => {
      updateInteractiveListeners();
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    // Recheck theme on theme toggle
    const themeObserver = new MutationObserver(() => {
      const isDarkNow =
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDarkNow) {
        applyColorTheme(true);
      } else {
        applyColorTheme(checkIsPurpleOrDarkAt(targetX, targetY));
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      domObserver.disconnect();
      themeObserver.disconnect();
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Brand monogram 'm' centered inside 'o' ring */}
      <div
        ref={mRef}
        className={`custom-cursor-m is-purple ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        m
      </div>

      {/* Smooth outer follower ring 'o' */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring is-purple ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
    </>
  );
}
