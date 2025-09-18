// components/CustomSelect.tsx
import { useEffect, useRef, useState } from "react";

import { IconChevron } from "../icons/IconChevron";

type Option = { value: string; label: string };

export function CustomSelect({
    id,
    value,
    onChange,
    options,
    placeholder = "",
    className,
}: {
    id?: string;
    value: string;
    onChange: (v: string) => void;
    options: Option[];
    placeholder?: string;
    className: string;
}) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (
                rootRef.current &&
                !rootRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    return (
        <div ref={rootRef} className="relative w-full">
            <button
                id={id}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen(s => !s)}
                className={className}
            >
                <span className="font-oswald tab:top-4 tab:left-5 pointer-events-none absolute top-3 left-4 leading-none">
                    {value
                        ? (options.find(o => o.value === value)?.label ?? value)
                        : placeholder}
                </span>

                <span className="text-grey tab:top-4 tab:right-5 pointer-events-none absolute top-2 right-4 flex h-6 w-6 items-center px-[7px] pt-2.5 pb-[9px]">
                    <IconChevron />
                </span>
            </button>

            {open && (
                <ul
                    role="listbox"
                    tabIndex={-1}
                    className="bg-ivory border-grey absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded border py-3"
                >
                    {options.map(opt => (
                        <li key={opt.value}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={value === opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    setOpen(false);
                                }}
                                className="hover:bg-green-30 font-oswald focus:bg-green-30 w-full px-4 py-2 text-left leading-none"
                            >
                                {opt.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
