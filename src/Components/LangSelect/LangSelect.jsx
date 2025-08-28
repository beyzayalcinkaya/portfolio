import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./LangSelect.scss";

const LANG_UI = {
  en: {
    flag: "🇬🇧",
    code: "EN",
  },
  tr: {
    flag: "🇹🇷",
    code: "TR",
  },
};

const LangSelect = () => {
  const { i18n } = useTranslation();
  const initialLang = localStorage.getItem("lng") || "en";

  const [selectedLang, setSelectedLang] = useState(initialLang);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
    try {
      localStorage.setItem("lng", lng);
    } catch {}
    setIsOpen(false);
  };

  return (
    <li className="nav-item lang " ref={rootRef}>
      <button
        type="button"
        className="lang-btn"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="flag">{LANG_UI[selectedLang].flag}</span>
        <span className="code">{LANG_UI[selectedLang].code}</span>
        <span className="material-symbols-outlined">expand_more</span>
      </button>

      <ul className={`lang-menu ${isOpen ? "open" : ""}`} role="menu">
        <li>
          <button
            type="button"
            className={`lang-option ${selectedLang === "en" ? "selected" : ""}`}
            onClick={() => changeLang("en")}
          >
            <span className="flag">🇬🇧</span>
            <span className="code">EN</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`lang-option ${selectedLang === "tr" ? "selected" : ""}`}
            onClick={() => changeLang("tr")}
          >
            <span className="flag">🇹🇷</span>
            <span className="code">TR</span>
          </button>
        </li>
      </ul>
    </li>
  );
};

export default LangSelect;
