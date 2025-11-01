export const HeroInstruction = ({ title }: { title: string }) => {
    return (
        <section className="content cta-green-gradient">
            <h1 className="title-h1 text-white-100 prepc:max-w-[553px] tab:mb-5 prepc:mb-6 mb-4 max-w-[400px] whitespace-pre-line uppercase">
                {title}
            </h1>
        </section>
    );
};
