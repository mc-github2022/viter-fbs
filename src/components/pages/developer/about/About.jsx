import { devBaseImgUrl } from '@/components/helpers/functions-general'
import React from 'react'
import AboutContent from './AboutContent'
import DashBoardNav from '@/components/partials/DashBoardNav'

const About = () => {
  return (
    <>
    <div className="wrapper grid grid-cols-[250px_1fr]">
        <div className="theNav w-[250px] h-screen p-4 border-r-2 border-customGray">
            <div className="theLogo mb-14">
                {/* <img src={`${devBaseImgUrl}/logo.png`} alt="" className='mb-12 '/> */}
                <h2 className='text-3xl'>Company Name</h2>
                <h3>Single Page Website</h3>
            </div>
            <DashBoardNav menu="about" />
        </div>
        <div className="main w-full">
            <div className="profileHeader p-4 border-b-2 border-customGray h-[80px] grid items-center">
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>CONTENT MANAGEMENT SYSTEM</p>
                    <div className="profile bg-[#bf360c] h-10 w-10 rounded-full grid place-items-center">
                        <p className='text-light font-semibold'>M</p>
                    </div>
                </div>
            </div>
            <div className='thePage p-8'>
                <AboutContent />
            </div>
        </div>
    </div>
    </>
  )
}

export default About