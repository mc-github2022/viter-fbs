import { devBaseImgUrl } from "@/components/helpers/functions-general";
import Loader from "@/components/partials/loader/Loader";
import React from "react";

const ActivitiesLoader = () => {
  return (
    <>
      <section id="events" className="events py-20 text-dark  relative">
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12 text-center">
            <Loader customCss="!w-[300px] h-[30px] mx-auto" />
          </h2>
          <div className="wrapper grid md:grid-cols-3 gap-8">
            <div className="eventsItem text-center  relative">
              <div className="overflow-hidden h-[202px] mb-4">
                <Loader customCss="h-full" />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  <Loader customCss="w-[300px] h-[30px] mx-auto" />
                </h2>
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-8" />
                <Loader customCss="lg:w-[150px] h-[30px] mx-auto mb-8" />
              </div>
            </div>

            <div className="eventsItem text-center  relative">
              <div className="overflow-hidden h-[202px] mb-4">
                <Loader customCss="h-full" />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  <Loader customCss="w-[300px] h-[30px] mx-auto" />
                </h2>
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-8" />
                <Loader customCss="lg:!w-[150px] h-[30px] mx-auto mb-8" />
              </div>
            </div>

            <div className="eventsItem text-center  relative">
              <div className="overflow-hidden h-[202px] mb-4">
                <Loader customCss="h-full" />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  <Loader customCss="w-[300px] h-[30px] mx-auto" />
                </h2>
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-4" />
                <Loader customCss="w-[300px] h-[15px] mx-auto mb-8" />
                <Loader customCss="lg:!w-[150px] h-[30px] mx-auto mb-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivitiesLoader;
