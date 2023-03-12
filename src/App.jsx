import React, { Fragment } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Offer from './components/offers/Offer'
import Project from './components/projects/Project'
import Client from './components/clients/Client'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Nav />
      <About/>
      <Experience/>
      <Offer/>
      <Project/>
      <Client/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App