export interface SanityPortableTextSpan {
    _type: "span";
    text?: string;
}

export interface SanityPortableTextBlock {
    _type: "block";
    children?: SanityPortableTextSpan[];
}

export type PortableTextValue = Array<
    SanityPortableTextBlock | Record<string, unknown>
>;

export function toPlainText(blocks: PortableTextValue = []): string {
    return blocks
        .map((block: SanityPortableTextBlock | Record<string, unknown>) => {
            if (block && (block as SanityPortableTextBlock)._type === "block") {
                const b = block as SanityPortableTextBlock;
                if (!b.children || !Array.isArray(b.children)) return "";
                return b.children
                    .map((child: SanityPortableTextSpan) => child.text ?? "")
                    .join("");
            }
            return "";
        })
        .join("\n\n");
}
