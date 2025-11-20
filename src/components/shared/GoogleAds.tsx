import Script from "next/script";

export const GoogleAds = ({ GoogleAdsId }: { GoogleAdsId: string }) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAdsId}`}
            />
            <Script id="google-ads-init" strategy="afterInteractive">
                {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GoogleAdsId}');
  `}
            </Script>
        </>
    );
};
