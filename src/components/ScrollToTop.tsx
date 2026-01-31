"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Disable browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Use layoutEffect for synchronous scroll before paint
  useLayoutEffect(() => {
    // Scroll both window and snap-container (which has its own scroll on desktop)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const snapContainer = document.querySelector(".snap-container");
    if (snapContainer) {
      snapContainer.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
