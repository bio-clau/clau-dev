import React, { useState } from "react";
import { MenuIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";

function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const [dark, setDark] = useState(false)
  function handleMenu() {
    if (menu === "hidden") {
      setMenu("absolute");
    } else {
      setMenu('hidden')
    }
  }

  function changeTheme() {
    const aux = localStorage.getItem('theme');
    if(aux==='dark'){
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
      setDark(false)
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }

  return (
    <div className="h-14 bg-lm-primary dark:bg-dm-overlay2 flex justify-start items-center">
      <div className="flex w-full justify-between">
      <button className="flex justify-start items-center cursor-pionter mr-2">
        <MenuIcon onClick={handleMenu} className="h-10 w-10 text-lm-onPrimary dark:text-dm-onBackground " />
      </button>
      {
        dark?
      <button >
      <SunIcon onClick={changeTheme} className="h-10 w-10 mr-3 text-lm-onPrimary"/>
    </button> : 
    <button >
    <MoonIcon onClick={changeTheme} className="h-10 w-10 mr-3 text-dm-onBackground"/>
  </button>
      }
      </div>
      <div className={`${menu} min-w-max `}>
        <div className="backdrop-blur-3xl backdrop-brightness-125 dark:backdrop-brightness-100 rounded-lg absolute top-5 z-20 min-w-max shadow-xl shadow-lm-primaryVariant dark:shadow-dm-onBackground">
          <a className="block text-lm-onSecondary dark:text-dm-onBackground rounded-t-lg p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary" href="/">
            Home
          </a>
          <a
            className="block text-lm-onSecondary dark:text-dm-onBackground p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary"
            href="/projects"
          >
            My Projects
          </a>
          <a
            className="block text-lm-onSecondary dark:text-dm-onBackground rounded-b-lg p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
