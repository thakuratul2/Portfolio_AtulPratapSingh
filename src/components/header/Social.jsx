import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const Social = () => {
  return (
   <div className="header_socials">
    <a href="https://linkedin.com/in/atul-pratap-singh" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/thakuratul2" target="_blank"><BsGithub/></a>
    <a href="https://leetcode.com/thakuratul_28" target="_blank"><SiLeetcode/></a>

   </div>
  );
}

export default Social;
