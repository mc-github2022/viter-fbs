import React from 'react'
import webIcon from "/webIcon.png"
import vaIcon from "/vaIcon.png"
import lcssIcon from "/lcssIcon.png"
import accountingIcon from "/accountingIcon.png"
const Services = () => {
  return (
    <>
     <section id="services" className="services serviceBg text-center py-20 text-light">
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
    </>
  )
}

export default Services