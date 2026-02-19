import { ReactNode } from "react";

export const H3Text = (props: { children: ReactNode }) => (
    <h3 className="pc:text-lg mb-1 leading-[120%] font-semibold">
        {props.children}
    </h3>
);
