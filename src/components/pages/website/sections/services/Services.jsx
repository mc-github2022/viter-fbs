import React from "react";
import webIcon from "/webIcon.png";
import vaIcon from "/vaIcon.png";
import lcssIcon from "/lcssIcon.png";
import accountingIcon from "/accountingIcon.png";
import useQueryData from "@/components/custom-hooks/useQueryData";
import PopupButton from "@/components/partials/popup/PopupButton";
import Tooltip from "@/components/partials/Tooltip";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
const Services = () => {
  const {
    isLoading,
    error,
    data: serviceContent,
  } = useQueryData(
    "/v2/service-content", // endpoint
    "get", // method
    "serviceContent" // key
  );
  return (
    <>
      <section
        id="services"
        className="services serviceBg text-center py-20 text-light"
      >
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12">
            What <b>We Offer?</b>{" "}
          </h2>
          <div className="wrapper grid lg:grid-cols-4 gap-8 md:grid-cols-2">
            {serviceContent?.data.map((item, key) => {
              return (
                <div key={key} className="serviceItem font-bold relative ">
                  <div className="text-center h-[76px] mb-12">
                    <div className="relative group">
                      <img
                        src={`${devBaseImgUrl}/${item.service_img}`}
                        alt=""
                        className="w-[62.45px] h-[50px] mx-auto mb-2 object-contain"
                      />
                    </div>
                    <h2 className="font-normal text-xl">
                      {item.service_title}
                    </h2>
                  </div>
                  <ul className="font-normal text-left list-none [&>li]:mb-1">
                    <li>{item.service_includes_a}</li>
                    <li>{item.service_includes_b}</li>
                    <li>{item.service_includes_c}</li>
                    <li>{item.service_includes_d}</li>
                    <li>{item.service_includes_e}</li>
                    <li>{item.service_includes_f}</li>
                    <li>{item.service_includes_g}</li>
                    <li>{item.service_includes_h}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
