import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="relative max-w-[600px] text-center">
        <h1 className="text-[clamp(50px,_20vw,_560px)] font-extrabold absolute -top-[300px] left-1/2 -translate-x-1/2 opacity-10 -z-[999]">
          404
        </h1>
        <h2 className="text-[clamp(20px,_5vw,_40px)]">
          We are sorry, page not found
        </h2>
        <p className="text-xl ">
          The page you are looking for might have been remove, change the name
          or temporary unavailable
        </p>
        <button className="btn btn-accent mx-auto" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
