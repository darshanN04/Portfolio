import React from 'react'
import '../components/landing.css';
import 'boxicons';


const Footer = () => {
  return (
    <div className='wholefooter'>
        <div className='col1'>
            <div className='above-symbols'>
                Get in Touch
            </div>
            <div className='symbols'>
                <a href='https://github.com/darshanN04' target='_blank'><i class='bx bxl-github'></i></a>
                <a href='https://www.linkedin.com/in/darshannakshatri/' target='_blank'><i class='bx bxl-linkedin-square' ></i></a>
                <a href=""><i class='bx bxl-instagram'></i></a>
            </div>
        </div>
        <div className='separator2'></div>
        <div className='col2'>
            <div className='l1'>
                <a href='#'><i class='bx bxs-map'></i></a>
                <span>Manipal, Karnataka</span>
            </div>
            <div className='l2'>
                <a href='#'><i class='bx bx-envelope' ></i></a>
                <span>darshannakshatri@gmail.com</span>
            </div>
            <div className='l3'>
                <a href='#'><i class='bx bxs-phone'></i></a>
                <span>+91 9902040332</span>
            </div>
        </div>
    </div>
  )
}

export default Footer