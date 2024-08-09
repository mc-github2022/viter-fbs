import { devBaseImgUrl } from '@/components/helpers/functions-general'
import PopupButton from '@/components/partials/popup/PopupButton'
import React from 'react'
import ModalEditBannerContent from './ModalEditBannerContent'

const HeaderContent = () => {
  const [content, setContent] = React.useState(false);
  const handleOpen = () => setContent(true);
  return (
    <>
      <header className='py-2.5'>
      <div className="max-w-[100px] lg:myContainer">
        <div className="wrapper flex items-center justify-between">
          <div className="theLogo ">
            <img src={`${devBaseImgUrl}/logo.png`} alt="" />
          </div>
          <div className="headerNav relative">
            <div className='absolute right-0 top-[-20px]'>
              <PopupButton fn={handleOpen}/>
            </div>
            <ul className='flex [&>li>a]:p-4'>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#events">ACTIVITIES</a></li>
              <li><a href="#footer">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section className="heroBanner py-20 bg-customGray">
      <div className="container lg:myContainer">
        <div className="wrapper grid md:grid-cols-2 place-items-center  px-4">
          <div className="bannerText relative">
            <div className='absolute right-0'>
              <PopupButton fn={handleOpen}/>
            </div>
            <h2 className='bannerTitle text-3xl mb-8 text-dark'>Excellence in <b>Managed Services</b> and <b>Web Solutions</b></h2>
            <p className='bannerDesc mb-8'>
            Along with our website design & development solutions (Including website hosting, graphic design, and basic SEO services), FBS meets the needs of clients through recruiting and managing professionals who serve in a wide array of areas like bookkeeping and accounting, virtual assistant and data entry personnel. If you want excellent customer service and a dedicated professional working at a competitive price, we can meet your needs.
            </p>
            <a href="#" className='btn'>Our Services</a>
          </div>
          <div className='grid place-items-center'>
            <img src={`${devBaseImgUrl}/fbs-banner-bg.png`} alt="" />
          </div>
        </div>
      </div>
    </section>

    {content && <ModalEditBannerContent close={setContent}/> }
    </>
  )
}

export default HeaderContent