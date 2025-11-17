"use client";

import Script from "next/script";

export const BinotelChat = () => {
    return (
        <Script id="binotel-chat" strategy="afterInteractive">
            {`
        (function(d, w, s) {
          var widgetHash = 'nYlU4dOMPLM1vnvhEoRB',
              bch = d.createElement(s);
          bch.type = 'text/javascript';
          bch.async = true;
          bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
          var sn = d.getElementsByTagName(s)[0];
          sn.parentNode.insertBefore(bch, sn);
        })(document, window, 'script');
      `}
        </Script>
    );
};
