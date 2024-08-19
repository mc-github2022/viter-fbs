import React from 'react'

const Tooltip = ({text}) => {
  return (
   <>
    <div className='absolute left-[50%] translate-x-[-50%] top-[-25px] font-normal text-xs hidden group-hover:block bg-dark py-1 rounded-full px-2 text-light'>
        {text}
    </div>
   </>
  )
}

export default Tooltip