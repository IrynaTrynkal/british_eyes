import Image from "next/image";

import { CallMeModal } from "./CallMeModal";

export const Global = () => {
    return (
        <section className="tab:pb-12 pc:pb-[120px] tab:min-h-auto relative min-h-[612px] pb-[60px]">
            <Image
                src="/images/mapGlobal.webp"
                alt="map of the world"
                width={1341}
                height={782}
            />
            <div className="tab:px-0 prepc:max-w-[706px] tab:max-w-[550px] tab:top-1/2 tab:-translate-y-3/5 absolute top-[76px] left-1/2 z-[1] w-full max-w-[360px] -translate-x-1/2 px-4">
                <div className="cta-green-gradient prepc:px-6 prepc:py-10 w-full rounded-lg px-3 py-8">
                    <h2 className="title-section-ivory tab:max-w-[350px] prepc:max-w-[482px] prepc:mb-8 mx-auto mb-4 max-w-[248px] text-center">
                        Приймаємо пацієнтів з інших міст та країн
                    </h2>
                    <p className="pc:text-lg pc:leading-[22px] text-ivory prepc:mb-8 tab:max-w-[350px] prepc:max-w-[400px] mx-auto mb-4 max-w-[248px] text-center leading-5">
                        Залиште свої дані і ми звяжемось з вами найближчим часом
                    </p>
                    <CallMeModal />
                </div>
            </div>
        </section>
    );
};
