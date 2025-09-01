import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:name" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
