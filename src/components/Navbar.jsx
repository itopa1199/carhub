import React, { useState } from "react";
import {
  FaMagnifyingGlass,
  FaHeart,
  FaPerson,
  FaCartShopping,
} from "react-icons/fa6";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (navItem) => {
    setActiveNav(activeNav === navItem ? null : navItem);
  };
  return (
    <div className="px-20 py-6 text-xl  flex justify-between">
      <h1 className="font-bold pt-4.5">SWIFT-LOGISTICS</h1>
      <ul className="flex justify-between border-2 rounded-2xl  border-gray-200 shadow-md">
        <li
          onClick={() => handleNavClick("book")}
          className={
            activeNav === "book"
              ? "border-b-2 border-cyan-500 mx-5 my-3 cursor-pointer font-semibold"
              : "text-black mx-5 my-3 cursor-pointer"
          }
        >
          Book a Ride
        </li>
        <li
          onClick={() => handleNavClick("logistics")}
          className={
            activeNav === "logistics"
              ? "border-b-2 border-cyan-500 mx-5 my-3 cursor-pointer font-semibold"
              : "text-black mx-5 my-3 cursor-pointer"
          }
        >
          Logistics
        </li>
        <li
          onClick={() => handleNavClick("car")}
          className={
            activeNav === "car"
              ? "border-b-2 border-cyan-500 mx-5 my-3 cursor-pointer font-semibold"
              : "text-black mx-5 my-3 cursor-pointer"
          }
        >
          Car
        </li>
        <li
          onClick={() => handleNavClick("about")}
          className={
            activeNav === "about"
              ? "border-b-2 border-cyan-500 mx-5 my-3 cursor-pointer font-semibold"
              : "text-black mx-5 my-3 cursor-pointer"
          }
        >
          About Us
        </li>
        <li
          onClick={() => handleNavClick("contact")}
          className={
            activeNav === "contact"
              ? "border-b-2 border-cyan-500 mx-5 my-3 cursor-pointer font-semibold"
              : "text-black mx-5 my-3 cursor-pointer"
          }
        >
          Contact Us
        </li>
      </ul>
      <ul className="flex justify-between pt-4.5">
        <li className="pr-6 cursor-pointer">
          <FaMagnifyingGlass />
        </li>
        <li className="pr-6 cursor-pointer">
          <FaHeart />
        </li>
        <li className="pr-6 cursor-pointer">
          <FaPerson />
        </li>
        <li className="pr-6 cursor-pointer">
          <FaCartShopping />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
