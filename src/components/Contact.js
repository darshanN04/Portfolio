import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/landing.css';
import connectpic from '../assets/img/connect.jpg';

function isValidNumber(number) {
  const regex = /^\d{10}$/;
  return regex.test(number);
}
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isValidNumber(form.current.from_phone.value)) {
      toast.error('Phone number is not a valid 10-digit number');
      return;
    }
    emailjs
      .sendForm('service_eoe3jl6', 'template_ot73t29', form.current, {
        publicKey: 'cnMc_eiubp5x8k4B-',
      })
      .then(
        (result) => {
            console.log('SUCCESS!');
            form.current.reset();
            toast.success("Message sent!"); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message failed to send.");
        },
      );
  };

  return (
    <div className="contact-part">
      <div className='contact-innerpart'>
        <ToastContainer />
        <div className='pic'><img src={connectpic} className='pic1'></img></div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className='line1'>
              <input type="text" name="from_name" className="CI1" placeholder='Your Name' required/>
              <input type="tel" name="from_phone" className="CI2" placeholder='Phone No.' required></input>
            
          </div>
          <div className='line2'>
              <input type="email" name="from_email" className="CI3" placeholder='Email Address' required/>
              <textarea name="message" className="CI4" placeholder='Message' required/>
          </div>

          
          <input type="submit" value="Send" className="CIsubmit" />

        </form>
      </div>
    </div>
);
};