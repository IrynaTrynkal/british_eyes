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
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
