import React, {useState} from 'react'
import {useLang} from '../context/LangContext'

import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/solid'

import RespHome from '../img/mc/mob/RespHome.png';
import RespHomeMob from '../img/mc/mob/RespHomeMob.png';
import RespDetail from '../img/mc/mob/RespDetail.png';
import RespDetailMob from '../img/mc/mob/RespDetailMob.png';
import RespFav from '../img/mc/mob/RespFav.png';
import RespFavMob from '../img/mc/mob/RespFavMob.png';
import RespCart from '../img/mc/mob/RespCart.png';
import RespCartMob from '../img/mc/mob/RespCartMob.png';

import home from '../img/mc/home.png';
import mobHome from '../img/mc/mobHome.png';
import detail from '../img/mc/detail.png';
import mobDetail from '../img/mc/mobDetail.png';
import fav from '../img/mc/fav.png';
import mobFav from '../img/mc/mobFav.png';
import cart from '../img/mc/cart.png';
import mobCart from '../img/mc/mobCart.png';

import YT from '../img/iconos/YouTube.png';
import web from '../img/iconos/web.png';
import GH from '../img/iconos/GH.png'


function MC() {
  const {mcInfo} = useLang();
  const aux = localStorage.getItem('theme');
  if(aux==='dark'){
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark')
  }
    const [img, setImg] = useState({home:'dark:ring-offset-lm-background  shadow-xl shadow-lm-primaryVariant dark:shadow-dm-primary', mobHome:'',  detail:'', mobDetail:'', fav:'', mobFav:'', cart:'', mobCart:''});
  const [selected, setSelected] = useState('home')
  const [captionI, setCaptionI] =useState(0)
  const [selImg, setSelImg] = useState({img:home, style:'m-10'})

  const respImg = [
    RespHome,
    RespHomeMob,
    RespDetail,
    RespDetailMob,
    RespFav,
    RespFavMob,
    RespCart,
    RespCartMob,
  ]
  const [resp, setResp] = useState({index:0, img:RespHome})

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
      case 'home':
        setSelImg({img:home, style:'m-10'})
        break;
      case 'mobHome':
        setSelImg({img: mobHome, style:'w-3/12 mb-10'})
        break;
      case 'detail':
        setSelImg({img:detail, style:'m-10'})
        break;
      case 'mobDetail':
        setSelImg({img:mobDetail, style:'w-3/12 mb-10'})
        break;
      case 'fav':
        setSelImg({img:fav, style:'m-10'})
        break;
      case 'mobFav':
        setSelImg({img:mobFav, style:'w-3/12 mb-10'})
        break;
    case 'cart':
        setSelImg({img:cart, style:'m-10'})
        break;
    case 'mobCart':
        setSelImg({img:mobCart, style:'w-3/12 mb-10'})
        break;
      default:
        break;
    }
  }
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center">
      <div className="hidden xl:block xl:w-1/5 xl:h-full xl:mt-7" id="miniaturas">
        <div className="h-1/5 flex justify-around items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.home}`} src={home} alt="home" id={0} name='home' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobHome}`} src={mobHome} alt="mobhome" id={1} name='mobHome' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.detail}`} src={detail} alt="detail" id={2} name='detail' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobDetail}`} src={mobDetail} alt="mobDetail" id={3} name='mobDetail' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.fav}`} src={fav} alt="fav" id={4} name='fav' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobFav}`} src={mobFav} alt="mobFav" id={5} name='mobFav' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.cart}`} src={cart} alt="cart" id={6} name='cart' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobCart}`} src={mobCart} alt="mobCart" id={7} name='mobCart' onClick={(e)=> highlight(e)} />
        </div>
      </div>
      <div className={`hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:w-3/5 xl:h-full xl:z-10`} id="foto-seleccionada">
        <img className={`shadow-md shadow-lm-primaryVariant dark:shadow-dm-primary ${selImg.style}`} src={selImg.img} alt="selectedImg" />
        <p className="font-bold text-2xl p-3 text-lm-onBackground dark:text-dm-onBackground">{mcInfo.captions[captionI]}</p>
      </div>
      <div className="xl:hidden">
          <div className="flex justify-center">
            <button disabled={resp.index===0} onClick={selectBack} className="disabled:bg-lm-primaryVariant disabled:shadow-none dark:disabled:bg-dm-overlay4 disabled:cursor-not-allowed shadow-md shadow-lm-onBackground dark:shadow-dm-onBackground w-8 m-2 rounded-md bg-lm-primary text-lm-onPrimary dark:bg-dm-primary dark:text-dm-onPrimary">
              <ChevronLeftIcon />
            </button>
            <button disabled={resp.index===respImg.length-1} onClick={selectNext} className="disabled:bg-lm-primaryVariant disabled:shadow-none dark:disabled:bg-dm-overlay4 disabled:cursor-not-allowed shadow-md shadow-lm-onBackground dark:shadow-dm-onBackground w-8 m-2 rounded-md bg-lm-primary text-lm-onPrimary dark:bg-dm-primary dark:text-dm-onPrimary">
              <ChevronRightIcon />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-2xl p-3 text-lm-primary dark:text-dm-primary">{mcInfo.captions[resp.index]}</p>
              <img   src={resp.img} alt="landing" />
          </div>
        </div>

      <div className="w-full xl:w-1/5 xl:h-full text-lm-onBackground dark:text-dm-onBackground" id="descripcion">
        <div className="text-lm-primary dark:text-dm-primary font-extrabold text-4xl p-3 pb-6">
          <p>Markets Center</p>
        </div>
        <div className="font-bold dark:font-normal text-md p-3">
        <p>{mcInfo.description}</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12  m-3">
            <a target='_blank' rel="noreferrer" className="no-underline " href="https://youtu.be/N0nbWDKR-Cc"><img className='' src={YT} alt="Youtube" /></a>
          </button>
          <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
            <a target='_blank' rel="noreferrer" className="no-underline" href="https://markets-center.vercel.app"><img src={web} alt="web" /></a>
          </button>
          <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
            <a target='_blank' rel="noreferrer" className="no-underline" href="https://github.com/bio-clau/markets-center-client"><img src={GH} alt="GH" /></a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MC