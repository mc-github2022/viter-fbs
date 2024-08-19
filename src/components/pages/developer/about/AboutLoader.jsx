import Loader from "@/components/partials/loader/Loader";
import React from "react";

const AboutLoader = () => {
  return (
    <>
      <div id="about" className="about text-center py-20 relative">
        <div className="container lg:myContainer relative">
          <Loader customCss="lg:!w-[140px] h-[30px] mx-auto mb-4" />

          <Loader customCss="lg:!w-[140px] h-[30px] mx-auto mb-4" />

          <Loader customCss="lg:!w-[1000px] h-[15px] mb-4 mx-auto" />
          <Loader customCss="lg:!w-[1000px] h-[15px] mb-4 mx-auto" />
          <Loader customCss="lg:!w-[1000px] h-[15px] mb-4 mx-auto" />
          <Loader customCss="lg:!w-[1000px] h-[15px] mb-4 mx-auto" />
          <Loader customCss="lg:!w-[1000px] h-[15px] mb-12 mx-auto" />
        </div>
        <Loader customCss="!w-[100px] h-[30px] mb-12 mx-auto" />
      </div>
    </>
  );
};

export default AboutLoader;
