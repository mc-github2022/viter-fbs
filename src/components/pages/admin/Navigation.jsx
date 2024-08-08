import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <ul className='[&>li]:py-2 [&>li]:px-2'>
            <li>Header</li>
            <li>About</li>
            <li>Services</li>
            <li>Activities</li>
            <li>Footer</li>
        </ul>
      </div>
    </>
  )
}

export default Navigation