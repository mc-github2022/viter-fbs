import { devBaseImgUrl } from '@/components/helpers/functions-general'
import PopupButton from '@/components/partials/popup/PopupButton'
import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import ModalEditServicesContent from './ModalEditServicesContent'
import ModalEditServicesItemA from './ModalEditServicesItemA'
import ModalEditServicesItemB from './ModalEditServicesItemB'
import ModalEditServicesItemC from './ModalEditServicesItemC'
import ModalEditServicesItemD from './ModalEditServicesItemD'

const ServicesContent = () => {
  const [setService, setServiceContent] = React.useState(false);
  const handleModalService = () => setServiceContent(true);

  const [setServiceA, setServiceItemA] = React.useState(false);
  const handleModalServiceItemA = () => setServiceItemA(true);

  const [setServiceB, setServiceItemB] = React.useState(false);
  const handleModalServiceItemB = () => setServiceItemB(true);

  const [setServiceC, setServiceItemC] = React.useState(false);
  const handleModalServiceItemC = () => setServiceItemC(true);

  const [setServiceD, setServiceItemD] = React.useState(false);
  const handleModalServiceItemD = () => setServiceItemD(true);

  return (
    <>
    <section id="services" className="services serviceBg text-center py-20 text-light relative">
        <div className='absolute right-[-10px] top-[-10px]'>
          <PopupButton fn={handleModalService}/>
        </div>
      <div className="container lg:myContainer">
          <h2 className='text-3xl mb-12'>What <b>We Offer?</b> </h2>
        <div className="wrapper grid lg:grid-cols-4 gap-8 md:grid-cols-2">
          <div className="serviceItem font-bold relative">
            <div className='absolute right-[-10px] top-[-10px] z-10'>
              <PopupButton fn={handleModalServiceItemA}/>
            </div>
              <div className='text-center h-[76px] mb-12'>
                <div className='relative group'>
                  <img src={`${devBaseImgUrl}/webIcon.png`} alt="" className='w-[62.5px] h-[50px] mx-auto mb-2' />
                  <div className='btnImgUpload'>
                    <button><MdOutlineFileUpload /></button>
                  </div>
                </div>
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
          <div className="serviceItem font-bold relative">
          <div className='absolute right-[-10px] top-[-10px] z-10'>
              <PopupButton fn={handleModalServiceItemB}/>
            </div>
              <div className='text-center h-[76px] mb-12'>
                <div className='relative group'>
                  <img src={`${devBaseImgUrl}/vaIcon.png`} alt="" className='w-[50px] h-[50px] mx-auto mb-2' />
                  <div className='btnImgUpload'>
                    <button><MdOutlineFileUpload /></button>
                  </div>
                </div>
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
          <div className="serviceItem font-bold relative">
              <div className='absolute right-[-10px] top-[-10px] z-10'>
                  <PopupButton fn={handleModalServiceItemC}/>
              </div>
              <div className='text-center h-[76px] mb-12'>
                <div className='relative group'>
                  <img src={`${devBaseImgUrl}/accountingIcon.png`} alt="" className='w-[37.5px] h-[50px] mx-auto mb-2' />
                  <div className='btnImgUpload'>
                    <button><MdOutlineFileUpload /></button>
                  </div>
                </div>
                <h2 className='font-normal text-xl'>Accounting Solution</h2>
              </div>
              <ul className='font-normal text-left list-[circle] [&>li]:mb-1'>
                <li>Dedicated Accounting Staff</li>
                <li>Compliance</li>
                <li>Bookkeeping</li>
              </ul> 
          </div>
          <div className="serviceItem font-bold relative">
              <div className='absolute right-[-10px] top-[-10px] z-10'>
                  <PopupButton fn={handleModalServiceItemD}/>
              </div>
              <div className='text-center h-[76px] mb-12'>
                <div className='relative group'>
                  <img src={`${devBaseImgUrl}/lcssIcon.png`} alt="" className='w-[62.45px] h-[50px] mx-auto mb-2' />
                  <div className='btnImgUpload'>
                    <button><MdOutlineFileUpload /></button>
                  </div>
                </div>
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

    {setService && <ModalEditServicesContent close={setServiceContent}/> }
    {setServiceA && <ModalEditServicesItemA close={setServiceItemA}/> }
    {setServiceB && <ModalEditServicesItemB close={setServiceItemB}/> }
    {setServiceC && <ModalEditServicesItemC close={setServiceItemC}/> }
    {setServiceD && <ModalEditServicesItemD close={setServiceItemD}/> }
    </>
  )
}

export default ServicesContent