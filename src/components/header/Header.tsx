import Navbar from "./Navbar";

export const Header = () => {
    return (
        <>
            <header className="content relative z-20">
                <div className="border-grey pc:h-[72px] h-12 border-b">
                    <Navbar />
                </div>
            </header>
        </>
    );
};
