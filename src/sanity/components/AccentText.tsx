import { ReactNode } from "react";

export const AccentText = (props: { children: ReactNode }) => (
    <span style={{ color: "#065d43" }}>{props.children}</span>
);
