import React from "react";
import headshot from "../../assets/images/Kyle-Headshot3.jpg";

function About() {
  return (
    <div>
      <section id="about">
      <h1>Kyle | Axley | Anderson</h1>
        <div id="about-form">
          <img
            src={headshot}
            className="profilePic"
            alt="Kyle Axley Anderson"
          ></img>
          <p className="title">Full-stack web developer</p>
          <strong>About | Me</strong>
          <p>
           I enjoy writing code and solving the challenges that can come with it.
            When I am not coding I am either spending time with my family and or
            cooking some delicious food! I was a professional chef for 17
            years before changing paths and embarking on the web development
            journey. My goals would be to help develop the restaurant
            industry in technology by using my experience in the field combined
            with the new found ones I obtained from the Case Western Reserve Coding Bootcamp.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
