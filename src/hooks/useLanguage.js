import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    const lang = i18n.language;

    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    localStorage.setItem("lang", lang);
  }, [i18n.language]);

  const toggleLang = () => {
    const lang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(lang);
  };

  return {
    lang: i18n.language,
    toggleLang,
    isRTL: i18n.language === "ar",
  };
};
