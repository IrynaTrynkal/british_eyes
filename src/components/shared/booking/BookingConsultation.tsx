"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SubmitFnType } from "@/types/modalProps";

import { BookingForm } from "./BookingForm";
import { ErrorMessage } from "./ErrorMessage";
import { Modal } from "./Modal";
import { SuccessMessage } from "./SuccessMessage";

export const BookingConsultation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const t = useTranslations("Form");
    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            setModalContent(<SuccessMessage />);
        } catch (error) {
            console.error(error);
            setModalContent(<ErrorMessage />);
        } finally {
            setIsOpen(true);
        }
    };

    return (
        <>
            <BookingForm
                title={t("title")}
                className="tab:w-[90%] tab:max-w-[1044px]"
                notificationHandler={notificationHandler}
            />
            <Modal
                variant="center"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                {modalContent}
            </Modal>
        </>
    );
};
