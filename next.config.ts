import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: { bodySizeLimit: "2mb" },
    },
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/en/services/syndrom-sukhoho-oka",
                destination: "/en/services/dry-eye-syndrome",
                permanent: true,
            },
            {
                source: "/ru/uslugi/syndrom-sukhoho-oka",
                destination: "/ru/uslugi/lechenie-sindroma-suhogo-glaza",
                permanent: true,
            },
            {
                source: "/en/services/likuvannya-keratokonusa",
                destination: "/en/services/keratoconus-treatment",
                permanent: true,
            },
            {
                source: "/ru/uslugi/likuvannya-keratokonusa",
                destination: "/ru/uslugi/lecheniye-keratokonusa",
                permanent: true,
            },
            {
                source: "/en/services/dityache-viddilennya",
                destination: "/en/services/children-department",
                permanent: true,
            },
            {
                source: "/ru/uslugi/dityache-viddilennya",
                destination: "/ru/uslugi/detskoye-otdeleniye",
                permanent: true,
            },
            {
                source: "/en/services/perevirka-zoru",
                destination: "/en/services/eye-exam",
                permanent: true,
            },
            {
                source: "/ru/uslugi/perevirka-zoru",
                destination: "/ru/uslugi/proverka-zreniya",
                permanent: true,
            },
            {
                source: "/en/services/hirurgichne-likuvannya-glaukomi",
                destination: "/en/services/surgical-glaucoma-treatment",
                permanent: true,
            },
            {
                source: "/ru/uslugi/hirurgichne-likuvannya-glaukomi",
                destination: "/ru/uslugi/khirurgicheskoye-lecheniye-glaukomy",
                permanent: true,
            },
            {
                source: "/en/services/lazerne-likuvannya-zahvoryuvan-oka",
                destination: "/en/services/laser-treatment-of-eye-diseases",
                permanent: true,
            },
            {
                source: "/ru/uslugi/lazerne-likuvannya-zahvoryuvan-oka",
                destination: "/ru/uslugi/lazernoye-lecheniye-zabolevaniy-glaza",
                permanent: true,
            },
            {
                source: "/en/services/refrakczijna-lensektomiya",
                destination: "/en/services/refractive-lensectomy",
                permanent: true,
            },
            {
                source: "/ru/uslugi/refrakczijna-lensektomiya",
                destination: "/ru/uslugi/intraokuliarnaya-korrekciya",
                permanent: true,
            },
            {
                source: "/ru/uslugi/vitreoretinalna-hirurgiya",
                destination: "/ru/uslugi/vitreoretinalnaya-khirurgiya",
                permanent: true,
            },
            {
                source: "/en/services/vitreoretinalna-hirurgiya",
                destination: "/en/services/vitreoretinal-surgery",
                permanent: true,
            },
            {
                source: "/en/services/intravitrealni-inekczii",
                destination: "/en/services/intravitreal-injections",
                permanent: true,
            },
            {
                source: "/ru/uslugi/intravitrealni-inekczii",
                destination: "/ru/uslugi/intravitrealnyye-inyektsii",
                permanent: true,
            },
            {
                source: "/en/services/ksenonoterapiya",
                destination: "/en/services/xenon-therapy",
                permanent: true,
            },
            {
                source: "/en/services/hirurgiya-povik-i-konyunktivi",
                destination: "/en/services/eyelid-and-conjunctival-surgery",
                permanent: true,
            },
            {
                source: "/ru/uslugi/hirurgiya-povik-i-konyunktivi",
                destination: "/ru/uslugi/khirurgiya-vek-i-konyunktivy",
                permanent: true,
            },
            {
                source: "/en/services/likuvannya-kosookosti",
                destination: "/en/services/strabismus-treatment",
                permanent: true,
            },
            {
                source: "/ru/uslugi/likuvannya-kosookosti",
                destination: "/ru/uslugi/lecheniye-kosoglaziya",
                permanent: true,
            },
            {
                source: "/en/services/anesteziologichnij-posibnik",
                destination: "/en/services/anesthesia-benefit",
                permanent: true,
            },
            {
                source: "/ru/uslugi/anesteziologichnij-posibnik",
                destination: "/ru/uslugi/anesteziologicheskoye-posobiye",
                permanent: true,
            },
            {
                source: "/aktsiyi/premialna-operacziya-za-czinoyu-standartnoyu",
                destination: "/aktsiyi",
                permanent: true,
            },
            {
                source: "/deutsche-klinik",
                destination: "/pro-kliniku",
                permanent: true,
            },
            {
                source: "/en/branches",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/branches/childrens-ophthalmologists",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/branches/clinic-management",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/branches/consultation-and-diagnostic-ophthalmologists",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/branches/doctors-anesthesiologists",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/branches/ophthalmic-surgeons",
                destination: "/en/ophthalmologists",
                permanent: true,
            },
            {
                source: "/en/offers/free-social-cataract-screening-program",
                destination: "/en/offers",
                permanent: true,
            },
            {
                source: "/en/offers/premium-surgery-at-the-price-of-a-standard",
                destination: "/en/offers",
                permanent: true,
            },
            {
                source: "/en/service-prices/children-department",
                destination: "/en/services/children-department",
                permanent: true,
            },
            {
                source: "/en/service-prices/eye-exam",
                destination: "https://eyes.ua/en/services/eye-exam/",
                permanent: true,
            },
            {
                source: "/en/service-prices/laser-treatment-of-eye-diseases",
                destination:
                    "https://eyes.ua/en/services/laser-treatment-of-eye-diseases/",
                permanent: true,
            },
            {
                source: "/en/service-prices/laser-vision-correction",
                destination:
                    "https://eyes.ua/en/services/laser-vision-correction/",
                permanent: true,
            },
            {
                source: "/en/service-prices/refractive-lensectomy",
                destination:
                    "https://eyes.ua/en/services/refractive-lensectomy/",
                permanent: true,
            },
            {
                source: "/en/service-prices/vitreoretinal-surgery",
                destination:
                    "https://eyes.ua/en/services/vitreoretinal-surgery/",
                permanent: true,
            },
            {
                source: "/en/services/cataract-treatment/iq-life-live-vision",
                destination: "/en/services/cataract-treatment",
                permanent: true,
            },
            {
                source: "/posluhy/likuvannya-katarakti/iq-life-zhyvyy-zir",
                destination: "/posluhy/likuvannya-katarakti",
                permanent: true,
            },
            {
                source: "/posluhy/вітреоретинальна-хірургія",
                destination: "/posluhy/vitreoretinalna-hirurgiya",
                permanent: true,
            },
            {
                source: "/posluhy/лазерна-корекція-зору",
                destination: "/posluhy/lazerna-korekcziya-zoru",
                permanent: true,
            },
            {
                source: "/posluhy/лазерна-корекція-зору/iq-lasik-oxygen-3d",
                destination: "/posluhy/lazerna-korekcziya-zoru",
                permanent: true,
            },
            {
                source: "/posluhy/лазерна-корекція-зору/sportlife-lasik",
                destination: "/posluhy/lazerna-korekcziya-zoru",
                permanent: true,
            },
            {
                source: "/posluhy/лікування-катаракти/iq-5-minutes",
                destination: "/posluhy/likuvannya-katarakti",
                permanent: true,
            },
            {
                source: "/posluhy/рефракційна-ленсектомія",
                destination: "/posluhy/refrakczijna-lensektomiya",
                permanent: true,
            },
            {
                source: "/ru/deutsche-klinik-ru",
                destination: "/ru/o-klinike",
                permanent: true,
            },
            {
                source: "/ru/uslugi/lechenie-katarakty/iq-life-zhivoye-zreniye",
                destination: "/ru/uslugi/lechenie-katarakty",
                permanent: true,
            },
            {
                source: "/ru/vse-o-katarakte",
                destination: "/ru/uslugi/lechenie-katarakty",
                permanent: true,
            },
            {
                source: "/viddilennya",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/viddilennya/dityachi-oftalmologi",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/viddilennya/hirurgi-oftalmologi",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/viddilennya/kerivnicztvo-kliniki",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/viddilennya/likari-anesteziologi",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/viddilennya/oftalmologi-konsultativno-diagnostichnogo-viddilennya",
                destination: "/oftalmolohy",
                permanent: true,
            },
            {
                source: "/zakhvoryuvannya-ochey/астигматизм",
                destination: "/zakhvoryuvannya-ochey/astigmatizm",
                permanent: true,
            },
            {
                source: "/zakhvoryuvannya-ochey/далекозорість",
                destination: "/zakhvoryuvannya-ochey/dalekozorist",
                permanent: true,
            },
            {
                source: "/zakhvoryuvannya-ochey/катаракта",
                destination: "/zakhvoryuvannya-ochey/katarakta",
                permanent: true,
            },
            {
                source: "/zakhvoryuvannya-ochey/короткозорість-міопія",
                destination: "/zakhvoryuvannya-ochey/korotkozorist-miopiya",
                permanent: true,
            },
            {
                source: "/zakhvoryuvannya-ochey/косоокість",
                destination: "/zakhvoryuvannya-ochey/kosookist",
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
