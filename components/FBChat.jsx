import Script from "next/script";

export default function () {
  return (
    <>
      <div id="fb-root"></div>
      <Script>
        {`window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`}
      </Script>

      <div
        className="fb-customerchat"
        attribution="page_inbox"
        page_id="100718648344812"
      ></div>
    </>
  );
}
