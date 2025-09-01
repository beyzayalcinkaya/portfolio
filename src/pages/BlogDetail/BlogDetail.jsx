import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blog_data.json";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { name } = useParams();
  const item = blogData.find((b) => b.name === name);

  return (
    <section className="blog-detail-container" style={{ padding: "2rem" }}>
      <h1>{item.title}</h1>
      <p>{item.pageDesc}</p>
    </section>
  );
};

export default BlogDetail;
