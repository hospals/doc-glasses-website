/** DocGlasses CRM / auth host (sarvadoc-ai dual-deploy). */
export const PORTAL_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL?.replace(/\/$/, "") ||
  "https://portal.docglasses.ai";

export const PORTAL_LOGIN_URL = `${PORTAL_URL}/login`;
