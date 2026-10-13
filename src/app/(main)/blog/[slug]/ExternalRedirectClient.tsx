"use client";

import { useEffect } from "react";

/** Sends the visitor to another site. Used for posts that moved to the brand
 *  that owns the subject, so the old Labs URL still lands somewhere useful. */
export default function ExternalRedirectClient({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);
  return null;
}
