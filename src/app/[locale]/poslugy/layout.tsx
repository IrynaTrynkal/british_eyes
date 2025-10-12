// src/app/[locale]/poslugy/lazerna-korekcziya-zoru/layout.tsx
import { ReactNode } from "react";

export default function LazerLayout({
    children, // це page.tsx головної сторінки
    modal, // це @modal слот
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
