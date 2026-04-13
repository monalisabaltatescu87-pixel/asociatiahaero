import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Tracks which [data-animate] sections are visible via IntersectionObserver.
 * Returns an `isVisible(id)` helper for conditional class names.
 */
export function useAnimateOnScroll() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = useCallback((id: string) => visibleSections.has(id), [visibleSections]);

  return isVisible;
}
