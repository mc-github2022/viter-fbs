import {
  apiVersion,
  devBaseImgUrl,
} from "@/components/helpers/functions-general";
import PopupButton from "@/components/partials/popup/PopupButton";
import React from "react";
import ModalEditActivitiesContent from "./ModalEditActivitiesContent";
import ModalEditActivitiesItemA from "./ModalEditActivitiesItemA";
import Tooltip from "@/components/partials/Tooltip";
import ActivitiesLoader from "./ActivitiesLoader";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { setIsConfirm } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { IoImageOutline } from "react-icons/io5";

const ActivitiesContent = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [activitiesContent, setActivitiesContent] = React.useState(false);
  const handleModalActivities = () => setActivitiesContent(true);

  const [itemEdit, setItemEdit] = React.useState(null);

  const [activitiesItem, setActivitiesItem] = React.useState(false);
  const handleActivitiesItem = (item) => {
    dispatch(setIsConfirm(true));
    setItemEdit(item);
    setActivitiesItem(true);
  };

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
      <section
        id="events"
        className="events py-20 text-dark bg-customGray relative"
      >
        <div className="absolute right-[-10px] top-[-10px] group">
          <PopupButton fn={() => handleActivitiesItem(item)} />
          <Tooltip text="Edit" />
        </div>
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12 text-center">
            <span className="font-bold">Event</span> and
            <span className="font-bold">Activities</span>
          </h2>
          <div className="wrapper grid md:grid-cols-3 gap-8">
            {activityContent?.data.map((item, key) => {
              return (
                <div key={key} className="eventsItem text-center relative">
                  <div className="absolute right-[-10px] top-[-10px] z-10 group">
                    <PopupButton fn={() => handleActivitiesItem(item)} />
                    <Tooltip text="Edit" />
                  </div>
                  <div className="overflow-hidden h-[202px] mb-4">
                    {item.activity_img === "" ? (
                      <div>
                        <div className="h-[198px] mx-auto grid place-items-center bg-[#e2e2e2] rounded-md">
                          <IoImageOutline className="text-[50px] text-light" />
                        </div>
                        <div className="absolute right-[-10px] top-[-10px] group">
                          <PopupButton fn={handleActivitiesItem} />
                          <Tooltip text="Edit" />
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

      {activitiesContent && (
        <ModalEditActivitiesContent close={setActivitiesContent} />
      )}
      {activitiesItem && (
        <ModalEditActivitiesItemA
          close={setActivitiesItem}
          itemEdit={itemEdit}
        />
      )}
    </>
  );
};

export default ActivitiesContent;
