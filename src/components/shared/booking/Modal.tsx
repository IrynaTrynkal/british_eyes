"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

import { IconClose } from "../icons/IconClose";
import { Portal } from "./Portal";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpen: boolean;
    variant?: "sidebar" | "center";
    subpage?: boolean;
    offer?: boolean;
}

export const Modal = ({
    children,
    onClose,
    isOpen,
    subpage,
    offer,
    variant = "sidebar",
}: ModalProps) => {
    const [isOpenPortal, setIsOpenPortal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOpenPortal(true);
        } else {
            const timer = setTimeout(() => setIsOpenPortal(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpenPortal && (
                <Portal id="modal">
                    <motion.div
                        className={`fixed inset-0 z-20 flex ${
                            variant === "sidebar"
                                ? "justify-end"
                                : "items-center justify-center"
                        }`}
                    >
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={onClose}
                        />

                        <motion.div
                            className={`bg-ivory relative z-10 ${
                                variant === "sidebar"
                                    ? "tab:max-w-[660px] prepc:max-w-[1210px] tab:rounded-bl-lg h-fit max-h-screen max-w-[540px] min-w-[320px] overflow-y-auto rounded-bl pt-3"
                                    : offer
                                      ? "tab:max-w-[660px] prepc:max-w-[950px] pc:max-w-[1210px] w-full max-w-[540px] rounded"
                                      : "tab:rounded-lg tab:w-[472px] w-[288px] rounded text-center"
                            }`}
                            initial={
                                variant === "sidebar"
                                    ? { x: "100%" }
                                    : { scale: 0.8, opacity: 0 }
                            }
                            animate={
                                variant === "sidebar"
                                    ? { x: 0 }
                                    : { scale: 1, opacity: 1 }
                            }
                            exit={
                                variant === "sidebar"
                                    ? { x: "100%" }
                                    : { scale: 0.8, opacity: 0 }
                            }
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onClick={e => e.stopPropagation()}
                        >
                            {offer ? (
                                <button
                                    onClick={onClose}
                                    className={
                                        "bg-ivory tab:top-6 tab:right-6 prepc:top-8 prepc:right-16 absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded border border-transparent p-2 transition-all duration-300 ease-in-out hover:border-black"
                                    }
                                    aria-label="Close modal"
                                >
                                    <IconClose className="text-black" />
                                </button>
                            ) : (
                                <button
                                    onClick={onClose}
                                    className={`${
                                        subpage
                                            ? "bg-ivory tab:right-10 pc:right-20 top-10 right-4 h-10 w-10 p-2 hover:border-black"
                                            : variant === "center"
                                              ? "hover:border-ivory top-3 right-3 h-6 w-6"
                                              : "top-3 right-3 h-6 w-6 hover:border-black"
                                    } absolute flex items-center justify-center rounded border border-transparent transition-all duration-300 ease-in-out`}
                                    aria-label="Close modal"
                                >
                                    <IconClose
                                        className={
                                            variant === "center"
                                                ? "text-ivory"
                                                : "text-black"
                                        }
                                    />
                                </button>
                            )}
                            {children}
                        </motion.div>
                    </motion.div>
                </Portal>
            )}
        </AnimatePresence>
    );
};
