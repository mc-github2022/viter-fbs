import { setIsAnimating } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import React from "react";

export const urlPathSinglePageWebsite = "http://localhost/viter-fbs";
export const imgUrlPathSinglePageWebsite =
  "http://localhost/viter-fbs/public/img";

export const devApiUrl = `${urlPathSinglePageWebsite}/rest`;
export const devBaseUrl = `${urlPathSinglePageWebsite}`;
export const devBaseImgUrl = `${imgUrlPathSinglePageWebsite}`;
export const devNavUrl = "";
export const apiVersion = "/v2";

export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

export const handleEscape = (exitFn) => {
  function handleKeyDown(e) {
    e.keyCode === 27 && exitFn();
  }
  document.addEventListener("keydown", handleKeyDown);
  return function cleanup() {
    document.removeEventListener("keydown", handleKeyDown);
  };
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};
