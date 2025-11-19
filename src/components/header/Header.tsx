import Navbar from "./Navbar";

export const Header = () => {
    return (
        <header className="bg-ivory fixed top-0 left-1/2 z-20 w-full max-w-[1600px] -translate-x-1/2">
            <section className="content">
                <Navbar />
            </section>
        </header>
    );
};
