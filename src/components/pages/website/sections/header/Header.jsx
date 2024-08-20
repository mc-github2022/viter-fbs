import React from "react";
import logo from "/logo.png";
import bannerImg from "/fbs-banner-bg.png";
import useQueryData from "@/components/custom-hooks/useQueryData";

const { data: headerContent } = useQueryData(
  "/v2/header-content", // endpoint
  "get", // method
  "headerContent" // key
);

const Header = () => {
  return (
    <>
      <header className="py-2.5">
        <div className="container lg:myContainer">
          <div className="wrapper flex items-center justify-between">
            <div className="theLogo ">
              <img src={logo} alt="" />
            </div>
            <div className="headerNav">
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
          <div className="wrapper grid md:grid-cols-2 place-items-center  px-4">
            <div className="bannerText">
              <h2 className="bannerTitle text-3xl mb-8 text-dark">
                <b>{headerContent?.data[0].header_banner_title}</b>
              </h2>
              <p className="bannerDesc mb-8">
                {headerContent?.data[0].header_banner_text}
              </p>
              <a
                href={headerContent?.data[0].header_banner_btn_text}
                className="btn"
              >
                {headerContent?.data[0].header_banner_btn_text}
              </a>
            </div>
            <div className="grid place-items-center">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
