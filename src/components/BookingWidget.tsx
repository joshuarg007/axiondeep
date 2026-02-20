"use client";

import { useEffect, useRef } from "react";

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

    const script = document.createElement("script");
    script.src = "https://api.site2crm.io/api/public/book/booking-widget.js";
    script.async = true;
    script.setAttribute("data-slug", slug);
    script.setAttribute("data-button-text", buttonText);
    script.setAttribute("data-button-color", buttonColor);
    script.setAttribute("data-inline", "true");
    script.setAttribute("data-container", "s2c-booking");
    if (meeting) script.setAttribute("data-meeting", meeting);

    containerRef.current.appendChild(script);
  }, [slug, buttonText, buttonColor, meeting]);

  return (
    <div ref={containerRef}>
      <div id="s2c-booking" />
    </div>
  );
}
