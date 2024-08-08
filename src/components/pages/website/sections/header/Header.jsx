import React from 'react'
import logo from "/logo.png";
import bannerImg from "/fbs-banner-bg.png"
const Header = () => {
  return (
    <>
      <header className='py-2.5'>
      <div className="container lg:myContainer">
        <div className="wrapper flex items-center justify-between">
          <div className="theLogo ">
            <img src={logo} alt="" />
          </div>
          <div className="headerNav">
            <ul className='flex [&>li>a]:p-4'>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#events">ACTIVITIES</a></li>
              <li><a href="#footer">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section className="heroBanner py-20 bg-customGray">
      <div className="container lg:myContainer">
        <div className="wrapper grid md:grid-cols-2 place-items-center  px-4">
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
    </>
  )
}

export default Header