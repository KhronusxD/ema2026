import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInScrollProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const FadeInScroll: React.FC<FadeInScrollProps> = ({
    children,
    delay = 0,
    className = ''
}) => {
    const { elementRef, isIntersecting } = useIntersectionObserver();

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out fill-mode-forwards ${isIntersecting
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
