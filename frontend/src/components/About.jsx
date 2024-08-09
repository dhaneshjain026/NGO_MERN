import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          We are a dedicated NGO focused on empowering communities through education, health, and sustainable development. 
          By collaborating with local partners and passionate volunteers, we implement innovative projects that address both immediate needs and the 
          root causes of social challenges. Our mission is to create lasting, positive change, ensuring that everyone has the opportunity to thrive.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;