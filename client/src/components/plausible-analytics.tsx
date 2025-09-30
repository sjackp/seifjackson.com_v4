import { useEffect } from "react";

interface PlausibleAnalyticsProps {
  domain: string;
  scriptSrc?: string;
}

export default function PlausibleAnalytics({ domain, scriptSrc }: PlausibleAnalyticsProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // don't inject twice
    if (document.querySelector(`script[data-domain="${domain}"]`)) return;

    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", domain);
    script.src = scriptSrc || `https://${domain}/js/script.js`;
    document.head.appendChild(script);

    const stub = document.createElement("script");
    stub.innerHTML = `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`;
    document.head.appendChild(stub);

    return () => {
      const s = document.querySelector(`script[data-domain="${domain}"]`);
      if (s) s.remove();
      if (stub) stub.remove();
    };
  }, [domain, scriptSrc]);

  return null;
}

export function usePlausible() {
  function track(eventName: string, props?: Record<string, unknown>) {
    if (typeof window === "undefined") return;
    try {
      (window as any).plausible && (window as any).plausible(eventName, { props });
    } catch (e) {
      // noop
    }
  }

  return { track };
}


