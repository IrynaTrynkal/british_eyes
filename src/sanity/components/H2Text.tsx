import { ReactNode } from "react";

export const H2Text = (props: { children: ReactNode }) => (
    <h2 className="pc:text-xl mb-1 text-lg leading-[120%] font-semibold">
        {props.children}
    </h2>
);
