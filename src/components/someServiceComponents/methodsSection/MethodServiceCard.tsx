import { MethodCardProps } from "@/components/assets/servicesData";
import { IconArrow } from "@/components/shared/icons/IconArrow";
import { Link } from "@/i18n/navigation";

export const MethodServiceCard = ({ data }: { data: MethodCardProps }) => {
    return (
        <Link
            href={`/poslugy/${data.link}` as any}
            className="border-grey group relative aspect-[288/189] w-full overflow-hidden rounded border"
        >
            <div
                className={
                    "aspect-[288/189] w-full bg-cover bg-center bg-blend-overlay transition-all duration-300 ease-in-out group-hover:bg-blend-hard-light"
                }
                style={{
                    backgroundImage: `
                linear-gradient(104.29deg, rgba(0, 54, 38, 0.8) 0.79%, rgba(11, 117, 86, 0.36) 87.17%),
                url(${data.image})
            `,
                    backgroundColor: "#065d43",
                }}
            />
            <h3 className="font-oswald text-white-100 prepc:text-[42px] tab:text-3xl absolute top-1/2 left-1/2 -translate-1/2 text-2xl leading-7 font-medium whitespace-nowrap uppercase transition-transform duration-300 ease-in-out group-hover:scale-110">
                {data.title}
            </h3>
            <div className="bg-ivory tab:max-w-[447px] tab:w-full tab:left-auto tab:right-0 prepc:p-2 pc:p-3 absolute bottom-0 flex items-center rounded p-[5.2px]">
                <p className="tab:text-sm tab:leading-4 prepc:text-base prepc:leading-5 w-[calc(100%-40px)] text-xs leading-[15px] uppercase">
                    {data.text}
                </p>
                <div className="flex h-10 w-10 items-center justify-center">
                    <IconArrow className="transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
                </div>
            </div>
        </Link>
    );
};
