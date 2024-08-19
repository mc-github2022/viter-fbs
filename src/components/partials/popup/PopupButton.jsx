import React from "react";
import { FiEdit } from "react-icons/fi";

const PopupButton = ({ fn = null , customCSS }) => {
  return (
    <button
      className={`${customCSS} size-6 grid place-content-center bg-primary text-light rounded-full`}
      onClick={fn}
    >
      <FiEdit className="text-sm" />
    </button>
  );
};

export default PopupButton;
