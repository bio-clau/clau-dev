import React from "react";
import mia from "../img/mia.png";

function Header() {
  return (
    <div className=" bg-lm-header dark:bg-dm-header bg-cover transition duration-500 ease-in-out">
      <div className="flex justify-around items-center w-full">
        <img className="2xl:w-1/6 2xl:p-8 2xl:m-6 w-1/4 sm:p-3 p-1 z-10 " src={mia} alt="mia" />
        <div className="z-10">
          <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-lm-onBackground dark:text-dm-onBackground text-xl">
            Hi! I'm Claudia Neme
          </h1>
          <h2 className="2xl:text-5xl text-md font-bold text-lm-onBackground dark:text-dm-onBackground">Full Stack Web Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
