import React from "react";

import fbsLogoWhite from "/fbsLogoWhite.png";
import {
  FaClock,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";
import useQueryData from "@/components/custom-hooks/useQueryData";
const Footer = () => {
  const {
    isLoading,
    error,
    data: serviceContent,
  } = useQueryData(
    "/v2/service-content", // endpoint
    "get", // method
    "serviceContent" // key
  );

  const { data: footerContent } = useQueryData(
    "/v2/contact-content", // endpoint
    "get", // method
    "footerContent" // key
  );

  return (
    <>
      <footer id="footer" className="bg-primary text-light">
        <div className="myContainer py-12 ">
          <div className="wrapper grid md:grid-cols-3 gap-16 lg:gap-0">
            <div className="text-center">
              <img src={fbsLogoWhite} alt="" className="mx-auto" />
              <p className="text-xs text-center mb-8">Copyright © 2024</p>
              <div className="grid place-items-center mb-4">
                <ul className="flex gap-2 text-2xl">
                  {footerContent?.data[0].contact_fb_link ? (
                    <li>
                      <a href="#">
                        <FaFacebookSquare />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}

                  {footerContent?.data[0].contact_twitter_link ? (
                    <li>
                      <a href="#">
                        <FaTwitterSquare />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}

                  {footerContent?.data[0].contact_youtube_link ? (
                    <li>
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}

                  {footerContent?.data[0].contact_tiktok_link ? (
                    <li>
                      <a href="#">
                        <AiFillTikTok />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}

                  {footerContent?.data[0].contact_linkedin_link ? (
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
              <div className="grid place-items-center">
                <ul className="text-xs flex [&>li]:px-2">
                  <li>
                    <a href={footerContent?.data[0].contact_privacy_link}>
                      Privacy Policy
                    </a>
                  </li>
                  <li className="border-x">
                    <a href={footerContent?.data[0].contact_terms_link}>
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href={footerContent?.data[0].contact_eula_link}>EULA</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="services text-center md:border-x">
              <p className="font-semibold mb-4">SERVICES WE OFFER</p>
              <ul className="text-[11px] [&>li]:my-2">
                {serviceContent?.data.map((service, key) => {
                  return <li key={key}>{service.service_title}</li>;
                })}
              </ul>
            </div>
            <div className="contactDetails grid place-items-center">
              <div>
                <p className="font-semibold mb-4">CONTACT DETAILS</p>
                <ul className="[&>li>p]:text-[11px] [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:mb-2 ">
                  {footerContent?.data[0].contact_tel_number ? (
                    <li>
                      <BsFillTelephoneFill />
                      <p> {footerContent?.data[0].contact_tel_number}</p>
                    </li>
                  ) : (
                    ""
                  )}
                  {footerContent?.data[0].contact_phone_number ? (
                    <li>
                      <MdPhoneAndroid />
                      <p> {footerContent?.data[0].contact_phone_number}</p>
                    </li>
                  ) : (
                    ""
                  )}
                  {footerContent?.data[0].contact_office_hours ? (
                    <li>
                      <FaClock />
                      <p> {footerContent?.data[0].contact_office_hours}</p>
                    </li>
                  ) : (
                    ""
                  )}
                  {footerContent?.data[0].contact_email ? (
                    <li>
                      <IoIosMail />
                      <p> {footerContent?.data[0].contact_email}</p>
                    </li>
                  ) : (
                    ""
                  )}
                  {footerContent?.data[0].contact_address ? (
                    <li>
                      <FaHouseChimney />
                      <p> {footerContent?.data[0].contact_address}</p>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
