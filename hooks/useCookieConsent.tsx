"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

type CookieConsentContextType = {
  hasConsent: boolean;
  acceptCookieConsent: () => void;
  rejectCookieConsent: () => void;
  shouldShowBanner: boolean;
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export const CookieConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasConsent, setHasConsent] = useState(false);
  const [shouldShowBanner, setShouldShowBanner] = useState(false);

  const acceptCookieConsent = (): void => {
    deleteCookie("docglasses_cookie_consent");
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    setCookie("docglasses_cookie_consent", "1", {
      expires: thirtyDaysFromNow,
      path: "/",
    });
    setHasConsent(true);
    setShouldShowBanner(false); 

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("consent", "GRANTED");
    }
  };

  const rejectCookieConsent = (): void => {
    deleteCookie("docglasses_cookie_consent");
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    setCookie("docglasses_cookie_consent", "0", {
      expires: thirtyDaysFromNow,
      path: "/",
    });
    setHasConsent(false);
    setShouldShowBanner(false); 
    
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("consent", "DENIED");
    }
  };

  useEffect(() => {
    
    const cookieConsent = getCookie("docglasses_cookie_consent");
    console.log("Cookie consent state:", cookieConsent);

    if (cookieConsent === "1") {
      setHasConsent(true);
      setShouldShowBanner(false);
      if (typeof window !== "undefined") {
        window.gtag?.("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
        });
        window.clarity?.("consent", "GRANTED");
      }
      return;
    } 
    
    if (cookieConsent === "0") {
      setHasConsent(false);
      setShouldShowBanner(false);
      if (typeof window !== "undefined") {
        window.gtag?.("consent", "update", {
          ad_storage: "denied",
          analytics_storage: "denied",
        });
        window.clarity?.("consent", "DENIED");
      }
      return;
    }

    setShouldShowBanner(true);
    setHasConsent(false);
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
      window.clarity?.("consent", "DENIED");
    }
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{ hasConsent, acceptCookieConsent, rejectCookieConsent, shouldShowBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};
