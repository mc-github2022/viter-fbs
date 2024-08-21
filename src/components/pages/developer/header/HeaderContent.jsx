import { devBaseImgUrl } from "@/components/helpers/functions-general";
import PopupButton from "@/components/partials/popup/PopupButton";
import React, { useEffect } from "react";
import ModalEditBannerContent from "./ModalEditBannerContent";
import ModalEditHeaderContent from "./ModalEditHeaderContent";
import { MdOutlineFileUpload } from "react-icons/md";
import Tooltip from "@/components/partials/Tooltip";
import Loader from "@/components/partials/loader/Loader";
import HeaderLoader from "./HeaderLoader";

const HeaderContent = ({ headerContent }) => {
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
                <b>{headerContent?.data[0].header_banner_title}</b>
              </h2>
              <p className="bannerDesc mb-8">
                {headerContent?.data[0].header_banner_text}
              </p>
              <a
                href={headerContent?.data[0].header_banner_btn_link}
                className="btn"
              >
                {headerContent?.data[0].header_banner_btn_text}
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

      {content && (
        <ModalEditBannerContent close={setContent} theContent={headerContent} />
      )}
      {menu && (
        <ModalEditHeaderContent close={setMenu} headerContent={headerContent} />
      )}
    </>
  );
};

export default HeaderContent;
