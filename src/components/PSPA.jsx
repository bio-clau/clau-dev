import React, {useState} from "react";
import {useLang} from '../context/LangContext'
import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/solid'

import resCreate from '../img/poke/mob/resCreate.png';
import resCreateMob from '../img/poke/mob/resCreateMob.png';
import resDetail from '../img/poke/mob/resDetail.png';
import resDetailMob from '../img/poke/mob/resDetailMob.png';
import resLanding from '../img/poke/mob/resLanding.png';
import resLandingMob from '../img/poke/mob/resLandingMob.png';
import resPokedex from '../img/poke/mob/resPokedex.png';
import resPokedexMob from '../img/poke/mob/resPokedexMob.png';

import create from "../img/poke/create.png";
import detail from "../img/poke/detail.png";
import landing from "../img/poke/landing.png";
import pokedex from "../img/poke/pokedex.png";
import mobCreate from "../img/poke/mob-create.png";
import mobDetail from "../img/poke/mob-detail.png";
import mobLanding from "../img/poke/mob-landing.png";
import mobPokedex from "../img/poke/mob-pokedex.png";

import YouTube from '../img/iconos/YouTube.png';
import web from '../img/iconos/web.png';
import GH from '../img/iconos/GH.png'

function PSPA() {
  const { poke} = useLang();
  
  const aux = localStorage.getItem('theme');
  if(aux==='dark'){
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark')
  }
  const [img, setImg] = useState({landing:'dark:ring-offset-lm-background  shadow-xl shadow-lm-primaryVariant dark:shadow-dm-primary', mobLanding:'', pokedex:'', mobPokedex:'', detail:'', mobDetail:'', create:'', mobCreate:''});
  const [selected, setSelected] = useState('landing')
  const [selImg, setSelImg] = useState({img:landing, style:'m-10'})
  const [captionI, setCaptionI] =useState(0)

  const respImg = [
    resLanding,
    resLandingMob,
    resPokedex,
    resPokedexMob,
    resDetail,
    resDetailMob,
    resCreate,
    resCreateMob,
  ]
  const [resp, setResp] = useState({index:0, img:resLanding})

    function selectBack () {
      if(resp.index > 0){
        const aux = {
          index: resp.index -1,
          img:respImg[resp.index -1],
        }
        setResp(aux)
      }
    }
  
    function selectNext () {
      if(resp.index < respImg.length-1){
        const aux = {
          index: resp.index +1,
          img:respImg[resp.index +1],
        }
        setResp(aux)
      }
    }

    function highlight (e) {
      setCaptionI(e.target.id)
      setImg((prevState)=>{return {...prevState, [selected]:'', [e.target.name]: 'dark:ring-offset-lm-background  shadow-xl shadow-lm-primaryVariant dark:shadow-dm-primary'}})
      setSelected(e.target.name)
      switch (e.target.name) {
        case 'landing':
          setSelImg({img:landing, style:'m-10'})
          break;
        case 'mobLanding':
          setSelImg({img: mobLanding, style:'w-3/12 mb-10'})
          break;
        case 'pokedex':
          setSelImg({img:pokedex, style:'m-10'})
          break;
        case 'mobPokedex':
          setSelImg({img: mobPokedex, style:'w-3/12 mb-10'})
          break;
        case 'detail':
          setSelImg({img:detail, style:'m-10'})
          break;
        case 'mobDetail':
          setSelImg({img:mobDetail, style:'w-3/12 mb-10'})
          break;
        case 'create':
          setSelImg({img:create, style:'m-10'})
          break;
        case 'mobCreate':
          setSelImg({img:mobCreate, style:'w-3/12 mb-10'})
          break;
        default:
          break;
      }
    }
    return (
      <div className="flex flex-col-reverse xl:flex-row items-center">
        <div className="hidden xl:block xl:w-1/5 xl:h-full xl:mt-7" id="miniaturas">
          <div className="h-1/5 flex justify-around items-center p-5">
            <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.landing}`} src={landing} alt="landing" id={0} name='landing' onClick={(e)=> highlight(e)} />
            <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobLanding}`} src={mobLanding} alt="moblanding" id={1} name='mobLanding' onClick={(e)=> highlight(e)} />
          </div>
          <div className="flex justify-around h-1/5 items-center p-5">
            <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.pokedex}`} src={pokedex} alt="pokedex" id={2} name='pokedex' onClick={(e)=> highlight(e)} />
            <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobPokedex}`} src={mobPokedex} alt="mobPokedex" id={3} name='mobPokedex' onClick={(e)=> highlight(e)} />
          </div>
          <div className="flex justify-around h-1/5 items-center p-5">
            <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.detail}`} src={detail} alt="detail" id={4} name='detail' onClick={(e)=> highlight(e)} />
            <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobDetail}`} src={mobDetail} alt="mobDetail" id={5} name='mobDetail' onClick={(e)=> highlight(e)} />
          </div>
          <div className="flex justify-around h-1/5 items-center p-5">
            <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.create}`} src={create} alt="create" id={6} name='create' onClick={(e)=> highlight(e)} />
            <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobCreate}`} src={mobCreate} alt="mobCreate" id={7} name='mobCreate' onClick={(e)=> highlight(e)} />
          </div>
        </div>
        <div className={`hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:w-3/5 xl:h-full xl:z-10`} id="foto-seleccionada">
          <img className={`shadow-md shadow-lm-primaryVariant dark:shadow-dm-primary ${selImg.style}`} src={selImg.img} alt="selectedImg" />
          <p className="font-bold text-2xl p-3 text-lm-onBackground dark:text-dm-onBackground">{poke.captions[captionI]}</p>
        </div>
        <div className="xl:hidden">
          <div className="flex justify-center">
            <button disabled={resp.index===0} onClick={selectBack} className="disabled:bg-lm-primaryVariant disabled:shadow-none dark:disabled:bg-dm-overlay4 disabled:cursor-not-allowed shadow-md shadow-lm-onBackground dark:shadow-dm-onBackground w-8 m-2 rounded-md bg-lm-primary text-lm-onPrimary dark:bg-dm-primary dark:text-dm-onPrimary">
              <ChevronLeftIcon />
            </button>
            <button disabled={resp.index===respImg.length-1} onClick={selectNext} className=" disabled:bg-lm-primaryVariant disabled:shadow-none dark:disabled:bg-dm-overlay4 disabled:cursor-not-allowed shadow-md shadow-lm-onBackground dark:shadow-dm-onBackground w-8 m-2 rounded-md bg-lm-primary text-lm-onPrimary dark:bg-dm-primary dark:text-dm-onPrimary">
              <ChevronRightIcon />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-2xl p-3 text-lm-primary dark:text-dm-primary">{poke.captions[resp.index]}</p>
              <img   src={resp.img} alt="landing" />
          </div>
        </div>
        <div className="w-full xl:w-1/5 xl:h-full text-lm-onBackground dark:text-dm-onBackground" id="descripcion">
          <div className="text-lm-primary dark:text-dm-primary font-extrabold text-4xl p-3 pb-6">
            <p>Poké S.P.A.</p>
          </div>
          <div className="font-bold dark:font-normal text-lg p-3">
          <p>{poke.description}</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12  m-3">
              <a target='_blank' rel="noreferrer" className="no-underline" href="https://youtu.be/Un1ZjoOC0uw"><img src={YouTube} alt="YT" /></a>
            </button>
            <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
              <a target='_blank' rel="noreferrer" className="no-underline" href="https://henry-pi-frontend.herokuapp.com/"><img src={web} alt="web" /></a>
              
            </button>
            <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
              <a target='_blank' rel="noreferrer" className="no-underline" href="https://github.com/bio-clau/PI-Henry"><img src={GH} alt="GH" /></a>
            </button>
          </div>
        </div>
      </div>
    );
}

export default PSPA