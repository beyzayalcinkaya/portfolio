import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchBlogById } from "../../api";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retryMessage, setRetryMessage] = useState(false);

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      setRetryMessage(false);
      try {
        const data = await fetchBlogById(id, 3, 1000);
        setItem(data);
      } catch (err) {
        console.error("API hatası:", err);
        setRetryMessage(true);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id, i18n.language]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>{t("loading")}</p>
        <p>{t("loadingTime")}</p>
      </div>
    );
  }

  if (retryMessage) {
    return (
      <div className="spinner-container">
        <p>{t("backendSleep")}</p>
      </div>
    );
  }

  if (!item) return <p>Blog bulunamadı.</p>;

  return (
    <section className="blog-detail-container item delay-1">
      <div className="container post-content-wrapper">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: item.page_desc }}
        />
      </div>
    </section>
  );
};

export default BlogDetail;
