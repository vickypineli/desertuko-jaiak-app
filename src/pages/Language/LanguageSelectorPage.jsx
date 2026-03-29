//src/pages/Language/LanguageSelectorPage.jsx

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MdOutlineCelebration } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./LanguageSelectorPage.scss";

export default function LanguageSelectorPage() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    navigate("/schedule");
  }

  return (
    <div className="language-page">
      <main className="language-page__content">
        
        <div className="language-page__header">
          <span className="language-page__icon">
            <MdOutlineCelebration size={52} />
          </span>
          <h1 className="language-page__title">{t("festivalName")}</h1>
          <h1 className="language-page__subtitle">{t("festivalSubName")}</h1>
        </div>
        <img
          src="/images/tinoHome.png"
          alt="Desertuko Jaiak"
          className="language-page__image"
        />

        <div className="language-page__selector">
          <p className="language-page__hint">
              {t("selectLanguageSub")} / {t("selectLanguage")}
          </p>

          <div className="language-page__buttons">

            <button
              className={`lang-btn lang-btn--primary ${
                currentLang === "eu" ? "lang-btn--active" : ""
              }`}
              onClick={() => changeLanguage("eu")}
            >
              <span>Euskara</span>
              <MdArrowForwardIos className="lang-btn__icon" size={18} />
            </button>

            <button
              className={`lang-btn lang-btn--secondary ${
                currentLang === "es" ? "lang-btn--active" : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              <span>Castellano</span>
              <MdArrowForwardIos className="lang-btn__icon" size={18} />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}