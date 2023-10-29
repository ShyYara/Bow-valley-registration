import React from "react";
import "./about.css";
import Title from "../../common/title/Title";

export const About = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title title="Login to see courses" />
          </div>
        </div>
      </section>
      <div className="margigin"></div>
    </>
  );
};

export default About;
