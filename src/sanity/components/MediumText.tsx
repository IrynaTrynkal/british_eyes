import { ReactNode } from "react";

export const MediumText = (props: { children: ReactNode }) => (
    <span style={{ fontWeight: 500, color: "#151515" }}>{props.children}</span>
);
