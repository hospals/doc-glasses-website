"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";
import Script from "next/script";
import { useEffect } from "react";

const MicrosoftClarity = () => {
  const { hasConsent } = useCookieConsent();
  const clarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.clarity && clarityId) {
      // Update Clarity consent status when hasConsent changes
      const consentStatus = hasConsent ? 'GRANTED' : 'DENIED';
      window.clarity('consent', consentStatus);
    }
  }, [hasConsent, clarityId]);

  if (!clarityId) {
    return null;
  }
  
  return (
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            
            // Initialize with default consent (denied by default, will be updated by the effect)
            c[a]('consent', 'DENIED');
            
            // Add verification script to log consent status
            c[a]('metadata', function(d, upgrade, consent) {
              console.log('Microsoft Clarity consent status:', consent);
            }, false, true, true);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
};

export default MicrosoftClarity;
