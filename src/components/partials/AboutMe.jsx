import React from 'react';
import { motion } from "framer-motion";
import iconHTML from '@icons/HTML.svg';
import iconCSS from '@icons/CSS.svg';
import iconSass from '@icons/Sass.svg';
import iconJavaScript from '@icons/JavaScript.svg';
import iconPHP from '@icons/PHP.svg';
import iconTailwindCSS from '@icons/TailwindCSS.svg';
import iconReact from '@icons/React.svg';
import iconVite from '@icons/Vite.svg';

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
      <div className='flex flex-col xl:flex-row xl:gap-6 justify-between h-full'>
        <motion.img 
          initial={{ x: -300, opacity: 0, display: "hidden"}} 
          whileInView={{ x: 0, opacity: 1, display: "block"}}
          transition={{ duration: 1 }}
          src="/src/assets/Photo Cool 2.jpg" 
          alt="Photo Tom Cardonnel" 
          className="w-full md:w-2/3 md:mx-auto xl:w-1/2 xl:m-0 h-fit bg-neutral-800 border-none rounded-xl overflow-hidden"
        />

        <div className='w-full xl:w-2/3 overflow-hidden'>
          <motion.h2 
            className='text-3xl'
            initial={{ y: -100, opacity: 0, visibility: "hidden" }} 
            whileInView={{ y: 0, opacity: 1, visibility: "visible" }}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus distinctio alias sit assumenda quod tempora architecto quibusdam corrupti eos dolor aut accusantium ullam, odio cum. Est asperiores odio accusamus?
            Voluptate, eveniet numquam dolorem sint nostrum tempore itaque eligendi at tenetur quidem laborum in repudiandae modi? Fugit minus beatae dolorum tempore consequuntur dolore. Impedit eum nihil aperiam corporis qui nesciunt.
            Repellat expedita cupiditate qui laboriosam repudiandae et, fugiat vero nemo iste cum? Alias quasi quae ipsa a velit officiis ad labore nulla praesentium totam ipsam, fuga cumque debitis reiciendis qui!
            Veniam perspiciatis tempore quod voluptates, harum labore cupiditate incidunt quam quo et fugit ipsa eligendi eum voluptatum. Eligendi et quod quas? Temporibus recusandae qui at aliquam debitis, dolores excepturi quis?
          </motion.p>

          <div className='my-6 h-1/2'>
            <h2 className='text-xl'>Mes langages :</h2>
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
              {[[iconHTML, "HTML"], [iconCSS, "CSS"], [iconTailwindCSS,"TailwindCSS"], [iconSass, "Sass"], [iconJavaScript, "JavaScript"], [iconReact, "React.js"], [iconVite, "Vite.js"], [iconPHP, "PHP"]]
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