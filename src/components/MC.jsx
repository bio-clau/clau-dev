import React, {useState} from 'react'
import {useLang} from '../context/LangContext'

import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/solid'

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
  const [selImg, setSelImg] = useState({img:'https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/home_ptxcom.png', style:'m-10'})

  const respImg = [
    'https://res.cloudinary.com/tropura/image/upload/v1654188108/Portfolio/mc/mob/RespHome_yld50u.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188107/Portfolio/mc/mob/RespHomeMob_tnfim6.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188108/Portfolio/mc/mob/RespDetail_nbwkrd.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188107/Portfolio/mc/mob/RespDetailMob_wm4ik5.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188107/Portfolio/mc/mob/RespFav_cceehm.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188107/Portfolio/mc/mob/RespFavMob_e4xqgp.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188106/Portfolio/mc/mob/RespCart_gd9nuk.png',
    'https://res.cloudinary.com/tropura/image/upload/v1654188107/Portfolio/mc/mob/RespCartMob_bmrvt5.png',
  ]
  const [resp, setResp] = useState({index:0, img:'https://res.cloudinary.com/tropura/image/upload/v1654188108/Portfolio/mc/mob/RespHome_yld50u.png'})

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
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/home_ptxcom.png', style:'m-10'})
        break;
      case 'mobHome':
        setSelImg({img: 'https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobHome_tmfedj.png', style:'w-3/12 mb-10'})
        break;
      case 'detail':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/detail_nxkjay.png', style:'m-10'})
        break;
      case 'mobDetail':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobDetail_oclgfd.png', style:'w-3/12 mb-10'})
        break;
      case 'fav':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188083/Portfolio/mc/fav_wqghfg.png', style:'m-10'})
        break;
      case 'mobFav':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobFav_dbr0um.png', style:'w-3/12 mb-10'})
        break;
    case 'cart':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/cart_i8ubut.png', style:'m-10'})
        break;
    case 'mobCart':
        setSelImg({img:'https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/mobCart_sdwuqx.png', style:'w-3/12 mb-10'})
        break;
      default:
        break;
    }
  }
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center">
      <div className="hidden xl:block xl:w-1/5 xl:h-full xl:mt-7" id="miniaturas">
        <div className="h-1/5 flex justify-around items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.home}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/home_ptxcom.png' alt="home" id={0} name='home' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobHome}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobHome_tmfedj.png' alt="mobhome" id={1} name='mobHome' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.detail}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/detail_nxkjay.png' alt="detail" id={2} name='detail' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobDetail}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobDetail_oclgfd.png' alt="mobDetail" id={3} name='mobDetail' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.fav}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188083/Portfolio/mc/fav_wqghfg.png' alt="fav" id={4} name='fav' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobFav}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/mobFav_dbr0um.png' alt="mobFav" id={5} name='mobFav' onClick={(e)=> highlight(e)} />
        </div>
        <div className="flex justify-around h-1/5 items-center p-5">
          <img className={`w-3/6 h-fit cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.cart}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/cart_i8ubut.png' alt="cart" id={6} name='cart' onClick={(e)=> highlight(e)} />
          <img className={`w-1/5 h-auto cursor-pointer border-2 border-lm-primary dark:border-dm-primary ${img.mobCart}`} src='https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/mobCart_sdwuqx.png' alt="mobCart" id={7} name='mobCart' onClick={(e)=> highlight(e)} />
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
            <a target='_blank' rel="noreferrer" className="no-underline " href="https://youtu.be/N0nbWDKR-Cc"><img className='' src='https://res.cloudinary.com/tropura/image/upload/v1654188322/Portfolio/iconos/YouTube_ssauim.png' alt="Youtube" /></a>
          </button>
          <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
            <a target='_blank' rel="noreferrer" className="no-underline" href="https://markets-center.vercel.app"><img src='https://res.cloudinary.com/tropura/image/upload/v1654188323/Portfolio/iconos/web_kr9xo7.png' alt="web" /></a>
          </button>
          <button className="bg-lm-secondary dark:bg-dm-secondary rounded-md xl:w-1/6 w-1/12 m-3">
            <a target='_blank' rel="noreferrer" className="no-underline" href="https://github.com/bio-clau/markets-center-client"><img src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/GH_mxvtjm.png' alt="GH" /></a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MC