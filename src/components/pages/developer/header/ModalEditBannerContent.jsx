import React from 'react'
import { IoMdClose } from 'react-icons/io'

const ModalEditBannerContent = () => {
  return (
    <>
    <div className='bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]'>
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
            <h2 className='font-semibold py-4'>Update Banner Content </h2>
            <button className="btnClose absolute right-8 top-5"><IoMdClose /></button>
                <div className=''>
                    <div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="">Banner Title</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px]' />
                        </div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="">Banner Desc</label> <br />
                            <textarea name="" id="" className='border-customGray border w-full h-[150px]'></textarea>
                        </div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="">Button Text</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px]' />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="">Button Link</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px]' />
                        </div>
                    </div>
                    <div className='btnUpdate absolute bottom-0 py-4 flex gap-2'>
                        <button type="submit" value="" className='btn'>Update</button>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default ModalEditBannerContent