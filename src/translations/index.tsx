import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "./languages";
import env from "../environments";

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      es,
      en,
    },
    lng: env.REACT_APP_WEBSITE_LANG,
    fallbackLng: env.REACT_APP_WEBSITE_LANG_SECONDARY,
    interpolation: {
      escapeValue: false
    }
  });
