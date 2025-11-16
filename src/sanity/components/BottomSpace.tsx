import { ReactNode } from "react";

export const BottomSpace = (props: { children: ReactNode }) => (
    <div style={{ marginBottom: "8px" }}>{props.children}</div>
);
