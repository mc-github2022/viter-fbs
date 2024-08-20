import Loader from "@/components/partials/loader/Loader";
import React from "react";

const HeaderLoader = () => {
  return (
    <>
      <header className="py-2.5">
        <div className="max-w-[100px] lg:myContainer">
          <div className="wrapper flex items-center justify-between">
            <div className="theLogo">
              <Loader customCss="lg:w-[180px] h-[52px]" />
            </div>
            <div>
              <Loader customCss="lg:w-[380px] h-[20px]" />
            </div>
          </div>
        </div>
      </header>
      <div className="heroBanner py-20">
        <div className="container lg:myContainer">
          <div className="wrapper grid md:grid-cols-2 gap-4 place-items-center  px-4">
            <div className="bannerText relative">
              <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
              <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
              <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
              <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
              <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
              <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
            </div>
            <div className="grid place-items-center relative group">
              <Loader customCss="lg:w-[410px] h-[400px] mb-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLoader;
