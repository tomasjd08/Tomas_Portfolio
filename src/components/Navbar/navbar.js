import React from 'react';
import './navbar.css'
import  logo from '../../Assets/logo.png';
import contact from '../../Assets/message.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src= {logo} alt='Logo' className='logo'/>
        <div className="desktopmenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src= {contact} alt='contact' className='desktopMenuImg' />Contact  Me
        </button>
    </nav>
  )
}

export default Navbar
