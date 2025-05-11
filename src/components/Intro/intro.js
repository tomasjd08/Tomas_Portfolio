import React from 'react'
import './intro.css';
import bg from '../../Assets/image.png'
const Intro = () => {
  return (
   <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Tomas</span><br/>Website Developer</span>
          <p className='introPhara'>A passionate web developer specializing in responsive and user-friendly websites.
<br/>I turn ideas into digital experiences using modern technologies like HTML, CSS, <br/>JavaScript, and React.
Let's build something amazing together</p>
          
        </div>
        <img src={bg} alt='img' className='bg' />
   </section>
  )
}

export default Intro
