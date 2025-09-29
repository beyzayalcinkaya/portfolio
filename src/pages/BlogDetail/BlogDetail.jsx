import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchBlogById } from "../../api";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retryMessage, setRetryMessage] = useState(false);

  useEffect(() => {
    const loadBlog = async () => {
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
  }, [id]);

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
    <section class="blog-detail-container item delay-1">
      <div class="container post-content-wrapper">
        <div
          class="blog-post-content"
          dangerouslySetInnerHTML={{ __html: item.page_desc }}
        />
      </div>
    </section>
  );
};

export default BlogDetail;
