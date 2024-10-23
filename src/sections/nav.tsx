"use client";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "../../public/images/menu-burger.svg"
import Cross from "../../public/images/cross.svg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); // To track active state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (item: React.SetStateAction<string>) => {
    setActive(item);
    setIsOpen(false); // Close menu on selection in mobile
  };

  return (
    <div className="h-24 w-full text-base flex flex-row justify-between items-center px-12 sticky top-0 bg-white shadow-lg">
      <div className="text-xl font-semibold text-background leading-[25px]">
        Hezed <br /> Counselling
      </div>

      {/* Hamburger / Close Icon for mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          // Close icon
          <Cross/>

        ) : (
          // Hamburger icon
          <Menu/>
        )}
      </div>

      {/* Links for desktop */}
      <div className="hidden md:flex flex-row gap-24 text-black cursor-pointer">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <span
            key={item}
            className={`${
              active === item
                ? "text-background underline font-semibold"
                : "hover:text-background "
            } cursor-pointer`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-24 left-0 w-full flex-col items-center bg-white text-black shadow-md md:hidden`}
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <span
            key={item}
            className={`py-2 ${
              active === item
                ? "text-background font-semibold underline"
                : "hover:text-background "
            } cursor-pointer`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Nav;
