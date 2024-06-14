import React from 'react';
import react from '../assets/img/react.png';
import python from '../assets/img/python.png';
import mysql from '../assets/img/mysql.png';
import javascript from '../assets/img/javascript.png';  
import css from '../assets/img/css.png';
import html from '../assets/img/html.png';
import canva from '../assets/img/canva.jpeg';
import figma from '../assets/img/figma.png';
import csharp from '../assets/img/c-sharp.png';
import c from '../assets/img/c.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github-sign.png';
import '../components/skills.css';


const Skills = () => {
  return (
    <div className='skills'>

        <h1 className='skills-heading'>SKILLS</h1>

        <div className='logos'>
            <div className='logo-slides'>
                <img src={react} alt='react' className='logo'/>
                <img src={python} alt='python' className='logo'/>
                <img src={mysql} alt='mysql' className='logo'/>
                <img src={javascript} alt='javascript' className='logo'/>
                <img src={css} alt='css' className='logo'/>
                <img src={html} alt='html' className='logo'/>
                <img src={canva} alt='canva' className='logo'/>
                <img src={figma} alt='figma' className='logo'/>
                <img src={csharp} alt='csharp' className='logo'/>
                <img src={c} alt='c' className='logo'/>
                <img src={git} alt='git' className='logo'/>
                <img src={github} alt='github' className='logo'/>            
            </div>
            <div className='logo-slides'>
                <img src={react} alt='react' className='logo'/>
                <img src={python} alt='python' className='logo'/>
                <img src={mysql} alt='mysql' className='logo'/>
                <img src={javascript} alt='javascript' className='logo'/>
                <img src={css} alt='css' className='logo'/>
                <img src={html} alt='html' className='logo'/>
                <img src={canva} alt='canva' className='logo'/>
                <img src={figma} alt='figma' className='logo'/>
                <img src={csharp} alt='csharp' className='logo'/>
                <img src={c} alt='c' className='logo'/>
                <img src={git} alt='git' className='logo'/>
                <img src={github} alt='github' className='logo'/>            
            </div>
        </div>   

    </div>
  )
}

export default Skills