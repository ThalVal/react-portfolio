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
                <Button onClick={() => window.location = 'mailto:'} className="contactButton">Email Me</Button>
                
               
                <Button variant="primary" href="" className="contactButton">Visit GitHub Repo</Button>

                <Button variant="primary" href="" className="contactButton">LinkedIn</Button>
                </div>
            </div>
            )
}