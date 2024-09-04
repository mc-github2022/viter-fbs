import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general";
import { CgMenuGridO, CgUser } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";

const DashBoardNav = ({ menu }) => {
  const links = [
    {
      title: "Header",
      url: "header",
    },
    {
      title: "About",
      url: "about",
    },
    {
      title: "Services",
      url: "services",
    },
    {
      title: "Activities",
      url: "activities",
    },
    {
      title: "Footer",
      url: "footer",
    },
  ];

  return (
    <>
      <div className="nav">
        <div className="navTitle flex items-center gap-1 text-lg mb-2">
          <CgMenuGridO />
          Menu
        </div>
        <ul className="[&>li>a]:py-2 [&>li>a]:px-2">
          {links.map((link, key) => (
            <li
              key={key}
              className={`${
                menu === link.title.toLowerCase()
                  ? "bg-secondary hover:!bg-secondary hover:!text-light text-light"
                  : ""
              } nav-item `}
            >
              <Link className="w-full" to={`${devNavUrl}/system/${link.url}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mx-2 mt-4 border-customGray" />
        <ul className="[&>li>a]:py-2 [&>li>a]:px-2 mt-4">
          <li>
            <Link target="_blank" to="/">
              Visit Website
            </Link>
          </li>
        </ul>
        <hr className="mx-2 mt-4 border-customGray" />
        <div className="navTitle flex items-center gap-1 text-lg mb-2 mt-6">
          <VscGear />
          Settings
        </div>
        <ul className="[&>li>a]:py-2 [&>li>a]:px-2 mt-4">
          <li>
            <Link target="_blank" to="/">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashBoardNav;
