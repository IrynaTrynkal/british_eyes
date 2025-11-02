export const HeroInstruction = ({ title }: { title: string }) => {
    return (
        <section className="content prepc:pb-12 w-full pb-5">
            <h1 className="title-section-ivory prepc:w-[83%] cta-green-gradient text-ivory prepc:p-8 max-w-[1117px] rounded p-3 whitespace-pre-line">
                {title}
            </h1>
        </section>
    );
};
