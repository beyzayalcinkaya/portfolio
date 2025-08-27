import React from "react";
import { useTranslation } from "react-i18next";
import Services_Data from "../../data/services_data";
import "./Services.scss";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1>{t("myServices")}</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-desc">
              <h2>{t(service.s_name)}</h2>
              <p>{t(service.s_desc)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
