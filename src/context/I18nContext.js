// src/context/I18nContext.js
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n/translations";

const defaultLang = "en";
const RTL_LANGS = ["ar", "ur", "fa", "he"];

const I18nContext = createContext({
  lang: defaultLang,
  setLang: (l) => {},
  t: (k) => k,
});

export function I18nProvider({ children, initialLang }) {
  const getInitial = () => {
    if (typeof window === "undefined") return initialLang || defaultLang;
    return (
      localStorage.getItem("lang") ||
      navigator.language?.slice(0, 2) ||
      initialLang ||
      defaultLang
    );
  };

  const [lang, setLangState] = useState(getInitial);

  // persist and set dir/lang attributes
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
  };

  // t(key) supports nested keys like "auth.title"
  const t = (key) => {
    const parts = key.split(".");
    let text = translations[lang];
    for (const p of parts) {
      if (!text) break;
      text = text[p];
    }
    if (text === undefined) {
      // fallback to default language
      text = translations[defaultLang];
      for (const p of parts) {
        if (!text) break;
        text = text[p];
      }
    }
    return text ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
