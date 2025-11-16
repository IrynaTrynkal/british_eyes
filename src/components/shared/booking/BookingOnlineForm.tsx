"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SubmitFnType } from "@/types/modalProps";

import { ButtonAction } from "../ButtonAction";
import { BookingForm } from "./BookingForm";
import { ErrorMessage } from "./ErrorMessage";
import { Modal } from "./Modal";
import { SuccessMessage } from "./SuccessMessage";

export const BookingOnlineForm = ({
    cta,
    btnName,
    className,
}: {
    cta?: boolean;
    btnName?: string;
    className?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const t = useTranslations("Menu");
    const tForm = useTranslations("Form");

    const handleClose = () => {
        setIsOpen(false);
        setIsSuccess(false);
    };

    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
    };

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            setIsSuccess(true);
            setIsOpen(false);
        } catch (error) {
            console.error(error);
            setIsErrorModalOpen(true);
        }
    };

    return (
        <>
            {cta ? (
                <ButtonAction
                    name={btnName ? btnName : t("onlineButtonPC")}
                    className={`mx-auto ${className}`}
                    onClick={() => setIsOpen(true)}
                />
            ) : (
                <>
                    <ButtonAction
                        mob
                        header
                        className={`prepc:hidden ${className}`}
                        name={t("onlineButtonMob")}
                        onClick={() => setIsOpen(true)}
                    />
                    <ButtonAction
                        header
                        name={t("onlineButtonPC")}
                        className={`prepc:flex hidden ${className}`}
                        onClick={() => setIsOpen(true)}
                    />
                </>
            )}
            <Modal
                isOpen={isOpen && !isSuccess}
                onClose={handleClose}
                variant="sidebar"
            >
                <BookingForm
                    title={tForm("titleOnline")}
                    online
                    className="tab:min-w-[660px] tab:max-w-[702px]"
                    notificationHandler={notificationHandler}
                />
            </Modal>

            <Modal isOpen={isSuccess} onClose={handleClose} variant="center">
                <SuccessMessage />
            </Modal>

            <Modal
                variant="center"
                isOpen={isErrorModalOpen}
                onClose={handleErrorModalClose}
            >
                <ErrorMessage />
            </Modal>
        </>
    );
};
