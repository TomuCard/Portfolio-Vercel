import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';
import TextAnimation from '@partials/TextAnimation.jsx';
import { motion } from "framer-motion"
import AboutMe from "@partials/AboutMe.jsx";
import Projets from "@partials/Projets.jsx";
import Contact from '@partials/Contact.jsx';

export default function App() 
{
  return (
    <>
      <Header />
      <TextAnimation />
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen w-screen flex flex-col items-center justify-center z-10'
      >
        <h1 className="text-neutral-300 text-[10vw] font-h1 font-bold select-none">TOM CARDONNEL</h1>
        <h2 className='text-neutral-300 text-[2vw] font-h1 select-none scroll-smooth'>Recherche d'une alternance en <span className='font-bold'>Développement Web</span></h2>
      </motion.div>
      <hr className='mb-50 text-transparent' />
      <AboutMe />
      <Projets />
      <Contact />
    </>
  )
}