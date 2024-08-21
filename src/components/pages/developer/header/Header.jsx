import React, { useEffect } from "react";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import HeaderContent from "./HeaderContent";
import DashBoardNav from "@/components/partials/DashBoardNav";
import HeaderLoader from "./HeaderLoader";
import { StoreContext } from "@/components/store/StoreContext";
import useQueryData from "@/components/custom-hooks/useQueryData";
import Toast from "@/components/partials/Toast";

const Header = () => {
  const [loading, setLoading] = React.useState(true);
  const { store, dispatch } = React.useContext(StoreContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const {
    isLoading,
    error,
    data: headerContent,
  } = useQueryData(
    "/v2/header-content", // endpoint
    "get", // method
    "headerContent" // key
  );

  return (
    <>
      <div className="wrapper">
        <div className="theNav w-[250px] h-screen fixed p-4 border-r-2 border-customGray">
          <div className="theLogo mb-14">
            {/* <img src={`${devBaseImgUrl}/logo.png`} alt="" className='mb-12 '/> */}
            <h2 className="text-3xl">Company Name</h2>
            <h3>Single Page Website</h3>
          </div>
          <DashBoardNav menu="header" />
        </div>
        <div className="main ml-[250px] w-[calc(100%_-_250px)]">
          <div className="profileHeader p-4 border-b-2 border-customGray h-[80px] fixed w-[calc(100%_-_250px)] bg-light grid items-center z-[9]">
            <div className="flex justify-between  items-center ">
              <p className="font-semibold">CONTENT MANAGEMENT SYSTEM</p>
              <div className="profile bg-[#bf360c] h-10 w-10 rounded-full grid place-items-center">
                <p className="text-light font-semibold">M</p>
              </div>
            </div>
          </div>
          <div className="thePage p-8 pt-[100px]">
            <h2 className="mb-14 text-2xl font-semibold">Edit Header</h2>
            <HeaderContent headerContent={headerContent} />
            <HeaderLoader />
          </div>
        </div>
      </div>
      {store.success && <Toast />}
    </>
  );
};

export default Header;
