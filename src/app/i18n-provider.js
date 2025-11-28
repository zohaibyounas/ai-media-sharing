// app/i18n-provider.js
"use client";

import { I18nProvider } from "../context/I18nContext";

export default function Providers({ children }) {
  return <I18nProvider>{children}</I18nProvider>;
}
