import React from "react";
import eventImageA from "/eventImageA.jpg";
import eventImageB from "/eventImageB.jpg";
import eventImageC from "/eventImageC.jpg";
import useQueryData from "@/components/custom-hooks/useQueryData";
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
            {" "}
            <span className="font-bold">Event</span> and{" "}
            <span className="font-bold">Activities</span>{" "}
          </h2>
          <div className="wrapper grid md:grid-cols-3 gap-8">
            <div className="eventsItem text-center shadow-xl ">
              <div className="overflow-hidden h-[202px] mb-4">
                <img
                  src={eventImageA}
                  alt=""
                  className=" h-full w-full hover:scale-125 transition-all object-cover"
                />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  Annual Career Fest 2024 at STI College San Pablo
                </h2>
                <p className="mb-8 ">
                  We are thrilled to share our recent participation in the
                  Annual Career Fest 2024 at…
                </p>
                <a href="#" className="btn mb-8 font-semibold">
                  Read More
                </a>
              </div>
            </div>

            <div className="eventsItem text-center shadow-xl ">
              <div className="overflow-hidden h-[202px] mb-4">
                <img
                  src={eventImageB}
                  alt=""
                  className=" h-full w-full hover:scale-125 transition-all object-cover"
                />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  Annual Career Fest 2024 at STI College San Pablo
                </h2>
                <p className="mb-8 ">
                  We are thrilled to share our recent participation in the
                  Annual Career Fest 2024 at…
                </p>
                <a href="#" className="btn mb-8 font-semibold">
                  Read More
                </a>
              </div>
            </div>

            <div className="eventsItem text-center shadow-xl ">
              <div className="overflow-hidden h-[202px] mb-4">
                <img
                  src={eventImageC}
                  alt=""
                  className="h-full w-full hover:scale-125 transition-all object-cover"
                />
              </div>
              <div className="bg-light p-2">
                <h2 className="font-semibold text-xl mb-4">
                  Annual Career Fest 2024 at STI College San Pablo
                </h2>
                <p className="mb-8 ">
                  We are thrilled to share our recent participation in the
                  Annual Career Fest 2024 at…
                </p>
                <a href="#" className="btn mb-8 font-semibold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
