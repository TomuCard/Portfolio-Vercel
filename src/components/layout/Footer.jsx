import React from 'react';
import iconGithub from '@icons/github.svg';
import iconLinkedin from '@icons/linkedin.svg';

export default function Footer() {
  return (
    <footer className='w-full h-16 bg-neutral-800 flex items-center justify-around px-3'>
      <h1 className='text-neutral-600 h-fit w-fit'>© Tous droits réservés - tomu.cardonnel@gmail.com</h1>
      <div className='flex gap-4'>
        <a href="https://github.com/TomuCard" target='_blank'>
          <img src={iconGithub} alt="icon Github" className='w-8' />  
        </a>
        <a href="https://www.linkedin.com/in/tom-cardonnel/" target='_blank'>
          <img src={iconLinkedin} alt="icon Linkdin" className='w-8' />
        </a>
      </div>
    </footer>
  )
}