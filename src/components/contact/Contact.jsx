import React from "react";
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'





const Contact = () =>{






const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1rgixa', 'template_qoykjdm', form.current, 'd3IgDchMXfqMrcvSm')
    e.target.reset()
  };




  



















    return(
       <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>

          <div className="container contact__container">
            <div className="contact__options">  
            <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>mohammed_1818@outlook.com</h5>
                <a href="mailto:mohammed_1818@outlook.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
                <RiMessengerLine className="contact__option-icon"/>
                <h4>Messenger</h4>
                <h5>mohammed_1818@outlook.com</h5>
                <a href="https://m.me/mohammed.ashraf.71653318" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
                <BsWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+201067694755</h5>
                <a href="https://api.whatsapp.com/send?phone+201067694755" target='_blank'>Send a message</a>
            </article>
            </div>
            {/* End of contact */}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name="name" placeholder="your full name" required />
                <input type='email' name="email" placeholder="your email" required />
                <textarea name="message" rows='7' placeholder="your message" required   ></textarea>
                <button type="submit" className="btn btn-primary"> Send message</button>
                
            </form>
          </div>
       </section>
    )
}



export default Contact ;