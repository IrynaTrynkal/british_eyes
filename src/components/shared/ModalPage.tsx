"use client";
import { usePathname, useRouter } from "next/navigation";
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

    const path = usePathname();
    const basePath = path.substring(0, path.lastIndexOf("/"));
    const backPath = `${basePath}`;

    const [isModalOpen, setIsModalOpen] = useState(true);

    const onCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            if (window.history.length > 1) {
                router.back();
            } else {
                router.push(`${backPath}`);
            }
        }, 300);
    };

    return (
        <Modal
            key={path}
            subpage={subpage}
            isOpen={isModalOpen}
            onClose={onCloseModal}
        >
            {children}
        </Modal>
    );
};
