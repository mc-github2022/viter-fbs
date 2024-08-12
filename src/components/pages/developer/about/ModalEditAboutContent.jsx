import React from 'react'
import { IoMdClose } from 'react-icons/io'

const ModalEditAboutContent = ({close}) => {
    const handleClose =()=> close(false)
  return (
    <>
    <div className='bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]'>
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
            <h2 className='font-semibold py-4'>Update Header Menu </h2>
            <button className="btnClose absolute right-5 top-5" onClick={handleClose}><IoMdClose /></button>
                <div className=''>
                    <div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="" className=''>Title</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px] mb-1' /> <br />
                        </div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="" className=''>Subtitle</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px] mb-1' /> <br />
                        </div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="" className=''>Description</label> <br />
                            <input type="text" className='border-customGray border w-full h-[36px] mb-1' /> <br />
                        </div>
                        <div className="inputGroup mb-4">
                            <label htmlFor="" className=''>Button</label> <br />
                            <input type="text" placeholder='Text' className='border-customGray border w-full h-[36px] mb-1' /> <br />
                            <input type="text" placeholder='Link' className='border-customGray border w-full h-[36px] mb-1' />
                        </div>
                    </div>
                    <div className='btnUpdate absolute bottom-0 py-4 flex gap-2'>
                        <button type="submit" value="" className='btn'>Update</button>
                        <button type="reset" value="" className='btn-light !py-2' onClick={handleClose}>Cancel</button>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default ModalEditAboutContent