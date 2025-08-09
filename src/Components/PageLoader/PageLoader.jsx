import React, { useEffect, useState } from "react";
import "./PageLoader.css";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="panel panel1"></div>
      <div className="panel panel2"></div>
      <div className="panel panel3"></div>
      <div className="panel panel4"></div>
    </div>
  );
};

export default PageLoader;
