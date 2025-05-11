import React from 'react'
import './works.css'

import work1 from '../../Assets/quiz.png';
import work2 from '../../Assets/cloud.png';
import work3 from '../../Assets/clock.png';
const Works = () => {
  return (
    <section id='works'>
        <div className='worksTitle'>My Portfolio</div>
        <span className='worksDesc'>Crafting sleek, responsive websites with intuitive user experiences. Passionate about turning ideas into functional, beautifully designed digital solutions. 🚀🎨</span>
        <div className='worksImgs'>
          
            <a href='https://github.com/tomasjd08/quiz.git'><img src={work1} alt='work1' className='worksImg'/><br/>Quiz</a>
            
            <a href='https://github.com/tomasjd08/alarm.git' ><img src={work3} alt='work3' className='worksImg'/><br/>Calander & Alarm</a>
              
            <a href='https://github.com/tomasjd08/Weather.git'><img src={work2} alt='work2' className='worksImg'/><br/>Weather Checker</a>
        </div>
    </section>
  )
}

export default Works;
