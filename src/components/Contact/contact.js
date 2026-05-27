import React, { useRef } from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_empj6cb', 'template_gusarm2', form.current,'QO7pk97sNidQkcd9j')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !')
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your Name' name='your_name' />
              <input type='email' className='email' placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name='message' placeholder='Your Message' rows='5'></textarea>
              <button className='submitBtn' type='submit' value='Send'>Submit</button>
              <div className='links'>
                <img src={FacebookIcon} alt='Facebook' className='link' />
                <img src={TwitterIcon} alt='Twitter' className='link' />
                <img src={YoutubeIcon} alt='Youtube' className='link' />
                <img src={InstagramIcon} alt='Instagram' className='link' />
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
