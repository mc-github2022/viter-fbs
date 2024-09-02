import React from "react";
import eventImageA from "/eventImageA.jpg";
import eventImageB from "/eventImageB.jpg";
import eventImageC from "/eventImageC.jpg";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { IoImageOutline } from "react-icons/io5";
const Activities = () => {
  const {
    isLoading,
    error,
    data: activityContent,
  } = useQueryData(
    "/v2/activity-content", // endpoint
    "get", // method
    "activityContent" // key
  );

  return (
    <>
      <section id="events" className="events py-20 text-dark">
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12 text-center">
            <span className="font-bold">Event</span> and
            <span className="font-bold">Activities</span>
          </h2>
          <div className="wrapper grid md:grid-cols-3 gap-8">
            {activityContent?.data.map((item, key) => {
              return (
                <div
                  key={key}
                  className="eventsItem shadow-xl text-center relative"
                >
                  <div className="overflow-hidden h-[202px] mb-4">
                    {item.activity_img === "" ? (
                      <div>
                        <div className="h-[198px] mx-auto grid place-items-center bg-[#e2e2e2] rounded-md">
                          <IoImageOutline className="text-[50px] text-light" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <img
                          src={`${devBaseImgUrl}/${item.activity_img}`}
                          alt=""
                          className="h-[198px] mb-2 object-cover w-full"
                        />
                      </div>
                    )}
                  </div>
                  <div className="bg-light p-2">
                    <h2 className="font-semibold text-xl mb-4">
                      {item.activity_title}
                    </h2>
                    <p className="mb-8 ">{item.activity_text}</p>
                    <a
                      href={item.activity_btn_link}
                      className="btn mb-8 font-semibold"
                    >
                      {item.activity_btn_text}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
