import Loader from "@/components/partials/loader/Loader";
import React from "react";

const FooterLoader = () => {
  return (
    <div id="footer" className="text-light">
      <div className="myContainer py-12 ">
        <div className="wrapper grid md:grid-cols-3 gap-16 lg:gap-12">
          <div className="text-center relative ">
            <div className="grid place-items-center mb-4">
              <Loader customCss="w-[150px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
            </div>
          </div>
          <div className="services text-center relative">
            <div className="grid place-items-center mb-4">
              <Loader customCss="w-[150px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
            </div>
          </div>
          <div className="contactDetails grid place-items-center relative">
            <div className="grid place-items-center mb-4">
              <Loader customCss="w-[150px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
              <Loader customCss="w-[100px] h-[15px] mb-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLoader;
