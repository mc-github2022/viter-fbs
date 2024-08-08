import React from 'react'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Activities from './sections/activities/Activities'
import Footer from './sections/footer/Footer'


const Home = () => {
  return (
    <>
     <Header />
     <About />
     <Services />
     <Activities />
     <Footer />
    </>
  )
}

export default Home