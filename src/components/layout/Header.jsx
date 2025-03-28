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
          h-[5vh] p-3 bg-neutral-800 flex justify-between
          transition-[width,border-radius] duration-300 z-10
          ${isScrolled 
            ? 'fixed top-6 rounded-xl w-2/3 xl:w-1/3 left-1/2 -translate-x-1/2 pl-6' 
            : 'relative w-screen px-12 xl:px-24'
          }
        `}
      >
        <div className='relative flex items-center justify-between w-full'>
          <div className='flex gap-[15%] sm:gap-6 w-full mr-3'>
          <a href='#' className='cursor-pointer'><img src={iconHome} className='w-6' /></a>
          <a href='#about' className='cursor-pointer'><img src={iconAbout} className='w-6' /></a>
          <a href='#projets' className='cursor-pointer'><img src={iconProjets} className='w-6' /></a>
          <a href='#contact' className='cursor-pointer'><img src={iconContact} className='w-6' /></a>
          </div>
          <a className={`dark:text-white border-2 p-1 whitespace-nowrap rounded-full cursor-pointer w-fit
            ${isScrolled
              ? 'px-3 text-sm xl:text-base xl:px-8'
              : 'px-8'
            }
            `} href={"#"}>Mon CV</a>
        </div>
      </header>
    </div>
  )
} 