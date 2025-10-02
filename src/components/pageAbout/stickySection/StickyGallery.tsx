import Image from "next/image";

export const StickyGallery = ({ images }: { images: string[] }) => {
    return (
        <div className="tab:grid tab:max-w-[720px] prepc:w-[74.6%] prepc:max-w-[1003px] hidden h-fit w-full grid-cols-3 grid-rows-3 gap-2">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`overflow-hidden ${
                        index === 0
                            ? "col-span-2 row-span-2 aspect-[662/366]"
                            : "aspect-[321/175]"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`equipment-${index + 1}`}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            ))}
        </div>
    );
};
