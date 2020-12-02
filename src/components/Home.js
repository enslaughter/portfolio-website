import React from "react";

function Home(){
    return(
        <div className="App">

      <div className="hero-image">
        <div className="hero-text">
          <h1 className="hero-header">Elijah Slaughter</h1>
          <p className="hero-subheader">A programmer and junior frontend developer.</p>
        </div>
      </div>

      <div className="about">
        <div className="about-points">
          <h2>A Little Bit About Me</h2>
          <p>After graduating from Honors Chemical Engineering program at the University of Waterloo,
              I realized that it just wasn't the path for me. Programming really spoke to me. Ever since,
              I've been teaching myself it through theory and practice on how to master it. I'm a very
              self-driven person, and I take pride in being able to apply everything I learn.</p>

          <h2>What I Can Do</h2>
          <p>I might be new, but I have the skills required to make simple, functional websites for clients of any type.
              Whether you give me a design, get me to do it, or somewhere in between, I'll deliver you a site that works
              for you. </p>
              <p>
                Not interested in a website? That's fine too! I love to solve problems, and am more than willing to take on
                any challenge you send my way. 
              </p>

          <h2>What I Want To Do</h2>
          <p>As I've spend more and more time learning how to be a skilled programmer, I've learned that I still have a long
              way to go. I want to be able to work on large projects or even small ones with a noteworthy purpose. As hard as it 
              may be, I want to try a little bit of everything, and become a master at what resonates with me.</p>
              <p>Currently, I am interested in taking on small projects to help build up my portfolio and give me some
                  experience at doing some real-world web development.</p>
        </div>
        
        <div className="about-skills">
          <h2>Skills</h2>
          <p>Most of my experience comes in the form of a frontend web development stack. My stack is listed below as; HTML, CSS, JS, React, and Node.</p>
            <div className="skills-container">
              <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/html5.svg"} alt="HTML 5"></img>
              <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/css3.svg"} alt="CSS 3"></img>
              <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/javascript-4.svg"} alt="Javascript ES6"></img>
              <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/react.svg"} alt="React"></img>
              <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/node-js-logo.svg"} alt="Node JS"></img>
            </div>

            <h2>Other Interests</h2>
            <h3>Technical</h3>
            <p>I have a little bit of experience in python, and I participated in this year's Global Game Jam.
                I also have interest in game design in general, and have a bit of experience in using Unity and C#.</p>
            <h3>Recreational</h3>
            <p>Outside of programming, I play my fair share of video games. I love to write stories and brainstorm with others
                about worldbuilding. I also love to cook and bake, and might even make myself my own cooking blog one day!</p>
        </div>
      </div>

      <div className="cta">
        <h2 className="cta-header">Interested in a Website?</h2>
        <a className="cta-button" href="/contact">Let's chat</a>
      </div>

      <div className="footer">
        <p className="attribution">Copyright Eli Slaughter 2020</p>
      </div>
    </div>
    );
}

export default Home;