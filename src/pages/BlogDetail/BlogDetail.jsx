import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../../api"; // <- burayı ekledik
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogById(id)
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API hatası:", err);
        setItem(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!item) return <p>Blog bulunamadı.</p>;

  return (
    <section className="blog-detail-container" style={{ padding: "2rem" }}>
      <h1>{item.title}</h1>
      <p>{item.page_desc}</p>
    </section>
  );
};

export default BlogDetail;
