import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { MenuIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";

function Navbar() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState("hidden");
  const [dark, setDark] = useState(false);
  function handleMenu() {
    if (menu === "hidden") {
      setMenu("absolute");
    } else {
      setMenu("hidden");
    }
  }
  function goProjects(){
    setMenu("hidden");
    navigate('/projects')
  }
  function goHome(){
    setMenu("hidden");
    navigate('/')
  }
  function goContact(){
    setMenu("hidden");
    navigate('/contact')
  }


  function changeTheme() {
    const aux = localStorage.getItem("theme");
    if (aux === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }

  return (
    <div className="h-14 bg-lm-primary dark:bg-dm-overlay2 transition-color duration-500 ease-in-out flex justify-start items-center">
      <div className="flex w-full justify-between">
        <button className=" xl:hidden flex justify-start items-center cursor-pionter mr-2">
          <MenuIcon
            onClick={handleMenu}
            className="h-10 w-10 text-lm-onPrimary dark:text-dm-onBackground "
          />
        </button>
        <div className="hidden xl:flex xl:items-center xl:text-lm-onPrimary dark:xl:text-dm-onBackground xl:text-2xl xl:font-bold">
        <button onClick={goHome} className="m-4 hover:text-dm-primary">Home</button>
          
          <button onClick={goProjects} className="m-4 hover:text-dm-primary">My Projects</button>
          <button onClick={goContact} className="m-4 hover:text-dm-primary">Contact Me</button>

        </div>
        {dark ? (
          <button>
            <SunIcon
              onClick={changeTheme}
              className="h-10 w-10 mr-3 text-lm-onPrimary"
            />
          </button>
        ) : (
          <button>
            <MoonIcon
              onClick={changeTheme}
              className="h-10 w-10 mr-3 text-dm-onBackground"
            />
          </button>
        )}
      </div>
      <div className={`${menu} min-w-max `}>
        <div className="backdrop-blur-3xl backdrop-brightness-125 dark:backdrop-brightness-100 rounded-lg absolute top-5 z-20 min-w-max shadow-xl shadow-lm-primaryVariant dark:shadow-dm-onBackground">
          <button onClick={goHome} className=" w-full block text-lm-onSecondary dark:text-dm-onBackground rounded-t-lg p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary">
            Home
          </button>
          <button onClick={goProjects} className="w-full block text-lm-onSecondary dark:text-dm-onBackground p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary">
            My Projects
          </button>
          <button onClick={goContact} className="w-full block text-lm-onSecondary dark:text-dm-onBackground rounded-b-lg p-3 no-underline text-lg hover:bg-lm-secondary dark:hover:bg-dm-primary">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
