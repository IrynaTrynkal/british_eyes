import { ReactNode } from "react";

export const GreyText = (props: { children: ReactNode }) => (
    <span style={{ color: "#737373" }}>{props.children}</span>
);
