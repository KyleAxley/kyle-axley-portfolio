import React from "react";
import headshot from "../../assets/Kyle-Headshot3.jpg";

function About() {
  return (
    <div>
      <section id="about">
        <h1 className="about-me">Kyle | Axley | Anderson</h1>
        <hr />
        <img
          src={headshot}
          className="profilePic"
          alt="Kyle Axley Anderson"
        ></img>
        <p>Full-stack web developer</p>

        <p>About | Me</p>
        <p>
          I enjoy writing code and solving the challenges that can come with it.{" "}
          <br></br>
        </p>
        <p>
          When I am not coding I am either spending time with my family and or
          cooking some delicious food!<br></br> I was a professional chef for 20
          years before changing paths and embarking on the web development
          journey.<br></br> My goals would be to help develop the restaurant
          industry in technology by using my experience in the field combined
          with the new found ones with the coding community.
        </p>
      </section>
      <hr />
    </div>
  );
}

export default About;
