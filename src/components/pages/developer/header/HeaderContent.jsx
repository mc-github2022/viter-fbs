import { devBaseImgUrl } from "@/components/helpers/functions-general";
import PopupButton from "@/components/partials/popup/PopupButton";
import React, { useEffect } from "react";
import ModalEditBannerContent from "./ModalEditBannerContent";
import { MdOutlineFileUpload } from "react-icons/md";
import Tooltip from "@/components/partials/Tooltip";
import { IoImageOutline } from "react-icons/io5";
import ModalEditBannerImage from "./ModalEditBannerImage";
import ModalEditHeaderLogo from "./ModalEditHeaderLogo";

const HeaderContent = ({ headerContent }) => {
  const [updateHeader, setUpdateHeader] = React.useState("");

  const [content, setContent] = React.useState(false);
  const handleTextContent = () => {
    setContent(true);
    setUpdateHeader("textContent");
  };

  const [webLogo, setWebLogo] = React.useState(false);
  const handleWebLogo = () => {
    setWebLogo(true);
    setUpdateHeader("logoContent");
  };

  const [imageContent, setImageContent] = React.useState(false);
  const handleImageContent = () => {
    setImageContent(true);
    setUpdateHeader("imageContent");
  };

  return (
    <>
      <header className="py-2.5">
        <div className="max-w-[100px] lg:myContainer">
          <div className="wrapper flex items-center justify-between">
            <div className="theLogo  relative">
              {headerContent?.data[0].header_logo === "" ? (
                <div>
                  <div className="w-[150px] h-[80px]  grid place-items-center bg-[#e2e2e2] rounded-md">
                    <IoImageOutline className="text-[70px] text-light" />
                  </div>
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleWebLogo} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src={`${devBaseImgUrl}/${headerContent?.data[0].header_logo}`}
                    alt=""
                  />
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleWebLogo} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              )}
            </div>
            <div className="headerNav relative">
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
                <PopupButton fn={handleTextContent} />
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
            <div className="grid place-items-center relative">
              {headerContent?.data[0].header_banner_img === "" ? (
                <div>
                  <div className="w-[350px] h-[350px]  grid place-items-center bg-[#e2e2e2] rounded-md">
                    <IoImageOutline className="text-[80px] text-light" />
                  </div>
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleImageContent} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src={`${devBaseImgUrl}/${headerContent?.data[0].header_banner_img}`}
                    alt=""
                  />
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleImageContent} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {content && (
        <ModalEditBannerContent
          updateHeader={updateHeader}
          close={setContent}
          theContent={headerContent}
        />
      )}

      {imageContent && (
        <ModalEditBannerImage
          updateHeader={updateHeader}
          close={setImageContent}
          theContent={headerContent}
        />
      )}

      {webLogo && (
        <ModalEditHeaderLogo
          updateHeader={updateHeader}
          close={setWebLogo}
          theContent={headerContent}
        />
      )}
    </>
  );
};

export default HeaderContent;
