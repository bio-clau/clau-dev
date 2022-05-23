import React from 'react'
import {LocationMarkerIcon} from '@heroicons/react/solid'
import mail from '../img/iconos/mail.png';
import linkedin from '../img/iconos/linkedin.png';
import GB from '../img/iconos/GH-b.png';
import LGB from '../img/iconos/LGH-b.png';
import Llinkedin from '../img/iconos/Llinkedin.png';
import Lmail from '../img/iconos/Lmail.png';

function Contact() {
    const aux = localStorage.getItem('theme');
  if(aux==='dark'){
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark')
  }

  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-lm-onBackground dark:text-dm-onBackground font-extrabold text-3xl p-8'>Get in touch with me</p>
        <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center lg:w-2/4'>
            <div id='contactInfoContainer' className='bg-lm-secondary dark:bg-dm-overlay2 rounded-lg m-3 p-4'>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondary'>
                    <img className='block dark:hidden' src={Lmail} alt="mail" />
                    <img className='hidden dark:block' src={mail} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <p>clau.neme@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondary'>
                    <img className='block dark:hidden' src={Llinkedin} alt="mail"/>
                    <img className='hidden dark:block' src={linkedin} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <a href="https://www.linkedin.com/in/nemeclaudia/">/in/nemeclaudia/</a>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondary'>
                    <img className='block dark:hidden' src={LGB} alt="mail" />
                    <img className='hidden dark:block' src={GB} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <a href="https://github.com/bio-clau">/bio-clau</a>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-sm-secondary text-lm-background dark:text-dm-onSecondary'>
                    <LocationMarkerIcon/>
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <p>San Juan, Argentina</p>
                    </div>
                </div>
            </div>
            <div className='bg-lm-secondary dark:bg-dm-overlay2 mt-10 rounded-lg p-4 m-3'>
                <form action="https://formsubmit.co/clau.neme@gmail.com" method="POST">
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>Your name</label>
                        <input name="name" className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 dark:border-dm-secondary text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' type="text" />
                        <input type="hidden" name='_next' value='http://localhost:3000/thankyou' />
                        <input type="hidden" name='_subject' value='Email from webpage' />
                    </div>
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>Your email</label>
                        <input name='email' className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 dark:border-dm-secondary text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' type="email" required/>
                    </div>
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>Your message</label>
                        <textarea className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 dark:border-dm-secondary text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' name="message" id="message" required/>
                    </div>
                    <div className='flex justify-center items-center m-2'>
                    <button type='submit' className='bg-lm-secondary dark:hover:bg-dm-secondary text-lm-onSecondary dark:bg-dm-overlay2 dark:text-dm-secondary dark:hover:text-dm-onSecondary font-extrabold text-lg rounded-md p-1 px-2 mb-4 ring-2 ring-lm-secondaryVariant dark:ring-dm-secondary ring-offset-1 ring-offset-transparent hover:bg-lm-secondaryVariant'>
                        Send
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
//     <div className='flex justify-center'>
//     <button className='bg-button text-background p-2 m-4 rounded-md font-extrabold xl:text-lg'>
//       <a href="/src/Files/CV-ClaudiaNeme.pdf" download> CV</a>
//     </button>
//     <button onClick={mail} className='bg-button text-background p-2 m-4 w-10 rounded-md font-extrabold xl:text-lg'>
//       <MailIcon/>
//     </button>
//   </div>
  )
}

export default Contact