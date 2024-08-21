import { setSuccess } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const Toast = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setSuccess(false));
  };

  React.useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 2000);
  });
  return (
    <div className=" !bg-light  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-md px-5 py-1 grid fixed top-5 z-50 left-1/2 -translate-x-1/2 animate-fadeIn h-[50px]">
      <p className="flex items-center gap-2 mb-0 leading-none py-1">
        <FaRegCircleCheck className="text-2xl text-[#00b148]" /> {store.message}
      </p>
    </div>
  );
};

export default Toast;
