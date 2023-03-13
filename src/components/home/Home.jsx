import React, { Fragment } from 'react';
import {SiLeetcode} from 'react-icons/si';
import './Home.css';
import MYSELF from '../../assets/me.jpeg';

const Home = () => {
  return (
    <Fragment>
        <section className='home' id='home'>
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Atul Pratap Singh</h1>
                <h3>And I'm a <span>Full Stack Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dicta! Officia eos mollitia adipisci harum ipsum vel facilis incidunt illo.
                </p>
                <div className="social-media">
                    <a href="#"><i class='bx bxl-linkedin' ></i></a>
                    <a href="#"><i class='bx bxl-github' ></i></a>
                    <a href="#">{SiLeetcode}</a>
                </div>

                <a href="#" className='btn'>Download Resume</a>
            </div>
            <div className="home_img">
                <img src={MYSELF} alt="logo" />
            </div>
        </section>
    </Fragment>
  );
}

export default Home;
