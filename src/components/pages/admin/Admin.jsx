import React from 'react'
import Navigation from './Navigation'
import logo from "/logo.png"

const Admin = () => {
  return (
    <div className="wrapper grid grid-cols-[250px_1fr]">
        <div className="theNav w-[250px] h-screen p-4 border-r-2 border-customGray">
            <div className="theLogo">
                <img src={logo} alt="" className='mb-12 '/>
            </div>
            <Navigation />
        </div>
        <div className="main w-full">
            <div className="profileHeader p-4 border-2 h-[80px]">
                <p className='font-bold'>CONTENT MANAGEMENT SYSTEM</p>
                <div className="profile">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin