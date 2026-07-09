import { escapeXml, formatMultiline } from "@/lib/email/escape-xml";

const BORDER = "#e5e7eb";
const LABEL = "#6b7280";
const VALUE = "#111827";
const LINK = "#3a9d7a";

export function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:11px 0;border-bottom:1px solid ${BORDER};width:130px;font-size:12px;font-weight:600;letter-spacing:0.03em;text-transform:uppercase;color:${LABEL};vertical-align:top;">${escapeXml(label)}</td>
    <td style="padding:11px 0 11px 16px;border-bottom:1px solid ${BORDER};font-size:15px;line-height:1.5;color:${VALUE};vertical-align:top;">${formatMultiline(value)}</td>
  </tr>`;
}

export function linkRow(label: string, href: string, text: string) {
  return `<tr>
    <td style="padding:11px 0;border-bottom:1px solid ${BORDER};width:130px;font-size:12px;font-weight:600;letter-spacing:0.03em;text-transform:uppercase;color:${LABEL};vertical-align:top;">${escapeXml(label)}</td>
    <td style="padding:11px 0 11px 16px;border-bottom:1px solid ${BORDER};font-size:15px;line-height:1.5;color:${VALUE};vertical-align:top;">
      <a href="${escapeXml(href)}" style="color:${LINK};text-decoration:none;font-weight:600;">${escapeXml(text)}</a>
    </td>
  </tr>`;
}

export function optionalRow(label: string, value: string | undefined) {
  if (!value?.trim()) return "";
  return detailRow(label, value);
}
