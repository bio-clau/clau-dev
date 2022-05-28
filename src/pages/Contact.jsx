import React from 'react'
import {useLang} from '../context/LangContext'
import {LocationMarkerIcon} from '@heroicons/react/solid'
import mail from '../img/iconos/mail.png';
import linkedin from '../img/iconos/linkedin.png';
import GB from '../img/iconos/GH-b.png';
import LGB from '../img/iconos/LGH-b.png';
import Llinkedin from '../img/iconos/Llinkedin.png';
import Lmail from '../img/iconos/Lmail.png';

function Contact() {
    const {lang} = useLang();
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
        <p className='text-lm-onBackground dark:text-dm-onBackground font-extrabold text-4xl p-8'>{lang==='eng'?'Get in touch with me':'Contácta conmigo'}</p>
        <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center lg:w-2/4'>
            <div id='contactInfoContainer' className='border-2 border-lm-secondaryVariant shadow-md shadow-lm-onBackground dark:bg-dm-overlay2 dark:border-dm-secondaryVariant dark:shadow-dm-onBackground transition duration-500 ease-in-out rounded-lg m-3 ml-8 p-4'>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondaryVariant transition duration-500 ease-in-out'>
                    <img className='block dark:hidden' src={Lmail} alt="mail" />
                    <img className='hidden dark:block' src={mail} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <p>clau.neme@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondaryVariant transition duration-500 ease-in-out'>
                    <img className='block dark:hidden' src={Llinkedin} alt="mail"/>
                    <img className='hidden dark:block' src={linkedin} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <a href="https://www.linkedin.com/in/nemeclaudia/">/in/nemeclaudia/</a>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondaryVariant transition duration-500 ease-in-out'>
                    <img className='block dark:hidden' src={LGB} alt="mail" />
                    <img className='hidden dark:block' src={GB} alt="mail" />
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <a href="https://github.com/bio-clau">/bio-clau</a>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center p-2'>
                    <div className='w-10 m-2 rounded-md bg-lm-secondaryVariant dark:bg-dm-secondaryVariant transition duration-500 ease-in-out text-lm-background dark:text-dm-onSecondary'>
                    <LocationMarkerIcon/>
                    </div>
                    <div className='text-lm-onSecondary dark:text-dm-onBackground ml-4'>
                    <p>San Juan, Argentina</p>
                    </div>
                </div>
            </div>
            <div className='border-2 border-lm-secondaryVariant shadow-md shadow-lm-onBackground dark:bg-dm-overlay2 dark:border-dm-secondaryVariant dark:shadow-dm-onBackground transition duration-500 ease-in-out rounded-lg m-3 mr-8 p-4'>
                <form action="https://formsubmit.co/clau.neme@gmail.com" method="POST">
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>{lang==='eng'?'Your name':'Tu nombre'}</label>
                        <input name="name" className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 transition duration-500 ease-in-out dark:border-dm-secondaryVariant text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' type="text" />
                        <input type="hidden" name='_next' value='http://localhost:3000/thankyou' />
                        <input type="hidden" name='_subject' value='Email from webpage' />
                    </div>
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>{lang==='eng'?'Your email':'Tu email'}</label>
                        <input name='email' className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 dark:border-dm-secondaryVariant transition duration-500 ease-in-out text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' type="email" required/>
                    </div>
                    <div className='flex flex-col items-start p-4'>
                        <label className='text-lm-onSecondary dark:text-dm-onBackground font-bold pb-1'>{lang==='eng'?'Your message':'Tu mensaje'}</label>
                        <textarea className='bg-lm-background border-2 border-lm-secondaryVariant dark:bg-dm-overlay3 transition duration-500 ease-in-out dark:border-dm-secondaryVariant text-lm-onBackground dark:text-dm-onBackground font-extrabold rounded-md p-2' name="message" id="message" required/>
                    </div>
                    <div className='flex justify-center items-center m-2'>
                    <button type='submit' className='bg-lm-secondaryVariant dark:hover:bg-dm-secondary text-lm-onSecondary dark:bg-dm-overlay2 transition duration-500 ease-in-out dark:text-dm-secondary dark:hover:text-dm-onSecondary font-extrabold text-lg rounded-md p-1 px-2 mb-4 ring-2 ring-lm-secondaryVariant dark:ring-dm-secondary ring-offset-1 ring-offset-transparent hover:bg-lm-secondary'>
                        {lang==='eng'?'Send':'Enviar'}
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact