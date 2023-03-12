import React from 'react';
import Resume from '../../assets/resume.pdf'

const Header_btn = () => {
  return (
   <div className="cta">
    <a href={Resume} download className='btn'>My Resume</a>
    <a href="#contact" className='btn btn-primary'>Let's Connect</a>
   </div>
  );
}

export default Header_btn;
