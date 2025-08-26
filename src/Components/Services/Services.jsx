import React from "react";
import Services_Data from "../../data/services_data";
import "./Services.scss";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-desc">
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
