"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useState } from "react";

import { Modal } from "./booking/Modal";

export const ModalPage = ({
    children,
    subpage,
}: {
    children: React.ReactNode;
    subpage?: boolean;
}) => {
    const router = useRouter();

    const locale = useLocale();
    const path = usePathname();
    console.log("🚀 ~ ModalPage ~ path:", path);
    const basePath = path.substring(0, path.lastIndexOf("/"));
    const backPath = `${basePath}#methods`;
    console.log("🚀 ~ ModalPage ~ backPath:", backPath);

    const [isModalOpen, setIsModalOpen] = useState(true);

    const onCloseModal = () => {
        router.push(`${backPath}`);
        setIsModalOpen(false);
    };

    return (
        <Modal subpage={subpage} isOpen={isModalOpen} onClose={onCloseModal}>
            {children}
        </Modal>
    );
};
