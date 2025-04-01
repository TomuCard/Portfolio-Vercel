import React from 'react';
import { motion } from "framer-motion";
// import iconHTML from '@icons/HTML.svg';
// import iconCSS from '@icons/CSS.svg';
// import iconSass from '@icons/Sass.svg';
import iconNext from '@icons/Next.svg';
import iconNode from '@icons/Node.svg';
import iconPython from '@icons/Python.svg';
import iconJavaScript from '@icons/JavaScript.svg';
import iconPHP from '@icons/PHP.svg';
import iconTailwindCSS from '@icons/TailwindCSS.svg';
import iconReact from '@icons/React.svg';
import iconVite from '@icons/Vite.svg';
import myPicture from '@assets/pictureTom.jpg';

function Language({ language }) {
  // console.log(language)
  return (
    <motion.div
      className='flex flex-col justify-center items-center w-1/4 hover:scale-110'
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.3 }}
    >
      <img src={language[0]} alt={`Logo ${language[1]}`} className='w-18 h-fit mb-3' />
      <p>{language[1]}</p>
    </motion.div>
  )
}

export default function AboutMe() {
  return (
    <div className='w-full lg:w-2/3 xl:w-3/4 m-auto text-white px-6 py-24 md:py-28 overflow-hidden' id='about'>
      <div className='flex flex-col xl:flex-row xl:gap-12 justify-between h-full'>
        <motion.img 
          initial={{ x: -300, opacity: 0, display: "hidden"}} 
          whileInView={{ x: 0, opacity: 1, display: "block"}}
          transition={{ duration: 1 }}
          src={myPicture}
          alt="Photo Tom Cardonnel" 
          className="w-full md:w-2/3 md:mx-auto xl:w-1/3 xl:m-0 h-fit bg-neutral-800 border-none rounded-xl overflow-hidden"
        />

        <div className='w-full xl:w-2/3'>
          <motion.h2 
            className='text-3xl mt-12 mb-6' 
            initial={{ y: -100, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            À Propos de moi:
          </motion.h2>

          <motion.p
            initial={{ x: 300, opacity: 0, visibility: "hidden" }} 
            whileInView={{ x: 0, opacity: 1, visibility: "visible"}}
            transition={{ duration: 0.5 }}
            className='overflow-hidden md:w-full'
          >
            Je m'appelle <span className='font-bold'>Tom Cardonnel</span>, j'ai 21 ans et je suis actuellement en formation à <span className='font-bold'>Epitech</span>. Passionné par l'informatique sous toutes ses formes, j'aime autant comprendre le fonctionnement du <span className='font-bold'>hardware</span> que suivre les dernières avancées en <span className='font-bold'>software</span> et en intelligence artificielle. <span className='font-bold'>Autodidacte et passionné</span>, j’aime explorer de nouvelles technologies et relever des défis techniques, surtout lorsque ceux-ci me poussent à sortir de ma zone de confort.<br /><br />
            Toujours motivé par l’apprentissage, je prends plaisir à concevoir des solutions créatives et efficaces. Ce portfolio regroupe mes réalisations et témoigne de mon engagement dans le développement web.
          </motion.p>

          <div className='my-6 h-1/2'>
            <motion.h2 
              initial={{ y: -100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }}
              className='text-xl'
            >
              Mes langages :
            </motion.h2>
            <motion.div 
              id='languages'
              className='flex mt-6 flex-wrap col-4 gap-y-6'
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {/* {[[iconHTML, "HTML"], [iconCSS, "CSS"], [iconTailwindCSS,"TailwindCSS"], [iconSass, "Sass"], [iconJavaScript, "JavaScript"], [iconReact, "React.js"], [iconVite, "Vite.js"], [iconPHP, "PHP"]] */}
              {[[iconJavaScript, "JavaScript"], [iconReact, "React.js"], [iconTailwindCSS, "TailwindCSS"], [iconVite, "Vite.js"], [iconNext, 'Next.js'], [iconPHP, "PHP"], [iconNode, "Node.js"], [iconPython, "Python"]]
              .map((language, index) => (
                <Language key={index} language={language} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}