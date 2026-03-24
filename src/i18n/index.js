//src/i18n/index.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import es from "./locales/es/common.json"
import eu from "./locales/eu/common.json"

i18n
    .use(LanguageDetector)

    .use(initReactI18next)

    .init({

    resources:{
        es:{translation:es},
        eu:{translation:eu}
        },
        fallbackLng:"eu",
        interpolation:{escapeValue:false
        }
    })

export default i18n