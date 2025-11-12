import { ReactNode } from "react";

export const Subtitle = (props: { children: ReactNode }) => (
    <span
        style={{
            textTransform: "uppercase",
            fontFamily: "var(--font-oswald)",
            color: "#151515",
        }}
    >
        {props.children}
    </span>
);
