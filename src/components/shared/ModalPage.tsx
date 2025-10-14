"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useState } from "react";

import { Modal } from "./booking/Modal";

export const ModalPage = ({
    children,
    lazer,
}: {
    children: React.ReactNode;
    lazer?: boolean;
}) => {
    const router = useRouter();

    const locale = useLocale();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const onCloseModal = () => {
        router.push(`/${locale}/poslugy/lazerna-korekcziya-zoru#lazer-methods`);
        setIsModalOpen(false);
    };

    return (
        <Modal lazer={lazer} isOpen={isModalOpen} onClose={onCloseModal}>
            {children}
        </Modal>
    );
};
