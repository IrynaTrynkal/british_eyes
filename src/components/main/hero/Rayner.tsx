import Image from "next/image";

import { ButtonArrow } from "@/components/shared/ButtonArrow";
import { Link } from "@/i18n/navigation";

export const Rayner = ({
    text,
    textPC,
    className,
}: {
    text: React.ReactNode;
    textPC: React.ReactNode;
    className?: string;
}) => {
    return (
        <Link
            href="/rayner-galaxy-ua"
            className={`text-ivory tab:rounded-lg group pc:p-3 pc:flex pc:gap-2 rounded-sm bg-white/10 p-2 ${className}`}
        >
            <div className="pc:w-[131px] mb-1 flex justify-between">
                <div className="pc:w-[131px] pc:h-[132px] relative h-[51px] w-[51px]">
                    <Image
                        src="/images/rayner.png"
                        alt="Rayner Galaxy"
                        fill
                        className="object-contain"
                    />
                </div>
                <ButtonArrow className="pc:hidden mt-1 mr-1" white />
            </div>
            <div>
                <div className="pc:flex pc:justify-between pc:mb-8 pc:items-center">
                    <h3 className="font-oswald pc:mb-0 pc:text-2xl mb-3 text-xl leading-none">
                        Rayner GALAXY
                    </h3>
                    <ButtonArrow className="pc:flex mt-1 mr-1 hidden" white />
                </div>
                <p className="pc:hidden text-sm leading-4 uppercase">{text}</p>
                <p className="pc:text-base pc:block pc:leading-5 hidden text-sm leading-4 uppercase">
                    {textPC}
                </p>
            </div>
        </Link>
    );
};
