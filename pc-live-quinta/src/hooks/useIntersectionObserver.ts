import { useEffect, useState, useRef } from 'react';

/**
 * Hook to return whether an element is currently intersecting the viewport.
 * Built to trigger scroll reveal animations.
 */
export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLElement | HTMLDivElement | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            // Once it becomes visible, keep it visible (don't animate out)
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(element);
            }
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { elementRef, isIntersecting };
}
