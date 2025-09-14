import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import { fetchBlogs } from "../../api"; // <- burayı ekledik
import "./Blog.scss";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogData(data))
      .catch((err) => console.error("Backend error:", err));
  }, []);

  return (
    <div className="container-blog">
      {blogData.map((item) => (
        <Box
          key={item.id}
          id={item.id}
          name={item.name}
          title={item.title}
          desc1={item.desc1}
        />
      ))}
    </div>
  );
};

export default Blog;
