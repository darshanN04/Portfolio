import React, { useEffect } from 'react';
import ImageSlider from './ImageSlider';
import {Contact} from './Contact';
import mypic from '../assets/img/Pic.jpg';
import '../components/landing.css';
import book from '../assets/img/book.png' ;
import home from '../assets/img/home.mp4' ;
import profile from '../assets/img/profile.png' ;
import tandc from '../assets/img/tandc.mp4' ;
import help from '../assets/img/help.mp4' ;
import form1 from '../assets/img/form1.png' ; 
import form2 from '../assets/img/form2.png' ; 
import smoothscroll from 'smoothscroll-polyfill';
import Footer from './Footer';
import Skills from './Skills';
import Typed from 'typed.js';
import login from '../assets/img/login.png';
import signup from '../assets/img/signup.png';
import landing from '../assets/img/landing.png';
import s1 from '../assets/img/s1.png';
import s2 from '../assets/img/s2.png';
import s3 from '../assets/img/s3.png';
import s4 from '../assets/img/s4.png';
import s5 from '../assets/img/s5.png';
import s6 from '../assets/img/s6.png';
import s7 from '../assets/img/s7.png';




const Landing = () => {
  window.onscroll = function() {
      var nav = document.querySelector('.whole-nav');
      if (window.pageYOffset > 50) {
          nav.style.padding = '1vh 1vw 1vh 1vh'; 
      } else {
          nav.style.padding = '3vh 2vw 3vh 3vh'; 
      }
  };
  useEffect(() => {
    const typed = new Typed('.myname1', {
      strings: ['Hi, I\'m Darshan Nakshatri '],
      typeSpeed: 100,
      
    });

    return () => {
      typed.destroy();
    };
  }, []);

  
  const slides = [
    {url: landing, title: 'landing', description: 'This is a login page'},
    {url: signup, title: 'signin', description: 'This is a signin page'},
    {url: login, title: 'login', description: 'This is a login page'},
    {url: home, title: 'Home', description: 'This is a home page'},
    {url: book, title: 'Book', description: 'This is a book page'},
    {url: profile, title: 'Profile', description: 'This is a profile page'},
    {url: tandc, title: 'Terms and Conditions', description: 'This is a terms and conditions page'},
    {url: help, title: 'Help', description: 'This is a help page'},
  ];
  const slides2 = [
    {url: form1, title: 'form1', description: 'This is a form page'},
    {url: form2, title: 'form1', description: 'This is a form page'},
  ];
  const slides3 = [
    {url: s1, title: 's1', description: 'This is a s1 page'},
    {url: s2, title: 's2', description: 'This is a s2 page'},
    {url: s3, title: 's3', description: 'This is a s3 page'},
    {url: s4, title: 's4', description: 'This is a s4 page'},
    {url: s5, title: 's5', description: 'This is a s5 page'},
    {url: s6, title: 's6', description: 'This is a s6 page'},
    {url: s7, title: 's7', description: 'This is a s7 page'},
  ];
  const containerStyle = {
    width: '40vw',
    height: '50vh',
    margin: '0 auto',
    padding: '60px',
    marginBottom: '50px', 

  };
  const handleSkillsClick = () => {
    window.scrollTo(0, 850);
  }
  const connectpart = () => {
    window.scrollTo(0, 3750);
  }
  const aboutme = () => {
    window.scrollTo(0, 0);
  }
  const handleProjectsClick = () => {
    window.scrollTo(0, 1580);
  }

  smoothscroll.polyfill();
  return (
    <div className='whole'>
      <div className='backpic'>
          <div className="whole-nav">
            <div className="left-nav">darshan.n</div>
            <div className='right-nav'>
              <div className='about-nav' onClick={aboutme}>About Me</div>
              <div className='skills-nav' onClick={handleSkillsClick}>Skills</div>
              <div className='projects-nav' onClick={handleProjectsClick}>Projects</div>
              <button className='connect-but' onClick={connectpart}>Let's Connect</button>
              </div> 
          </div>

          <div className="center-content">
            <div>
              <span className='myname1'></span>
              <p className='smalldesc'>I enjoy transforming creative designs into <br/>functional and user-friendly web experiences.</p>
            </div>
            <img src={mypic} alt="Your description" className="mypic"/>
          </div>
      </div>
      <Skills />
      <h1 className='projects'>PROJECTS</h1>

      <p className='projects-sub'>1. Survey Form</p>
      <div style={containerStyle} className='containerStyle'>
        <ImageSlider slides={slides2} className='container2'/>
      </div>

      <p class="projects-sub">2. UI-Designing</p>
      <div style={containerStyle} className='containerStyle'>
        <ImageSlider slides={slides} className='container1'/>
      </div>

      <p class="projects-sub">3. Suggesto</p>
      <p class="projects-sub">(This project is a web application where users can anonymously share their thoughts, opinions, and messages based on a specific place and type.)</p>
      <div style={containerStyle} className='containerStyle'>
        <ImageSlider slides={slides3} className='container1'/>
      </div>
      
      
      <Contact />
      <hr class="separator"></hr>
      <Footer/>
    </div>
  );
}

export default Landing;
