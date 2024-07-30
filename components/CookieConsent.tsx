'use client';
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { useLocale } from "@/lang/LocaleContext";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);
    const { DATA } = useLocale() || {};

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-70 z-[1000] ">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-blue-80">
        <span className="text-dark text-base mr-16">
            {DATA?.COOKIES_CONSENT}
        </span>
        <button className="bg-gray-80 py-2 px-8 rounded text-white font-semibold" onClick={() => acceptCookie()}>
        {DATA?.COOKIES_CONSENT_ACCEPT}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;