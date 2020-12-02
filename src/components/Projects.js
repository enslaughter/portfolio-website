import React from "react";

function Projects(){
    return(
        <div className="projects">
            <h1>MY PROJECTS</h1>
            <p>A curation of my web projects. All designs/challenges by Frontend Mentor.</p>            

            <div className="projects-container">
                <div className="project-object">
                    <h2>Base Apparel Landing Page</h2>
                    <img src={process.env.PUBLIC_URL + "/images/project_baseapparel.png"} alt="Base Apparel Project"></img>
                    <h3>Technologies Used</h3>
                    <p>HTML, CSS, JS</p>
                    <h3>Project Description</h3>
                    <p>A simple landing page for a company just starting up. Features a simple layout with an e-mail signup with validation features. Designed
                        to be responsive for a similar experience on mobile devices.</p>
                    <a href="https://fem-base-apparel-coming-soon-page.vercel.app/" rel="noreferrer" target="_blank">VIEW PROJECT</a>
                </div>
                <div className="project-object">
                    <h2>Intro Component with Signup Form</h2>
                    <img src={process.env.PUBLIC_URL + "/images/project_introcomponent.png"} alt="Base Apparel Project"></img>
                    <h3>Technologies Used</h3>
                    <p>HTML, CSS, JS</p>
                    <h3>Project Description</h3>
                    <p>An evolution of the previous challenge, this website demonstrates a more complex form with validation for all fields. </p>
                    <a href="https://fem-intro-component-with-signup.vercel.app/" rel="noreferrer" target="_blank">VIEW PROJECT</a>
                </div>
                <div className="project-object">
                    <h2>Price Component with Toggle</h2>
                    <img src={process.env.PUBLIC_URL + "/images/project_pricetoggle.png"} alt="Base Apparel Project"></img>
                    <h3>Technologies Used</h3>
                    <p>HTML, CSS, JS</p>
                    <h3>Project Description</h3>
                    <p>A project with some more sophistocapted stylings. Almost entirely done in HTML/CSS, but the price toggle is coded
                        with some basic Javascript functionality.</p>
                    <a href="https://fem-pricing-component-with-toggle-khaki.vercel.app/" rel="noreferrer" target="_blank">VIEW PROJECT</a>
                </div>
                <div className="project-object">
                    <h2>Fully Functional URL Shortener Page</h2>
                    <img src={process.env.PUBLIC_URL + "/images/project_api_1_cropped.png"} alt="Base Apparel Project"></img>
                    <h3>Technologies Used</h3>
                    <p>HTML, CSS, JS, Node.js, Express, API</p>
                    <h3>Project Description</h3>
                    <p>My most advanced project to date, this website is a fully-functional landing page. On top of plenty of advanced styling,
                        this project uses the "shrtcode" URL Shortener API as its base functionality. The website itself is a fullstack project 
                        with its backend being made with Node.js, Express, and EJS. Try it for yourself!</p>
                    <a href="https://stormy-mountain-12638.herokuapp.com/" rel="noreferrer" target="_blank">VIEW PROJECT</a>
                </div>
            </div>
            <div className="footer">
                <p className="attribution">Copyright Eli Slaughter 2020</p>
            </div>
        </div>

    );
}

export default Projects;