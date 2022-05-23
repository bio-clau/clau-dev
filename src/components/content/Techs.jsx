import React from 'react'
import CSS from '../../img/iconos/CSS.png';
import Express from '../../img/iconos/Express-white.png';
import LExpress from '../../img/iconos/express.png';
import Git from '../../img/iconos/Git.png';
import GitHub from '../../img/iconos/GitHub.png';
import LGitHub from '../../img/iconos/LGitHub.png';
import HTML from '../../img/iconos/HTML.png';
import JS from '../../img/iconos/JS.png';
import mongoDB from '../../img/iconos/mongoDB.png';
import Node from '../../img/iconos/Node.png';
import Postgre from '../../img/iconos/Postgre.png';
import ReactIcon from '../../img/iconos/React.png';
import Redux from '../../img/iconos/Redux.png';
import Scrum from '../../img/iconos/scrum.png';
import LScrum from '../../img/iconos/Lscrum.png';
import tux from '../../img/iconos/tux2.png';

function Techs() {

  return (
    <div className='bg-lm-background dark:bg-dm-background absolute bottom-7 left-0 right-0'>
      <div>
        <div className='flex justify-center'>
        <p className='text-lm-onBackground dark:text-dm-onBackground font-extrabold text-xl pb-5'>Technologies</p>
        </div>
      <div className='flex justify-center h-14 md:h-16 lg:h-20'>
        <img className='h-full p-3' src={Node} alt="Node" />
        <img className='block dark:hidden h-full p-3' src={LExpress} alt="Express" />
        <img className='hidden dark:block h-full p-3' src={Express} alt="Express" />
        <img className='h-full p-3' src={mongoDB} alt="MongoDB" />
        <img className='h-full p-3' src={Postgre} alt="Postgre" />
        <img className='h-full p-3' src={ReactIcon} alt="React" />
        <img className='h-full p-3' src={Redux} alt="Redux" />
      </div>
      <div className='flex justify-center h-14 md:h-16 lg:h-20'>
        <img className='h-full p-3' src={Git} alt="Git" />
        <img className='block dark:hidden h-full p-3' src={LGitHub} alt="GitHub" />
        <img className='hidden dark:block h-full p-3' src={GitHub} alt="GitHub" />
        <img className='h-full p-3' src={tux} alt="ubuntu" />
        <img className='block dark:hidden h-full p-3' src={LScrum} alt="scrum" />
        <img className='hidden dark:block h-full p-3' src={Scrum} alt="scrum" />
        <img className='h-full p-3' src={JS} alt="JS" />
        <img className='h-full p-3' src={CSS} alt="CSS" />
        <img className='h-full p-3' src={HTML} alt="HTML" />
      </div>
      </div>
    </div>
  )
}

export default Techs