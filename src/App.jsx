import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import logo from "/logo.png";
import bannerImg from "/fbs-banner-bg.png"

function App() {
  return (
    <>

    <header className='py-2.5'>
      <div className="myContainer">
        <div className="wrapper flex items-center justify-between">
          <div className="theLogo ">
            <img src={logo} alt="" />
          </div>
          <div className="headerNav">
            <ul className='flex [&>li>a]:p-4'>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">ACTIVITIES</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section className="heroBanner py-20 bg-customGray">
      <div className="myContainer">
        <div className="wrapper grid grid-cols-2 place-items-center  px-4">
          <div className="bannerText">
            <h2 className='bannerTitle text-3xl mb-8 text-dark'>Excellence in <b>Managed Services</b> and <b>Web Solutions</b></h2>
            <p className='bannerDesc mb-8'>
            Along with our website design & development solutions (Including website hosting, graphic design, and basic SEO services), FBS meets the needs of clients through recruiting and managing professionals who serve in a wide array of areas like bookkeeping and accounting, virtual assistant and data entry personnel. If you want excellent customer service and a dedicated professional working at a competitive price, we can meet your needs.
            </p>
            <a href="#" className='btn'>Our Services</a>
          </div>
          <div className='grid place-items-center'>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="about text-center py-20">
      <div className="myContainer">
        <h2 className='aboutTitle text-3xl font-bold text-dark'>Who We Are?</h2>
        <h2 className='aboutTitleB text-3xl mb-8'>What We Do?</h2>
        <p className='mb-8'>
        Frontline Business Solutions, Inc. is an Information Technology and Accounting business solutions company that offers a variety of services to SMEs. Our commitment is to leverage business success for the good of people and the communities in which we exist. Our vision and mission is a successful business that maintains harmony between the three goals of excellent products and services, revenue generation, and positive social impact. By choosing Frontline Business Solutions, Inc. you are partnering with a company committed to caring about people and community development.
        </p>
      </div>
      <a href="#" className='btn'>Watch Video</a>
    </section>

    <section className="services text-center py-20">
      <div className="myContainer">
        <h2 className='text-3xl'>What <b>We Offer?</b> </h2>
        <div className="wrapper">
          <div className="serviceItem font-bold">

          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default App
