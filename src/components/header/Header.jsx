import React from 'react';
import './Header.css'
import Header_btn from './Header_btn'
import MYSELF from '../../assets/me.jpeg'
import HeaderSocial from './Social'
const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello, It's Me </h5>
      <h1>Atul Pratap Singh</h1>
      <h5 className="text-light">
        And I'm a Frontend Developer
      </h5>
      <Header_btn/>
      <HeaderSocial/>
      <div className="myself">
        <img src={MYSELF} alt="myself" />
      </div>
      <a href="#contact" className='scroll_down'>Click To Scroll Down</a>
    </div>
   </header>
  );
}

export default Header;
