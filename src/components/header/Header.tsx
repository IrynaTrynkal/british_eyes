import Navbar from "./Navbar";

export const Header = () => {
    return (
        <>
            <header className="relative z-20">
                <section className="content pc:h-[72px] h-12">
                    <Navbar />
                </section>
            </header>
        </>
    );
};
