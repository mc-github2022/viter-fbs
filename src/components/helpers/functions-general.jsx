import { setIsAnimating } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import React from "react";

export const urlPathSinglePageWebsite =
  "http://localhost/viter-fbs";
export const imgUrlPathSinglePageWebsite =
  "http://localhost/viter-fbs/public";

export const devApiUrl = `${urlPathSinglePageWebsite}/rest`;
export const devBaseUrl = `${urlPathSinglePageWebsite}`;
export const devBaseImgUrl = `${imgUrlPathSinglePageWebsite}`;
export const devNavUrl = "";

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
