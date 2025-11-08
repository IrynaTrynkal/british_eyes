"use client";

import { useRef, useState } from "react";

import { IconArrow } from "@/components/shared/icons/IconArrow";

interface ImageComparisonProps {
    before: string;
    after: string;
}

export const ImageComparison = ({ before, after }: ImageComparisonProps) => {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const updatePosition = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setPosition(percent);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        updatePosition(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        updatePosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) updatePosition(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className="relative mx-auto aspect-[2/1] w-full max-w-4xl overflow-hidden select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img
                src={after}
                alt="after"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            >
                <img
                    src={before}
                    alt="before"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div
                className="bg-white-100/50 absolute top-0 h-full w-[2px] transition-none"
                style={{ left: `${position}%` }}
            />

            <span className="bg-green-10 prepc:w-[207px] prepc:text-base prepc:py-3 absolute bottom-0 left-0 w-[140px] rounded py-1 text-center text-sm text-black uppercase">
                Trifocal
            </span>
            <span className="text-ivory prepc:w-[207px] prepc:text-base prepc:py-3 green-gradient absolute right-0 bottom-0 w-[140px] rounded py-1 text-center text-sm uppercase">
                Rayone Galaxy
            </span>

            <div
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                className="tab:gap-3 absolute top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center gap-1.5"
                style={{ left: `calc(${position}% )` }}
            >
                <IconArrow className="text-ivory tab:w-4 h-auto w-2 rotate-180" />
                <IconArrow className="text-ivory tab:w-4 h-auto w-2" />
            </div>
        </div>
    );
};
