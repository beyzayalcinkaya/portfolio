import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { name } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den tüm blogları çekiyoruz
    fetch("http://localhost:3002/blogs")
      .then((res) => res.json())
      .then((data) => {
        // name ile eşleşen blogu bul
        const blogItem = data.find((b) => b.name === name);
        setItem(blogItem);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API hatası:", err);
        setLoading(false);
      });
  }, [name]);

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
