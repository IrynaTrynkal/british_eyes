export const SubtitleWithGap = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <span
        style={{
            textTransform: "uppercase",
            fontFamily: "var(--font-oswald)",
            marginBottom: "8px",
        }}
    >
        {children}
    </span>
);
