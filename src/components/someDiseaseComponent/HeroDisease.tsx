export const HeroDisease = ({ title }: { title: string }) => {
    return (
        <section className="tab:mt-0 cta-green-gradient tab:h-120 prepc:h-[552px] relative mt-12 h-[calc(100vh-48px)] overflow-hidden">
            <div className="content flex h-full items-end">
                <h1 className="title-h1 text-white-100 prepc:max-w-[553px] tab:mb-5 prepc:mb-6 mt-auto mb-10 max-w-[400px] whitespace-pre-line uppercase">
                    {title}
                </h1>
            </div>
        </section>
    );
};
