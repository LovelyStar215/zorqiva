/** Escape dynamic values embedded in MJML / HTML email content. */
export function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function formatMultiline(value: string) {
  return escapeXml(value).replaceAll("\n", "<br />");
}
