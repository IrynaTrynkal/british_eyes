"use client";
import { useState } from "react";

import { SubmitFnType } from "@/types/modalProps";

import { ErrorMessage } from "../booking/ErrorMessage";
import { Modal } from "../booking/Modal";
import { SuccessMessage } from "../booking/SuccessMessage";
import { BookingCallForm } from "./BookingCallForm";

export const CallMeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
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
            <BookingCallForm notificationHandler={notificationHandler} />
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
