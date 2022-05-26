import React from 'react'
import {useNavigate} from 'react-router-dom';
import cv from '../../Files/CV-ClaudiaNeme.pdf'

function WhyMe() {
  const navigate = useNavigate()
  function goContact() {
    navigate('/contact')
  }
  return (
    <div className='text-lm-onBackground dark:text-dm-onBackground flex flex-col items-center justify-center mb-12'>
      <div className='flex justify-center bg-inherit'>
        <p className='my-10 text-lm-onBackground dark:text-dm-onBackground dark:font-normal font-extrabold text-lg xl:text-xl w-4/5'>
        I'm a hardworking Web Developer and Biomedical Engineer adept in all stages of web development. 
        I'm passionate about solvig problems and learning new technologies. Also, I'm an open source advocate.
        I am a proactive person, with a good disposition, respectful and, above all, eager to work as a team. 
        </p>
      </div>
        <div>
          <button onClick={goContact} className='bg-lm-primary dark:bg-dm-primary hover:bg-lm-primaryVariant dark:hover:bg-dm-primaryVariant text-lm-onPrimary dark:text-dm-onPrimary font-bold rounded-md ring-4 ring-lm-primaryVariant p-2 m-4'>
            Contact Me
          </button>
          <button className='bg-lm-primary dark:bg-dm-primary hover:bg-lm-primaryVariant dark:hover:bg-dm-primaryVariant text-lm-onPrimary dark:text-dm-onPrimary font-bold rounded-md ring-4 ring-lm-primaryVariant p-2 m-4'>
            <a href={cv} download>Download CV</a>
            
          </button>
        </div>
    </div>
  )
}

export default WhyMe