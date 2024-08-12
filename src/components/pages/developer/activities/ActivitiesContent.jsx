import { devBaseImgUrl } from '@/components/helpers/functions-general'
import PopupButton from '@/components/partials/popup/PopupButton'
import React from 'react'
import ModalEditActivitiesContent from './ModalEditActivitiesContent';
import ModalEditActivitiesItemA from './ModalEditActivitiesItemA';
import ModalEditActivitiesItemB from './ModalEditActivitiesItemB';
import ModalEditActivitiesItemC from './ModalEditActivitiesItemC';

const ActivitiesContent = () => {

    const [activitiesContent, setActivitiesContent] = React.useState(false);
    const handleModalActivities = () => setActivitiesContent(true);

    const [activitiesContentItemA, setActivitiesContentItemA] = React.useState(false);
    const handleModalActivitiesItemA = () => setActivitiesContentItemA(true);

    const [activitiesContentItemB, setActivitiesContentItemB] = React.useState(false);
    const handleModalActivitiesItemB = () => setActivitiesContentItemB(true);

    const [activitiesContentItemC, setActivitiesContentItemC] = React.useState(false);
    const handleModalActivitiesItemC = () => setActivitiesContentItemC(true);

  return (
    <>
    <section id="events" className="events py-20 text-dark bg-customGray relative">
       <div className='absolute right-[-10px] top-[-10px]'>
              <PopupButton fn={handleModalActivities}/>
       </div>  
      <div className="container lg:myContainer">
        <h2 className='text-3xl mb-12 text-center'> <span className='font-bold'>Event</span>  and  <span className='font-bold'>Activities</span> </h2>
        <div className="wrapper grid md:grid-cols-3 gap-8">

          <div className="eventsItem text-center shadow-xl relative">
            <div className='absolute right-[-10px] top-[-10px] z-10'>
                  <PopupButton fn={handleModalActivitiesItemA}/>
            </div>
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={`${devBaseImgUrl}/eventImageA.jpg`} alt="" className=' h-full w-full hover:scale-125 transition-all object-cover' />
            </div>
            <div className='bg-light p-2'>
              <h2 className='font-semibold text-xl mb-4'>Annual Career Fest 2024 at STI College San Pablo</h2>
              <p className='mb-8 '>We are thrilled to share our recent participation in the Annual Career Fest 2024 at…</p>
              <a href="#" className='btn mb-8 font-semibold'>Read More</a>
            </div>
          </div>
          
          <div className="eventsItem text-center shadow-xl relative">
            <div className='absolute right-[-10px] top-[-10px] z-10'>
                  <PopupButton fn={handleModalActivitiesItemB}/>
            </div>
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={`${devBaseImgUrl}/eventImageB.jpg`} alt="" className=' h-full w-full hover:scale-125 transition-all object-cover' />
            </div>
            <div className='bg-light p-2'>
              <h2 className='font-semibold text-xl mb-4'>Annual Career Fest 2024 at STI College San Pablo</h2>
              <p className='mb-8 '>We are thrilled to share our recent participation in the Annual Career Fest 2024 at…</p>
              <a href="#" className='btn mb-8 font-semibold'>Read More</a>
            </div>
          </div>

          <div className="eventsItem text-center shadow-xl relative">
            <div className='absolute right-[-10px] top-[-10px] z-10'>
                  <PopupButton fn={handleModalActivitiesItemC}/>
            </div>
            <div className='overflow-hidden h-[202px] mb-4'>
              <img src={`${devBaseImgUrl}/eventImageC.jpg`} alt="" className='h-full w-full hover:scale-125 transition-all object-cover' />
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

    {activitiesContent && <ModalEditActivitiesContent close={setActivitiesContent}/> }
    {activitiesContentItemA && <ModalEditActivitiesItemA close={setActivitiesContentItemA}/> }
    {activitiesContentItemB && <ModalEditActivitiesItemB close={setActivitiesContentItemB}/> }
    {activitiesContentItemC && <ModalEditActivitiesItemC close={setActivitiesContentItemC}/> }

    </>
  )
}

export default ActivitiesContent