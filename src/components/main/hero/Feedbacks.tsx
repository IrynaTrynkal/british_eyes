"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { feedbacksPhotoList } from "@/components/assets/feedbacksData";
import { Link } from "@/i18n/navigation";

export const Feedbacks = ({
    text,
    title,
    className,
}: {
    text: string;
    title: string;
    className?: string;
}) => {
    const containerRef = useRef<HTMLUListElement>(null);
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;

            const itemWidth = 26;
            const count = Math.floor((containerWidth - 18) / itemWidth);

            setVisibleCount(count);
        };

        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);
    return (
        <Link
            href="/vidhuky"
            className={`text-ivory tab:rounded-lg pc:p-3 flex flex-col justify-start rounded-sm bg-white/10 p-2 ${className}`}
        >
            <h3 className="font-oswald pc:text-[28px] mb-2 text-left text-xl leading-none font-medium">
                {title}
            </h3>
            <p className="pc:text-base pc:leading-5 mb-7 text-left text-sm leading-4 uppercase">
                {text}
            </p>
            <ul ref={containerRef} className="mb-1 flex">
                {feedbacksPhotoList.slice(0, visibleCount).map((photo, ind) => (
                    <li
                        key={ind}
                        className="border-emerald -ml-[18px] h-11 w-11 rounded-full border-2 first:ml-0"
                    >
                        <Image
                            src={photo}
                            alt="feedback photo"
                            width={44}
                            height={44}
                            className="object-cover"
                        />
                    </li>
                ))}
            </ul>
        </Link>
    );
};
