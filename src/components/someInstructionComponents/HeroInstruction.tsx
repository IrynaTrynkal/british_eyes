export const HeroInstruction = ({
    title,
    width,
}: {
    title: string;
    width?: boolean;
}) => {
    return (
        <section
            className={`tab:max-w-full tab:px-6 mx-auto w-full max-w-[540px] px-4 pb-5 ${width ? "prepc:pr-0" : "pc:px-12"}`}
        >
            <h1
                className={`title-section-ivory ${width ? "prepc:w-full" : "prepc:w-[83%]"} cta-green-gradient text-ivory prepc:p-8 max-w-[1117px] rounded p-3 whitespace-pre-line`}
            >
                {title}
            </h1>
        </section>
    );
};
