"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { IconClose } from "../icons/IconClose";
import { Portal } from "./Portal";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpen: boolean;
    variant?: "sidebar" | "center";
    lazer?: boolean;
}

export const Modal = ({
    children,
    onClose,
    isOpen,
    lazer,
    variant = "sidebar",
}: ModalProps) => {
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
        <Portal id="modal">
            <AnimatePresence>
                {isOpen && (
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
                            <button
                                onClick={onClose}
                                className={`${
                                    lazer
                                        ? "bg-ivory tab:right-10 pc:right-20 top-10 right-4 h-10 w-10 p-2"
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
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    );
};
