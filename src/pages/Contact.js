import React from "react";
import Button from 'react-bootstrap/Button';
import "../style/Contact.css"

/* import { Link } from 'react-router-dom'; */

export default function Contact() {
    return (
        <div className='contact-list'>
            <div className="title">
                <h4>Contact Information</h4>
            </div>
            <div className="contactInfo">
                <Button onClick={() => window.location = 'mailto:vthalissa@yahoo.com'} className="contactButton">Email Me</Button>
                
               
                <Button variant="primary" href="https://github.com/ThalVal" className="contactButton">Visit GitHub Repo</Button>

                <Button variant="primary" href="https://profile.indeed.com/resume" className="contactButton">Indeed</Button>
                </div>
            </div>
            )
}