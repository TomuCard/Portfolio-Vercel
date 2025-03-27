import React, { useState, useEffect } from 'react';
import iconHome from '@assets/icons/home.svg'
import iconAbout from '@assets/icons/person.svg'
import iconProjets from '@assets/icons/files.svg'
import iconContact from '@assets/icons/mail.svg'
// import CV from '@assets/cv.pdf'

export default function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <header className={`
          h-[5vh] bg-neutral-800 p-3 flex justify-between
          transition-[width,border-radius] duration-300 z-10
          ${isScrolled 
            ? 'fixed top-6 rounded-xl w-1/4 left-1/2 -translate-x-1/2 px-6' 
            : 'relative w-screen px-24'
          }
        `}
      >
        <div className='relative flex items-center justify-between w-full'>
          <div className='flex gap-3'>
          <a href='#' className='cursor-pointer'><img src={iconHome}  /></a>
          <a href='#about' className='cursor-pointer'><img src={iconAbout}  /></a>
          <a href='#projets' className='cursor-pointer'><img src={iconProjets}  /></a>
          <a href='#contact' className='cursor-pointer'><img src={iconContact}  /></a>
          </div>
          <a className='text-white border-2 px-8 p-1 rounded-full cursor-pointer' href={"#"}>Mon CV</a>
        </div>
      </header>
    </div>
  )
} 