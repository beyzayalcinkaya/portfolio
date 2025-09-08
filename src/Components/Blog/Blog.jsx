// src/Components/Blog/Blog.jsx
import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import "./Blog.scss";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.error("Backend error:", err));
  }, []);

  return (
    <div className="container-blog">
      {blogData.map((item) => (
        <Box
          key={item.id}
          name={item.name}
          title={item.title}
          desc1={item.desc1}
        />
      ))}
    </div>
  );
};

export default Blog;
