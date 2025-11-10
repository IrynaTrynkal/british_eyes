import Navbar from "./Navbar";

export const Header = () => {
    return (
        <>
            <header className="bg-ivory fixed z-20 mx-auto w-full max-w-[1600px]">
                <section className="content">
                    <Navbar />
                </section>
            </header>
        </>
    );
};
