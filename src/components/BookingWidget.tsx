"use client";

import { useEffect, useRef } from "react";

const WIDGET_SCRIPT = "https://api.site2crm.io/api/public/book/booking-widget.js";
const API_BASE = "https://api.site2crm.io";

interface BookingWidgetProps {
  slug: string;
  buttonText?: string;
  buttonColor?: string;
  meeting?: string;
}

export default function BookingWidget({
  slug,
  buttonText = "Book a Meeting",
  buttonColor = "#8b5cf6",
  meeting,
}: BookingWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    const container = containerRef.current;

    function createWidget() {
      // Create the custom element directly with attributes
      const el = document.createElement("s2c-booking");
      el.setAttribute("data-slug", slug);
      el.setAttribute("data-button-text", buttonText);
      el.setAttribute("data-button-color", buttonColor);
      el.setAttribute("data-inline", "true");
      el.setAttribute("data-api-base", API_BASE);
      if (meeting) el.setAttribute("data-meeting", meeting);
      container.appendChild(el);
    }

    // If the custom element is already registered, just create it
    if (customElements.get("s2c-booking")) {
      createWidget();
      return;
    }

    // Otherwise, load the script to register it first
    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    script.onload = () => {
      // Script registered the custom element, now create ours
      // Small delay to ensure customElements.define() has completed
      requestAnimationFrame(() => createWidget());
    };
    document.head.appendChild(script);
  }, [slug, buttonText, buttonColor, meeting]);

  return <div ref={containerRef} />;
}
