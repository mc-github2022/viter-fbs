import PopupButton from "@/components/partials/popup/PopupButton";
import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaClock,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdPhoneAndroid } from "react-icons/md";
import ModalEditFooterSocial from "./ModalEditFooterSocial";
import ModalEditFooterContact from "./ModalEditFooterContact";
import ModalEditFooterService from "./ModalEditFooterService";
import Tooltip from "@/components/partials/Tooltip";
import FooterLoader from "./FooterLoader";

const FooterContent = () => {
  const [footerSocial, setfooterSocial] = React.useState(false);
  const handleModalFooterSocial = () => setfooterSocial(true);

  const [footerContact, setfooterContact] = React.useState(false);
  const handleModalFooterContact = () => setfooterContact(true);

  const [footerService, setfooterService] = React.useState(false);
  const handleModalFooterService = () => setfooterService(true);

  return (
    <>
      <footer id="footer" className="bg-primary text-light">
        <div className="myContainer py-12 ">
          <div className="wrapper grid md:grid-cols-3 gap-16 lg:gap-12">
            <div className="text-center relative ">
              <div className="absolute right-[-10px] top-[-10px] z-10 group">
                <PopupButton
                  fn={handleModalFooterSocial}
                  customCSS="!bg-customGray text-primary"
                />
                <Tooltip text="Edit" />
              </div>
              {/* <img src={fbsLogoWhite} alt=""  className='mx-auto'/> */}
              <p className="text-xs text-center mb-8">Copyright © 2024</p>
              <div className="grid place-items-center mb-4">
                <ul className="flex gap-2 text-2xl">
                  <li>
                    <a href="#">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillTikTok />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid place-items-center">
                <ul className="text-xs flex [&>li]:px-2">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="border-x">
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">EULA</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="services text-center relative">
              <div className="absolute right-[-10px] top-[-10px] z-10 group">
                <PopupButton
                  fn={handleModalFooterService}
                  customCSS="!bg-customGray text-primary"
                />
                <Tooltip text="Edit" />
              </div>
              <p className="font-semibold mb-4">SERVICES WE OFFER</p>
              <ul className="text-[11px] [&>li]:my-2">
                <li>Web Solution</li>
                <li>Virtual Assistant Solutions</li>
                <li>Accounting Solutions</li>
                <li className="!mb-0">Learning Center Solutions</li>
              </ul>
            </div>
            <div className="contactDetails grid place-items-center relative">
              <div className="absolute right-[-10px] top-[-10px] z-10 group">
                <PopupButton
                  fn={handleModalFooterContact}
                  customCSS="!bg-customGray text-primary"
                />
                <Tooltip text="Edit" />
              </div>
              <div>
                <p className="font-semibold mb-4">CONTACT DETAILS</p>
                <ul className="[&>li>p]:text-[11px] [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:mb-2 ">
                  <li>
                    <BsFillTelephoneFill /> <p> 049 501 3592</p>
                  </li>
                  <li>
                    <MdPhoneAndroid /> <p> 0927 168 6810 </p>
                  </li>
                  <li>
                    <FaClock /> <p> Monday - Friday | 7:00am - 4:30pm</p>
                  </li>
                  <li>
                    <IoIosMail /> <p> info@frontlinebusiness.com.ph</p>
                  </li>
                  <li className="!items-start">
                    <FaHouseChimney />{" "}
                    <p>
                      {" "}
                      Baloc road, Brgy. San Ignacio, <br />
                      San Pablo City, Laguna, 4000{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FooterLoader />

      {footerSocial && <ModalEditFooterSocial close={setfooterSocial} />}
      {footerContact && <ModalEditFooterContact close={setfooterContact} />}
      {footerService && <ModalEditFooterService close={setfooterService} />}
    </>
  );
};

export default FooterContent;
