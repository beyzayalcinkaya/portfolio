import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footerButtom">
        <p>© 2025 Beyza Yalçınkaya. {t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
