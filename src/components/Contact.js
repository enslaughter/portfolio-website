import React, {useState} from "react";
import emailjs from "emailjs-com";

function Contact(){
    const [msg, setMsg] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    })

    // function handleSubmit(event) {
    //     event.preventDefault();
        
    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_MAILGUN_DOMAIN,
            
    //         auth: {
    //             username: "api",
    //             password: process.env.REACT_APP_MAILGUN_KEY
    //         },
    //         params: {
    //             from: `${msg.name} <${msg.email}>`,
    //             to: process.env.REACT_APP_MAILGUN_EMAIL,
    //             subject: "New Work Request via Website",
    //             text: `${msg.message}`
    //         },
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then (
    //         response => {
    //             console.log(response);
    //             setMsg({
    //                 name: "",
    //                 email: "",
    //                 message: ""
    //             });
    //         },
    //         reject => {
    //             console.log(reject);
    //         }
    //     )

    //     console.log(msg);
    // }

    function handleSubmit(event){
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, event.target, process.env.REACT_APP_EMAILJS_USERID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMsg(prevMsg => {
            return {
                ...prevMsg,
                [name]: value
            };
        });
    }

    return(
        <div className="contact-me">
            <div className="contact-container">  
                <div className="contact-container--left">
                    <h1 className="contact-header">Contact me</h1>
                    <p className="contact-subheader">If you're interested in a project, contact me below:</p>

                    <form className="contact-form" onSubmit={handleSubmit} method="post" encType="text/plain">
                        <label htmlFor="from_name">Name</label> 
                        <br></br>
                        <input type="text" name="from_name" id="from_name" value={msg.from_name} onChange = {handleChange}/>
                        <br></br>
                        <br></br>
                        <label htmlFor="reply_to">Contact e-mail</label>
                        <br></br>
                        <input type="email" name="reply_to" id="reply_to" value={msg.reply_to} onChange = {handleChange}/>
                        <br></br>
                        <br></br>
                        <label htmlFor="message">Message</label>
                        <br></br>
                        <textarea id="message" name="message" rows="5" value={msg.message} onChange = {handleChange}/>

                        <button type="submit" className="contact-button">Contact Me!</button>
                    </form>
                    <br></br>
                    <p className="contact-subheader">Alternatively, if forms aren't your thing, I can be contacted in various other ways:</p>
                    <div className="contact-socials">
                        <div className="socials-column--icons">
                            <div className="social-container">
                                <p>Twitter</p>
                                <a className="social-link" rel="noreferrer" target="_blank" href="https://twitter.com/enslaugh"><i className="fab fa-twitter fa-4x"></i></a>
                            </div>
                            <div className="social-container">
                                <p>Linkedin</p>
                                <a className="social-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/eli-slaughter-86b8a550/"><i className="fab fa-linkedin fa-4x"></i></a>
                            </div>
                            <div className="social-container">
                                <p>Instagram</p>
                                <a className="social-link" rel="noreferrer" target="_blank" href="https://www.instagram.com/enslaughter/"><i className="fab fa-instagram fa-4x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-container--right"></div>
            </div>

            <div className="footer">
                <p className="attribution">Copyright Eli Slaughter 2020</p>
            </div>
        </div>
    );
}

export default Contact;