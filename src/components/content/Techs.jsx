import React from 'react'
import {useLang} from '../../context/LangContext'

function Techs() {
  const {lang} = useLang();
  return (
    <div className=''>
      <div>
        <div className='flex justify-center'>
        <p className='text-lm-onBackground dark:text-dm-onBackground font-extrabold text-xl pb-5'>{lang==='eng'?'Technologies':'Tecnologías'}</p>
        </div>
      <div className='flex justify-center h-14 md:h-16 lg:h-20'>
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188322/Portfolio/iconos/Node_qvdypj.png' alt="Node" />
        <img className=' h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188320/Portfolio/iconos/expressNew_mutjfa.png' alt="Express" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/mongoDB_driqoe.png' alt="MongoDB" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188320/Portfolio/iconos/Postgre_fnlsyh.png' alt="Postgre" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188322/Portfolio/iconos/React_ly7cob.png' alt="React" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188322/Portfolio/iconos/Redux_i5avi6.png' alt="Redux" />
      </div>
      <div className='flex justify-center h-14 md:h-16 lg:h-20'>
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/Git_ojcspk.png' alt="Git" />
        <img className='block dark:hidden h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/LGitHub_ow4ptf.png' alt="GitHub" />
        <img className='hidden dark:block h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/GitHub_a64ije.png' alt="GitHub" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188323/Portfolio/iconos/tux2_c55woi.png' alt="ubuntu" />
        <img className='block dark:hidden h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188320/Portfolio/iconos/Lscrum_qaczrt.png' alt="scrum" />
        <img className='hidden dark:block h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188322/Portfolio/iconos/scrum_yachls.png' alt="scrum" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188320/Portfolio/iconos/JS_w75xpf.png' alt="JS" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188321/Portfolio/iconos/CSS_hhmkch.png' alt="CSS" />
        <img className='h-full p-3' src='https://res.cloudinary.com/tropura/image/upload/v1654188320/Portfolio/iconos/HTML_qdncyx.png' alt="HTML" />
      </div>
      </div>
    </div>
  )
}

export default Techs