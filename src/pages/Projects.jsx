import React from "react";
import { useNavigate } from "react-router-dom";
import Landing from "../img/poke/landing.png";
import Home from '../img/mc/home.png'

function Projects() {
  const aux = localStorage.getItem('theme');
  if(aux==='dark'){
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark')
  }
  const navigate = useNavigate();
  function goPoke() {
    navigate("/poke-spa");
  }
  function goMC() {
    navigate("/markets-center");
  }
  return (
    <div className="flex flex-col m-8">
      <div className="flex justify-center mt-4 mb-7 text-lm-onBackground dark:text-dm-onBackground text-4xl xl:text-5xl font-bold">
        MY PROJECTS
      </div>
      <div className="flex flex-wrap items-center md:flex-row justify-around mt-8" id="projectsContainer">
        <div className="md:hidden flex flex-col items-center bg-lm-background dark:bg-dm-overlay2 transition duration-500 ease-in-out border-2 rounded-xl border-lm-primaryVariant dark:border-dm-overlay3 shadow-lg shadow-lm-primary dark:shadow-dm-primary p-3 m-4 sm:w-3/5 lg:w-4/12 xl:w-4/12">
          <p className="text-lm-onBackground dark:text-dm-onBackground text-3xl xl:text-4xl p-4 font-bold">Poké SPA</p>
          <p className="text-lm-onBackground dark:text-dm-onBackground text-lg pb-4">
            FullStack Development of an PSA using pokeapi.co
          </p>
          <img className="p-4" src={Landing} alt="PokeLanding" />
          <button
            onClick={goPoke}
            className="bg-lm-secondary text-lm-onSecondary dark:bg-dm-primary transition duration-500 ease-in-out dark:text-dm-onPrimary p-1 px-2 m-3 rounded-lg font-bold hover:ring-2 ring-lm-secondaryVariant dark:ring-dm-onBackground"
          >
            View Project
          </button>
        </div>
        <div className=" md:hidden flex flex-col items-center bg-lm-background dark:bg-dm-overlay2 transition duration-500 ease-in-out border-2 rounded-xl border-lm-primaryVariant dark:border-dm-overlay3 shadow-lg shadow-lm-primary dark:shadow-dm-primary p-3 m-4 sm:w-3/5 lg:w-4/12 xl:w-4/12">
          <p className="text-lm-onBackground dark:text-dm-onBackground text-3xl xl:text-4xl p-4 font-bold">Markets Center</p>
          <p className="text-lm-onBackground dark:text-dm-onBackground text-lg pb-4">
            Group FullStack Development of a market place
          </p>
          <img className="p-4" src={Home} alt="MChome" />
          <button
            onClick={goMC}
            className="bg-lm-secondary text-lm-onSecondary dark:bg-dm-primary transition duration-500 ease-in-out dark:text-dm-onPrimary p-1 px-2 m-3 rounded-lg font-bold hover:ring-2 ring-lm-secondaryVariant dark:ring-dm-onBackground"
          >
            View Project
          </button>
        </div>
        <div className="hidden group hover:bg-Poke-hover hover:scale-110 transition-all ease-in-out duration-500 md:flex justify-center items-center shadow-lg shadow-dm-hover dark:shadow-dm-shadow border-2 border-dm-secondary bg-Poke bg-cover md:w-3/5 lg:w-4/12 xl:w-4/12 aspect-video rounded-xl h-fit m-8">
          <div className="invisible group-hover:visible  group-hover:flex flex-col justify-around items-center h-full w-full">
            <p className="text-lm-onPrimary dark:text-dm-onBackground backdrop-blur p-4 md:text-2xl lg:text-3xl xl:text-5xl font-bold font-bold ">POKE S.P.A.</p>
            <button onClick={goPoke} className="bg-lm-secondary dark:bg-dm-secondary text-lm-onPrimary dark:text-dm-onPrimary text-2xl font-bold rounded-md p-2 px-3 inset-0 hover:ring-2 ring-dm-onBackground">
              VIEW PROJECT
            </button>
          </div>
        </div>
        <div className="hidden group hover:bg-Home-hover hover:scale-110 transition-all ease-in-out duration-500 md:flex justify-center items-center shadow-lg shadow-dm-hover dark:shadow-dm-shadow border-2 border-dm-secondary bg-Home bg-cover md:w-3/5 lg:w-4/12 xl:w-4/12 aspect-video rounded-xl h-fit m-8">
          <div className="invisible group-hover:visible  group-hover:flex flex-col justify-around items-center h-full w-full">
            <p className="text-lm-onPrimary dark:text-dm-onBackground backdrop-blur p-4 md:text-2xl lg:text-3xl xl:text-5xl font-bold ">MARKETS CENTER</p>
            <button onClick={goMC} className="bg-lm-secondary dark:bg-dm-secondary text-lm-onPrimary dark:text-dm-onPrimary text-2xl font-bold rounded-md p-2 px-3 inset-0 hover:ring-2 ring-dm-onBackground">
            VIEW PROJECT
            </button>
          </div>
        </div>

        {/* <div className="border-2 border-dm-secondary shadow-md shadow-dm-shadow hover:opacity-25  transition-all duration-700 p-1 m-4 sm:w-3/5 lg:w-4/12 xl:w-4/12">
          <img className="transform hover:scale-110" src={Home} alt="Home" />
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
