import { ReactNode } from "react";

export const BlackText = (props: { children: ReactNode }) => (
    <span style={{ color: "#151515" }}>{props.children}</span>
);
