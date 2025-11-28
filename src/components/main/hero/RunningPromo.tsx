"use client";

import { useEffect, useRef, useState } from "react";

import { Link } from "@/i18n/navigation";

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    speed?: number; // px per second
    className?: string;
}

export const RunningPromo = ({
    children,
    speed = 50,
    className = "",
}: InfiniteMarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const [animationDuration, setAnimationDuration] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const scroller = scrollerRef.current;

        if (container && scroller) {
            const scrollerWidth = scroller.scrollWidth;

            // половина, бо ми дублюємо children
            const totalWidth = scrollerWidth / 2;

            const duration = totalWidth / speed; // seconds
            setAnimationDuration(duration);
        }
    }, [speed, children]);

    return (
        <Link
            href="/aktsiyi"
            className={`block cursor-pointer overflow-hidden py-3 select-none ${className}`}
        >
            <div
                ref={containerRef}
                className="overflow-hidden whitespace-nowrap"
                onMouseEnter={() =>
                    scrollerRef.current?.style.setProperty(
                        "animation-play-state",
                        "paused"
                    )
                }
                onMouseLeave={() =>
                    scrollerRef.current?.style.setProperty(
                        "animation-play-state",
                        "running"
                    )
                }
            >
                <div
                    ref={scrollerRef}
                    className="animate-marquee flex w-max"
                    style={{
                        animationDuration: `${animationDuration}s`,
                    }}
                >
                    {children}
                    {children}
                </div>
            </div>
        </Link>
    );
};
