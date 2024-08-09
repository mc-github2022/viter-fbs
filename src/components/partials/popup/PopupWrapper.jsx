import React from "react";

const PopupWrapper = (props) => {
  return (
    <div className="bg-primary  min-h-[200px] p-4 translate-y-7 rounded-sm border border-line shadow-custom z-[999999]">
      {props.children}
    </div>
  );
};

export default PopupWrapper;
