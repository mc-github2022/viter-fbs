import { useState } from 'react'
import './index.css'
import logo from "/logo.png";
import bannerImg from "/fbs-banner-bg.png"
import vaIcon from "/vaIcon.png"
import lcssIcon from "/lcssIcon.png"
import webIcon from "/webIcon.png"
import accountingIcon from "/accountingIcon.png"
import eventImageA from "/eventImageA.jpg"
import eventImageB from "/eventImageB.jpg"
import eventImageC from "/eventImageC.jpg"


function App() {
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
      <div className="container lg:myContainer">
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
      <div className="container lg:myContainer">
        <h2 className='aboutTitle text-3xl font-bold text-dark'>Who We Are?</h2>
        <h2 className='aboutTitleB text-3xl mb-8'>What We Do?</h2>
        <p className='mb-8'>
        Frontline Business Solutions, Inc. is an Information Technology and Accounting business solutions company that offers a variety of services to SMEs. Our commitment is to leverage business success for the good of people and the communities in which we exist. Our vision and mission is a successful business that maintains harmony between the three goals of excellent products and services, revenue generation, and positive social impact. By choosing Frontline Business Solutions, Inc. you are partnering with a company committed to caring about people and community development.
        </p>
      </div>
      <a href="#" className='btn'>Watch Video</a>
    </section>

    <section className="services serviceBg text-center py-20 text-light">
      <div className="container lg:myContainer">
        <h2 className='text-3xl mb-12'>What <b>We Offer?</b> </h2>
        <div className="wrapper grid lg:grid-cols-4 gap-8 md:grid-cols-2">
          <div className="serviceItem font-bold">
              <div className='text-center h-[76px] mb-12'>
                <img src={webIcon} alt="" className='w-[62.50px] h-[50px] mx-auto mb-2' />
                <h2 className='font-normal text-xl'>We Solutions</h2>
              </div>
              <ul className='font-normal text-left list-[circle] [&>li]:mb-1'>
                <li>Website Design and Development</li>
                <li>WordPress Development</li>
                <li>Website Redesign</li>
                <li>Web Hosting & Domain</li>
                <li>Website Maintenance</li>
                <li>Online Payment Integration</li>
                <li>Web-Based Applications</li>
              </ul>
          </div>
          <div className="serviceItem font-bold">
              <div className='text-center h-[76px] mb-12'>
                <img src={vaIcon} alt="" className='w-[50px] h-[50px] mx-auto mb-2' />
                <h2 className='font-normal text-xl'>Virtual Assistant <br /> Solution</h2>
              </div>
              <ul className='font-normal text-left list-[circle] [&>li]:mb-1'>
                <li>Lead Generation</li>
                <li>Database Management</li>
                <li>Social Media Management</li>
                <li>Digital Marketing</li>
                <li>Multimedia</li>
                <li>Transcription</li>
                <li>Email Campaign/Newsletters</li>
                <li>Website Management</li>
              </ul> 
          </div>
          <div className="serviceItem font-bold">
              <div className='text-center h-[76px] mb-12'>
                <img src={accountingIcon} alt="" className='w-[37.5px] h-[50px] mx-auto mb-2' />
                <h2 className='font-normal text-xl'>Accounting Solution</h2>
              </div>
              <ul className='font-normal text-left list-[circle] [&>li]:mb-1'>
                <li>Dedicated Accounting Staff</li>
                <li>Compliance</li>
                <li>Bookkeeping</li>
              </ul> 
          </div>
          <div className="serviceItem font-bold">
              <div className='text-center h-[76px] mb-12'>
                <img src={lcssIcon} alt="" className='w-[62.45px] h-[50px] mx-auto mb-2' />
                <h2 className='font-normal text-xl'>Learning Center <br /> Solution</h2>
              </div>
              <ul className='font-normal text-left list-[circle] [&>li]:mb-1'>
                <li>High School Work Immersion</li>
                <li>College On-the-Job Traning</li>
              </ul> 
          </div>
        </div>
      </div>
    </section>

    <section className="events py-20 text-dark">
      <div className="container lg:myContainer">
        <h2 className='text-3xl mb-12 text-center'> <span className='font-bold'>Event</span>  and  <span className='font-bold'>Activities</span> </h2>
        <div className="wrapper grid grid-cols-3 gap-8">

          <div className="eventsItem text-center shadow-xl ">
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={eventImageA} alt="" className=' h-full w-full hover:scale-125 transition-all object-cover' />
            </div>
            <div className='bg-light p-2'>
              <h2 className='font-semibold text-xl mb-4'>Annual Career Fest 2024 at STI College San Pablo</h2>
              <p className='mb-8 '>We are thrilled to share our recent participation in the Annual Career Fest 2024 at…</p>
              <a href="#" className='btn mb-8 font-semibold'>Read More</a>
            </div>
          </div>
          
          <div className="eventsItem text-center shadow-xl ">
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={eventImageB} alt="" className=' h-full w-full hover:scale-125 transition-all object-cover' />
            </div>
            <div className='bg-light p-2'>
              <h2 className='font-semibold text-xl mb-4'>Annual Career Fest 2024 at STI College San Pablo</h2>
              <p className='mb-8 '>We are thrilled to share our recent participation in the Annual Career Fest 2024 at…</p>
              <a href="#" className='btn mb-8 font-semibold'>Read More</a>
            </div>
          </div>

          <div className="eventsItem text-center shadow-xl ">
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={eventImageC} alt="" className='h-full w-full hover:scale-125 transition-all object-cover' />
            </div>
            <div className='bg-light p-2'>
              <h2 className='font-semibold text-xl mb-4'>Annual Career Fest 2024 at STI College San Pablo</h2>
              <p className='mb-8 '>We are thrilled to share our recent participation in the Annual Career Fest 2024 at…</p>
              <a href="#" className='btn mb-8 font-semibold'>Read More</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <footer className='bg-primary text-light'>
      <div className="myContainer py-20 ">
        <div className="wrapper grid grid-cols-3">
          <div className="socialsLinks">
            
          </div>
          <div className="services text-center">
            <p class="font-semibold mb-4">SERVICES WE OFFER</p>
            <ul className='text-[11px] [&>li]:my-2'>
              <li>Web Solution</li>
              <li>Virtual Assistant Solutions</li>
              <li>Accounting Solutions</li>
              <li className='!mb-0'>Learning Center Solutions</li>
            </ul>
          </div>
          <div className="contactDetails">

          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
