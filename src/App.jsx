import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';
import TextAnimation from '@partials/TextAnimation.jsx';
import { motion } from "framer-motion";
import AboutMe from "@partials/AboutMe.jsx";
import Projets from "@partials/Projets.jsx";
import Contact from '@partials/Contact.jsx';

export default function App() 
{
  return (
    <>
      <Header />
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-[50vh] w-screen flex flex-col items-center justify-center z-10 overflow-hidden mt-42'
      >
        <h1 className="text-neutral-300 text-[15vw] md:text-[10vw] text-center font-h1 font-bold select-none">TOM CARDONNEL</h1>
        <h2 className='text-neutral-300 text-[3vw] md:text-[2vw] font-h1 select-none scroll-smooth'>Recherche d'une alternance en <span className='font-bold'>Développement Web</span></h2>
      </motion.div>
      <hr className='mb-42 md:mb-50 text-transparent' />
      <TextAnimation />
      <AboutMe />
      <Projets />
      <Contact />
      <Footer />
    </>
  )
}