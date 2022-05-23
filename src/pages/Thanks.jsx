import React from 'react'
import {useNavigate} from 'react-router-dom';

function Thanks() {
  const aux = localStorage.getItem('theme');
  if(aux==='dark'){
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark')
  }
  const navigate = useNavigate()

  function goHome(){
    navigate('/')
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <p className='text-lm-onBackground dark:text-dm-onBackground text-xl xl:text-4xl font-extrabold mt-20'>Thank you for connecting with me!</p>
      </div>
      <div className='m-20'>
      <button className='bg-lm-primary dark:bg-dm-primaryVariant text-lm-onPrimary dark:text-dm-onBackground font-bold p-2 rounded-md border-2 border-lm-primaryVariant dark:border-dm-primary hover:bg-lm-primaryVariant dark:hover:bg-dm-primary dark:hover:text-dm-onPrimary' onClick={goHome}>Go To Home</button>
      </div>
    </div>
  )
}

export default Thanks