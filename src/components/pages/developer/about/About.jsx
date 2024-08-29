import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React, { useEffect } from "react";
import AboutContent from "./AboutContent";
import DashBoardNav from "@/components/partials/DashBoardNav";
import AboutLoader from "./AboutLoader";
import useQueryData from "@/components/custom-hooks/useQueryData";
import Toast from "@/components/partials/Toast";
import { StoreContext } from "@/components/store/StoreContext";

const About = () => {
  const [loading, setLoading] = React.useState(true);
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading,
    error,
    data: contentAbout,
  } = useQueryData(
    "/v2/about-content", // endpoint
    "get", // method
    "aboutContent" // key
  );

  return (
    <>
      <div className="wrapper">
        <div className="theNav w-[250px] fixed h-screen p-4 border-r-2 border-customGray">
          <div className="theLogo mb-14">
            {/* <img src={`${devBaseImgUrl}/logo.png`} alt="" className='mb-12 '/> */}
            <h2 className="text-3xl">Company Name</h2>
            <h3>Single Page Website</h3>
          </div>
          <DashBoardNav menu="about" />
        </div>
        <div className="main ml-[250px] w-[calc(100%_-_250px)]">
          <div className="profileHeader p-4 border-b-2 border-customGray h-[80px] fixed w-[calc(100%_-_250px)] bg-light grid items-center z-[9]">
            <div className="flex justify-between items-center">
              <p className="font-semibold">CONTENT MANAGEMENT SYSTEM</p>
              <div className="profile bg-[#bf360c] h-10 w-10 rounded-full grid place-items-center">
                <p className="text-light font-semibold">M</p>
              </div>
            </div>
          </div>
          <div className="thePage p-8 pt-[100px]">
            <h2 className="mb-14 text-2xl font-semibold">Edit About</h2>
            {isLoading ? (
              <AboutLoader />
            ) : (
              <AboutContent contentAbout={contentAbout} />
            )}
          </div>
        </div>
      </div>
      {store.success && <Toast />}
    </>
  );
};

export default About;
