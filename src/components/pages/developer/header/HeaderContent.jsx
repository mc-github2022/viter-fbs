import { devBaseImgUrl } from "@/components/helpers/functions-general";
import PopupButton from "@/components/partials/popup/PopupButton";
import React, { useEffect } from "react";
import ModalEditBannerContent from "./ModalEditBannerContent";
import ModalEditHeaderContent from "./ModalEditHeaderContent";
import { MdOutlineFileUpload } from "react-icons/md";
import Tooltip from "@/components/partials/Tooltip";
import Loader from "@/components/partials/loader/Loader";
import HeaderLoader from "./HeaderLoader";

const HeaderContent = () => {
  const [content, setContent] = React.useState(false);
  const handleOpen = () => setContent(true);

  const [menu, setMenu] = React.useState(false);
  const handleModalMenu = () => setMenu(true);

  return (
    <>
      <header className="py-2.5">
        <div className="max-w-[100px] lg:myContainer">
          <div className="wrapper flex items-center justify-between">
            <div className="theLogo  relative group">
              <img src={`${devBaseImgUrl}/logo.png`} alt="" />
              <div className="btnImgUpload">
                <button>
                  <MdOutlineFileUpload />
                </button>
              </div>
            </div>
            <div className="headerNav relative">
              <div className="absolute right-0 top-[-20px] group">
                <PopupButton fn={handleModalMenu} />
                <Tooltip text="Edit" />
              </div>
              <ul className="flex [&>li>a]:p-4">
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#services">SERVICES</a>
                </li>
                <li>
                  <a href="#events">ACTIVITIES</a>
                </li>
                <li>
                  <a href="#footer">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="heroBanner py-20 bg-customGray">
        <div className="container lg:myContainer">
          <div className="wrapper grid md:grid-cols-2 gap-4 place-items-center  px-4">
            <div className="bannerText relative">
              <div className="absolute right-0 group">
                <PopupButton fn={handleOpen} />
                <Tooltip text="Edit" />
              </div>
              <h2 className="bannerTitle text-3xl mb-8 text-dark">
                Excellence in <b>Managed Services</b> and <b>Web Solutions</b>
              </h2>
              <p className="bannerDesc mb-8">
                Along with our website design & development solutions (Including
                website hosting, graphic design, and basic SEO services), FBS
                meets the needs of clients through recruiting and managing
                professionals who serve in a wide array of areas like
                bookkeeping and accounting, virtual assistant and data entry
                personnel. If you want excellent customer service and a
                dedicated professional working at a competitive price, we can
                meet your needs.
              </p>
              <a href="#" className="btn">
                Our Services
              </a>
            </div>
            <div className="grid place-items-center relative group">
              <img src={`${devBaseImgUrl}/fbs-banner-bg.png`} alt="" />
              <div className="btnImgUpload">
                <button>
                  <MdOutlineFileUpload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {content && <ModalEditBannerContent close={setContent} />}
      {menu && <ModalEditHeaderContent close={setMenu} />}
    </>
  );
};

export default HeaderContent;
