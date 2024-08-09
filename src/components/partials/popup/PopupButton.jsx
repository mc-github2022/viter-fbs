import React from "react";
import { FiEdit } from "react-icons/fi";

const PopupButton = ({ fn = null }) => {
  return (
    <button
      className="size-6 grid place-content-center bg-primary text-light rounded-full"
      onClick={fn}
    >
      <FiEdit className="text-sm" />
    </button>
  );
};

export default PopupButton;
