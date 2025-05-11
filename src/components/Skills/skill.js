import React from 'react'
import './skills.css'
import UIDesign from '../../Assets/uidesign.png';
import WebDesign from '../../Assets/webdesign.png';
import WebDevelop from '../../Assets/websitedevelopment.png';
const Skills = () => {
  return (
    <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'> Skilled in crafting visually appealing and user-friendly website designs with a focus on UX/UI principles.
Experienced in developing responsive, interactive websites using HTML, CSS, JavaScript, and React.
Capable of handling complete website projects from concept to deployment with attention to performance and accessibility.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDevelop} alt='WebDevelop' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Website Development</h2>
                        <p>Proficient in front-end and back-end development, creating responsive, accessible, and high-performance websites. Skilled in HTML, CSS, JavaScript, React, aand Node.js</p>
                    </div>
                    
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>Experienced in crafting modern, responsive, and user-focused web designs using UI/UX principles and tools like Figma.</p>
                    </div>
                    
                </div>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Skilled in UI/UX design, creating intuitive, user-centered interfaces and seamless digital experiences using Figma and design best practices.</p>
                    </div>
                    
                </div>
            </div>
    </section>
  )
}

export default Skills
