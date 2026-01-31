"use client";

import { useEffect, useRef } from "react";

interface Site2CRMWidgetProps {
  orgKey: string;
  containerId?: string;
}

export default function Site2CRMWidget({
  orgKey,
  containerId = "s2c-form"
}: Site2CRMWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://api.site2crm.io/api/public/forms/widget.js";
    script.async = true;
    script.setAttribute("data-org-key", orgKey);
    script.setAttribute("data-container", containerId);
    script.setAttribute("data-source", "axiondeep.com");

    containerRef.current?.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      if (containerRef.current) {
        const existingScript = containerRef.current.querySelector("script");
        if (existingScript) {
          containerRef.current.removeChild(existingScript);
        }
      }
    };
  }, [orgKey, containerId]);

  return (
    <div ref={containerRef}>
      <div id={containerId} />
    </div>
  );
}
