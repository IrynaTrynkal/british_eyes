import Script from "next/script";

export function BinotelChat() {
    return (
        <>
            {/* === Мультимовність для GetCall === */}
            <Script id="binotel-getcall-lang" strategy="afterInteractive">
                {`
(function() {
    var path = window.location.pathname.toLowerCase();
    var lang = 'ua';

    if (path.startsWith('/ru')) lang = 'ru';
    else if (path.startsWith('/en')) lang = 'en';
    else if (path.startsWith('/ua')) lang = 'ua';

    window.BinotelGetCallSettings = { language: lang };
})();
                `}
            </Script>

            {/* === GetCall Widget === */}
            <Script id="binotel-getcall" strategy="afterInteractive">
                {`
(function(d, w, s) {
    var widgetHash = 'rz5porl99lpafaaatagd';
    var gcw = d.createElement(s);
    gcw.type = 'text/javascript';
    gcw.async = true;
    gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js';
    var sn = d.getElementsByTagName(s)[0];
    sn.parentNode.insertBefore(gcw, sn);
})(document, window, 'script');
                `}
            </Script>

            {/* === Мультимовність для Chat === */}
            <Script id="binotel-chat-lang" strategy="afterInteractive">
                {`
(function() {
    var path = window.location.pathname.toLowerCase();
    var lang = 'ua';

    if (path.startsWith('/ru')) lang = 'ru';
    else if (path.startsWith('/en')) lang = 'en';
    else if (path.startsWith('/ua')) lang = 'ua';

    window.BinotelChatSettings = { language: lang };
})();
                `}
            </Script>

            {/* === Chat Widget === */}
            <Script id="binotel-chat" strategy="afterInteractive">
                {`
(function(d, w, s) {
    var widgetHash = 'nYlU4dOMPLM1vnvhEoRB';
    var bch = d.createElement(s);
    bch.type = 'text/javascript';
    bch.async = true;
    bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
    var sn = d.getElementsByTagName(s)[0];
    sn.parentNode.insertBefore(bch, sn);
})(document, window, 'script');
                `}
            </Script>
        </>
    );
}
