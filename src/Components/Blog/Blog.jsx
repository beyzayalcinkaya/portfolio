import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "../Box/Box";
import { fetchBlogs } from "../../api";
import "./Blog.scss";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retryMessage, setRetryMessage] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      setRetryMessage(false);
      try {
        const data = await fetchBlogs(3, 1000);
        setBlogData(data);
      } catch (err) {
        console.error("Backend error:", err);
        setRetryMessage(true);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [i18n.language]);

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

  return (
    <div className="container-blog item delay-1">
      {blogData.map((item) => (
        <Box
          key={item.id}
          id={item.id}
          name={item.name}
          title={item.title}
          desc1={item.desc1}
          readingTime={item.reading_time}
        />
      ))}
    </div>
  );
};

export default Blog;
