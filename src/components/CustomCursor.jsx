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

    // Apply color theme directly to DOM elements for instant 120fps transition
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

    // Helper: Parse RGB/RGBA strings into numeric components
    const parseRgb = (str) => {
      if (!str || str === 'transparent' || str === 'rgba(0, 0, 0, 0)') return null;
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!m) return null;
      return {
        r: parseInt(m[1], 10),
        g: parseInt(m[2], 10),
        b: parseInt(m[3], 10),
        a: m[4] !== undefined ? parseFloat(m[4]) : 1,
      };
    };

    // Helper: Check if color is purple or dark
    const checkIsPurpleOrDarkColor = ({ r, g, b }) => {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      // Purple / Plum hue: Red & Blue are higher than Green
      const isPurple = r > g + 8 && b > g + 8 && lum < 165;
      // Deep dark hue (plum-950, black, slate-950)
      const isDark = lum < 95;
      return isPurple || isDark;
    };

    // Check if background under (x, y) is purple or dark
    const isPurpleOrDarkBg = (x, y) => {
      const el = document.elementFromPoint(x, y);
      if (!el) return false;

      let current = el;
      while (current && current !== document.documentElement) {
        try {
          const style = window.getComputedStyle(current);
          const bg = parseRgb(style.backgroundColor);
          if (bg && bg.a >= 0.4) {
            if (checkIsPurpleOrDarkColor(bg)) {
              return true;
            } else {
              // Found opaque light / non-purple background
              return false;
            }
          }
        } catch (e) {}
        current = current.parentElement;
      }
      return false;
    };

    // Check if cursor is directly over purple text, letter, heading, or icon glyph
    const isOverPurpleTextOrGlyph = (x, y) => {
      // 1. Check exact character glyph via caret range
      if (document.caretRangeFromPoint) {
        try {
          const range = document.caretRangeFromPoint(x, y);
          if (range) {
            const parentNode =
              range.startContainer.nodeType === Node.TEXT_NODE
                ? range.startContainer.parentElement
                : range.startContainer;

            if (parentNode && parentNode.nodeType === Node.ELEMENT_NODE) {
              const style = window.getComputedStyle(parentNode);
              const textColor = parseRgb(style.color);
              if (textColor && checkIsPurpleOrDarkColor(textColor)) {
                const rects = range.getClientRects();
                if (rects.length > 0) {
                  const r = rects[0];
                  const fontSize = parseFloat(style.fontSize) || 16;
                  const thresholdX = Math.max(fontSize * 1.5, 30);
                  const thresholdY = Math.max(fontSize * 1.2, 26);
                  const dx = Math.abs(x - r.left);
                  const dy = Math.abs(y - (r.top + r.height / 2));
                  if (dx < thresholdX && dy < thresholdY) {
                    return true;
                  }
                }
              }
            }
          }
        } catch (e) {}
      }

      // 2. Check element directly under (x, y) for purple text / heading / icon
      const el = document.elementFromPoint(x, y);
      if (el) {
        const tag = el.tagName;
        if (/^(H[1-6]|SPAN|A|BUTTON|STRONG|B|EM|I|LABEL|LI|CODE|SVG|PATH)$/.test(tag)) {
          try {
            const style = window.getComputedStyle(el);
            const color = parseRgb(style.color) || parseRgb(style.fill);
            if (color && checkIsPurpleOrDarkColor(color)) {
              const rect = el.getBoundingClientRect();
              if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                if (el.textContent.trim().length > 0 || tag === 'SVG' || tag === 'PATH') {
                  return true;
                }
              }
            }
          } catch (e) {}
        }
      }

      return false;
    };

    // Combined detection: Is the cursor over purple background OR purple text/icon?
    const shouldBeYellow = (x, y) => {
      if (
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark'
      ) {
        return true;
      }
      return isPurpleOrDarkBg(x, y) || isOverPurpleTextOrGlyph(x, y);
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

      // Check color under pointer dynamically
      const yellow = shouldBeYellow(targetX, targetY);
      if (yellow !== isCurrentlyYellow) {
        applyColorTheme(yellow);
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
        // High-performance smooth tracking without React setState latency
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

    // Interactive element hover listeners (scales up for tactile feedback)
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

    // Rebind on DOM changes
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
        applyColorTheme(shouldBeYellow(targetX, targetY));
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
