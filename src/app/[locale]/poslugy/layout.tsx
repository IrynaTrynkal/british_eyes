import { ReactNode } from "react";

export default function LazerLayout({
    children,
    modal,
}: {
    children: ReactNode;
    modal: ReactNode;
}) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
