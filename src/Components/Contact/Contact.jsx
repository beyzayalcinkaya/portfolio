import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);
    formData.append("access_key", "03defcc5-dc4f-42aa-b521-5e8667c9031f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contactTitle">
        <h1>Get In Touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contactSection">
        <div className="contactLeft">
          <h1>Lets Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contactDetails">
            <div className="contactDetail">
              <span
                class="material-symbols-outlined"
                style={{ color: "green" }}
              >
                mail
              </span>{" "}
              <p>lbeyzayalcinkaya@gmail.com</p>
            </div>

            <div className="contactDetail">
              <span
                class="material-symbols-outlined"
                style={{ color: "green" }}
              >
                location_on
              </span>{" "}
              <p>Turkey</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contactRight">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contactSubmit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
