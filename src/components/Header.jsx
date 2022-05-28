import React from "react";
import {useLang} from '../context/LangContext'
import Techs from "./content/Techs";
import WhyMe from "./content/WhyMe";
import mia from "../img/mia-new.png";

function Header() {
  const {lang} = useLang();
  return (
    <>
      <div className="hidden md:flex md:flex-row justify-around items-center">
        <div className="flex justify-around items-center w-4/12">
          <img className="h-fit p-6" src={mia} alt="mia" />
        </div>
        <div className="flex flex-col items-center justify-evenly w-8/12">
          <div className="pt-10">
            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl font-extrabold text-lm-onBackground dark:text-dm-onBackground text-xl">
              {lang==='eng'?"Hi! I'm Claudia Neme" : "Hola! Soy Claudia Neme"}
            </h1>
            <h2 className="2xl:text-5xl text-md font-bold text-lm-onBackground dark:text-dm-onBackground">
              {lang==='eng'?'Full Stack Web Developer':'Desarrolladora Web Full Stack'}
            </h2>
          </div>
          <WhyMe />
          <Techs />
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-around items-center">
        <div className="flex justify-between items-center">
          <img className="w-2/4" src={mia} alt="mia" />
          <div className="flex flex-col items-center justify-evenly">
            <h1 className=" md:text-5xl sm:text-4xl font-extrabold text-lm-onBackground dark:text-dm-onBackground text-xl">
            {lang==='eng'?"Hi! I'm Claudia Neme" : "Hola! Soy Claudia Neme"}
            </h1>
            <h2 className="2xl:text-5xl text-md font-bold text-lm-onBackground dark:text-dm-onBackground">
            {lang==='eng'?'Full Stack Web Developer':'Desarrolladora Web Full Stack'}
            </h2>
          </div>
        </div>
        <div className="pt-2">
          <WhyMe />
          <Techs />
        </div>
      </div>
    </>
  );
}

export default Header;
