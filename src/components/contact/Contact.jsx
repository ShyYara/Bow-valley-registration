import React from "react";
import Back from "../common/background/Background";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1> Contact Us</h1>

            <div items grid2>
              <div className="box">
                <h4>ADDRESS</h4>
                <p>345 6 Ave SE, Calgary, AB T2G 4V1</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>Phone:</h4>
                <p>+1(403)410-1400</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
