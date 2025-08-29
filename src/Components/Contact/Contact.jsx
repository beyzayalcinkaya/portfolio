import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "03defcc5-dc4f-42aa-b521-5e8667c9031f");
    //formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title item delay-1">
        <h1>{t("getInTouch")}</h1>
      </div>
      <div className="contact-section">
        <form onSubmit={onSubmit} className="contact-form item delay-2">
          <label htmlFor="" className="item delay-3">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            placeholder={t("namePlaceholder")}
            name="name"
            className="item delay-4"
          />

          <label htmlFor="" className="item delay-5">
            {t("emailLabel")}
          </label>
          <input
            type="text"
            placeholder={t("emailPlaceholder")}
            name="email"
            className="item delay-6"
          />
          <label htmlFor="" className="item delay-7">
            {t("messageLabel")}
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder={t("messagePlaceholder")}
            className="item delay-8"
          ></textarea>
          <button type="submit" className="contact-submit item delay-9">
            {t("submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
