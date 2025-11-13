export const Subtitle = ({ children }: { children: React.ReactNode }) => (
    <span
        style={{
            textTransform: "uppercase",
            fontFamily: "var(--font-oswald)",
        }}
    >
        {children}
    </span>
);
