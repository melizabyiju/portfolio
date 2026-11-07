import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const mRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
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
    let isOverPurple = false;
    let isMoving = false;

    // Detect if element or its container is purple/dark to switch to yellow
    const checkPurpleOrDark = (clientX, clientY) => {
      if (document.documentElement.classList.contains('dark')) {
        return true;
      }
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return false;

      let current = el;
      while (current && current !== document.body && current !== document.documentElement) {
        // 1. Check classes for purple/dark design tokens
        const classNames = current.className;
        if (typeof classNames === 'string' && classNames.length > 0) {
          if (
            classNames.includes('bg-plum') ||
            classNames.includes('bg-aubergine') ||
            classNames.includes('bg-[#2D0A28]') ||
            classNames.includes('bg-[#3A0F34]') ||
            classNames.includes('bg-[#1A0519]') ||
            classNames.includes('bg-[#10030F]') ||
            classNames.includes('bg-[#260621]') ||
            classNames.includes('bg-black') ||
            classNames.includes('bg-slate-900') ||
            classNames.includes('bg-slate-950')
          ) {
            return true;
          }
        }

        // 2. Check computed background color
        try {
          const style = window.getComputedStyle(current);
          const bg = style.backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const lum = 0.299 * r + 0.587 * g + 0.114 * b;
              const isPurpleHue = r > 35 && b > 25 && g < (r + b) * 0.45;
              if (lum < 140 || isPurpleHue) {
                return true;
              } else {
                return false;
              }
            }
          }
        } catch (e) {}

        current = current.parentElement;
      }
      return false;
    };

    let checkTimer = 0;

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

      // Check background color under cursor smoothly
      const now = performance.now();
      if (now - checkTimer > 40) {
        checkTimer = now;
        const overDark = checkPurpleOrDark(targetX, targetY);
        if (overDark !== isOverPurple) {
          isOverPurple = overDark;
          setIsYellow(overDark || isHovering);
        }
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
        // High-performance smooth speed tracking without React setState lag
        mX += (targetX - mX) * 0.82;
        mY += (targetY - mY) * 0.82;

        // Fluid spring lerp on the outer 'o' ring so 'm' stays gracefully centered inside 'o'
        ringX += (targetX - ringX) * 0.24;
        ringY += (targetY - ringY) * 0.24;

        if (mRef.current) {
          mRef.current.style.transform = `translate3d(${mX}px, ${mY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.25 : 1})`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.55 : 1})`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    // Interactive element hover listeners
    const handleElementHover = () => {
      isHovering = true;
      setIsHovered(true);
      setIsYellow(true);
    };
    const handleElementLeave = () => {
      isHovering = false;
      setIsHovered(false);
      setIsYellow(isOverPurple);
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
    const observer = new MutationObserver(() => {
      updateInteractiveListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
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
        className={`custom-cursor-m ${isYellow ? 'is-yellow' : 'is-purple'} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        m
      </div>

      {/* Smooth outer follower ring 'o' */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isYellow ? 'is-yellow' : 'is-purple'} ${
          isHovered ? 'is-hovered' : ''
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
    </>
  );
}
