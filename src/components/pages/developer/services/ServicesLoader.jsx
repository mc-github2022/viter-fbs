import { devBaseImgUrl } from "@/components/helpers/functions-general";
import Loader from "@/components/partials/loader/Loader";
import React from "react";

const ServicesLoader = () => {
  return (
    <>
      <section
        id="services"
        className="services  text-center py-20 text-light relative"
      >
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12">
            <Loader customCss="w-[140px] h-[30px] mx-auto" />
          </h2>
          <div className="wrapper grid lg:grid-cols-4 gap-8 md:grid-cols-2">
            <div className="serviceItem font-bold relative ">
              <div className="text-center h-[76px] mb-12">
                <div className="relative group">
                  <Loader customCss="w-[100px] h-[50px]  mb-4" />
                </div>
                <h2 className="font-normal text-xl">
                  <Loader customCss="w-[150px] h-[30px]  mb-4" />
                </h2>
              </div>
              <ul className="font-normal text-left  [&>li]:mb-4">
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
              </ul>
            </div>
            <div className="serviceItem font-bold relative ">
              <div className="text-center h-[76px] mb-12">
                <div className="relative group">
                  <Loader customCss="w-[100px] h-[50px]  mb-4" />
                </div>
                <h2 className="font-normal text-xl">
                  <Loader customCss="w-[150px] h-[30px]  mb-4" />
                </h2>
              </div>
              <ul className="font-normal text-left  [&>li]:mb-4">
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
              </ul>
            </div>
            <div className="serviceItem font-bold relative ">
              <div className="text-center h-[76px] mb-12">
                <div className="relative group">
                  <Loader customCss="w-[100px] h-[50px]  mb-4" />
                </div>
                <h2 className="font-normal text-xl">
                  <Loader customCss="w-[150px] h-[30px]  mb-4" />
                </h2>
              </div>
              <ul className="font-normal text-left  [&>li]:mb-4">
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
              </ul>
            </div>
            <div className="serviceItem font-bold relative ">
              <div className="text-center h-[76px] mb-12">
                <div className="relative group">
                  <Loader customCss="w-[100px] h-[50px]  mb-4" />
                </div>
                <h2 className="font-normal text-xl">
                  <Loader customCss="w-[150px] h-[30px]  mb-4" />
                </h2>
              </div>
              <ul className="font-normal text-left  [&>li]:mb-4">
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
                <li>
                  <Loader customCss="w-[150px] h-[10px]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLoader;
