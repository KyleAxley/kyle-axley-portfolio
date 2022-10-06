import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers";


function Contact() {
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const { name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //is valid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value })
            console.log('Handle Form', formState);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };

    return(
        <section>
            <div>
                <h1>Contact me</h1>
            </div>
            <div>
                <form id="contact-form" onSubmit={handleSubmit} className="input-title">
                    <div className="name">
                        <label htmlFor="name" id="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} id="input-area" />
                    </div>

                    <div className="email">
                        <label htmlFor="email" >Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} id="input-area" />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} id="input-area"  />
                    </div>
                    {errorMessage && (
                        <div>
                        <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <div>
                    <a href="mailto:Kanderson7645@yahoo.com?body=My email"className="email-link">
                    Kyle Anderson Email (use this for now)
                        </a>
                </div>
            </div>
      </section>
    )
}

export default Contact;