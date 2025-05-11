import React, { useRef } from 'react'
import './contact.css'
import instagram from '../../Assets/instagram.png';
import telegram from '../../Assets/telegram.png';
import linkedin from '../../Assets/linkedin.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sylb03q', 'template_g6oj8ow', form.current, {
        publicKey: 'u7ROzihvLaooQMCls',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('Email sent! ')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contacts'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'/>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.instagram.com/tomas__girma?utm_source=qr'><img src={instagram} alt='instagram' className='link'/></a>
                    <a href='https://t.me/Tomas_gr'><img src={telegram} alt='telegram' className='link'/></a>
                    <a href='https://www.linkedin.com/in/tomas-girma-116b51278'><img src={linkedin} alt='linkedin' className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
