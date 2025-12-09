import { ContentType } from "@/components/assets/patientsInstructionData";

export function getFirstImage(content: ContentType[]): string | null {
    for (const block of content) {
        for (const t of block.text) {
            if (t.type === "image") {
                return t.image;
            }
        }
    }
    return null;
}
