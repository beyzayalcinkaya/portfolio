import React from "react";
import Box from "../Box/Box";
import blogData from "../../data/blog_data.json";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="container-blog">
      {blogData.map((item) => (
        <Box key={item.id} title={item.title} desc1={item.desc1} />
      ))}
    </div>
  );
};

export default Blog;
