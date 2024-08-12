import React from 'react'
import { Link } from 'react-router-dom'
import { devNavUrl } from '../helpers/functions-general'

const DashBoardNav = ({menu}) => {

  const links = [
    {
      title:'Header',
      url:'header'
    },
    {
      title:'About',
      url:'about'
    },
    {
      title:'Services',
      url:'services'
    },
    {
      title:'Activities',
      url:'activities'
    },
    {
      title:'Footer',
      url:'footer'
    },
  ]

  return (
    <>
      <div className="nav">
        <ul className='[&>li]:py-2 [&>li]:px-2'>
            {links.map((link,key)=>
              <li key={key}  className={`${
                menu === link.title.toLowerCase() ? "bg-customGray" : ""
              } nav-item `}><Link className='w-full' to={`${devNavUrl}/system/${link.url}`}>{link.title}</Link></li>
            )}
        </ul>
      </div>
    </>
  )
}

export default DashBoardNav