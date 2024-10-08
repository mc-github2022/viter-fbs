import { devBaseImgUrl } from "@/components/helpers/functions-general";
import PopupButton from "@/components/partials/popup/PopupButton";
import React from "react";
import ModalEditServicesItemA from "./ModalEditServicesItemA";
import Tooltip from "@/components/partials/Tooltip";

import useQueryData from "@/components/custom-hooks/useQueryData";
import { StoreContext } from "@/components/store/StoreContext";
import { setIsConfirm } from "@/components/store/StoreAction";
import { IoImageOutline } from "react-icons/io5";

const ServicesContent = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [setService, setServiceContent] = React.useState(false);
  const handleModalService = () => setServiceContent(true);

  const [setServiceA, setServiceItemA] = React.useState(false);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleModalServiceItemA = (item) => {
    dispatch(setIsConfirm(true));
    setItemEdit(item);
    setServiceItemA(true);
  };

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
        className="services serviceBg text-center py-20 text-light relative"
      >
        <div className="absolute right-[-10px] top-[-10px] group">
          <PopupButton fn={handleModalService} />
          <Tooltip text="Edit" />
        </div>
        <div className="container lg:myContainer">
          <h2 className="text-3xl mb-12">
            What <b>We Offer?</b>
          </h2>
          <div className="wrapper grid lg:grid-cols-4 gap-8 md:grid-cols-2">
            {serviceContent?.data.map((item, key) => {
              return (
                <div key={key} className="serviceItem font-bold relative ">
                  <div className="absolute right-[-10px] top-[-10px] z-10 group">
                    <PopupButton fn={() => handleModalServiceItemA(item)} />
                    <Tooltip text="Edit" />
                  </div>
                  <div className="text-center h-[76px] mb-12">
                    {item.service_img === "" ? (
                      <div>
                        <div className=" w-[60px] h-[60px] mx-auto grid place-items-center bg-[#e2e2e2] rounded-md">
                          <IoImageOutline className="text-[50px] text-light" />
                        </div>
                        <div className="absolute right-[-10px] top-[-10px] group">
                          <PopupButton fn={handleModalServiceItemA} />
                          <Tooltip text="Edit" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <img
                          src={`${devBaseImgUrl}/${item.service_img}`}
                          alt=""
                          className="w-[62.45px] h-[50px] mx-auto mb-2 object-contain"
                        />
                      </div>
                    )}
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

      {setServiceA && (
        <ModalEditServicesItemA close={setServiceItemA} itemEdit={itemEdit} />
      )}
    </>
  );
};

export default ServicesContent;
