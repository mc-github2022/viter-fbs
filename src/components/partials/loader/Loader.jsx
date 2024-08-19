import React from "react";

const Loader = ({ customCss }) => {
  return (
    <>
      <div className={`${customCss} animate-pulse bg-customGray `}></div>
    </>
  );
};

export default Loader;
