import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import screenRealty from '@screen/Realty.png';
import screenMangalaxy from '@screen/Mangalaxy.png';
import screen1Twitter2Plus from '@screen/1Twitter2Plus.png';
import screenConnectify from '@screen/Connectify.png';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="flex items-center justify-start h-screen relative overflow-hidden xl:w-2/3 xl:mx-auto" >
      <div ref={ref} className="w-1/3 h-fit bg-neutral-200 overflow-hidden rounded-lg ml-6 xl:mx-auto">
        <img
          src={props[3]}
          alt={`${props[0]} screen Projet`}
          className="w-full h-full"
        />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className={`${props[2]} text-2xl md:text-4xl font-bold absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 xl:left-1/7`}
      >{`#[${props[0]}]`}</motion.h2>
      <motion.h3
        initial={{ x: 100, opacity: 0, visibility: "hidden" }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        animate={{ visibility: "visible" }}
        className={`${props[2]} text-xl md:text-2xl font-bold absolute top-[60%] md:top-[30%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 xl:left-4/5`}
      >{`#[Description]:`}</motion.h3>
      <motion.p
        initial={{ x: 100, opacity: 0, visibility: "hidden" }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        animate={{ visibility: "visible" }}
        className="text-neutral-200 text-base absolute top-[85%] md:top-1/2 md:w-3/5 left-1/2 md:left-2/3 w-full px-6 transform -translate-x-1/2 -translate-y-1/2 xl:left-6/7 xl:h-auto xl:w-1/3"
      >{`${props[1]}`}</motion.p>
    </section>
  );
}

export default function Parallax() {
  const projets = [
    ['Realty', "Realty est un site web que j’ai développé pour une entreprise spécialisée dans la location d’appartements de luxe à Paris. Le site propose une double interface : une vue dédiée aux utilisateurs, pour consulter et réserver des appartements haut de gamme, ainsi qu’une vue réservée aux gérants, pour gérer les biens et les réservations. Des services de conciergerie et prestations de luxe sont également proposés aux clients pour une expérience premium. J’ai travaillé sur ce projet en tant que développeur fullstack, en prenant en charge à la fois la partie frontend et backend.", 'text-[#ffd800]', screenRealty], 
    ['Mangalaxy', "Mangalaxy est un site web que j’ai réalisé dans le cadre d’un projet. Il permet aux utilisateurs d’acheter des mangas, qu’ils soient neufs ou d’occasion. J’ai également ajouté des fonctionnalités permettant aux utilisateurs de laisser des commentaires et des notes sur les mangas, ce qui enrichit l’expérience d'achat et aide les autres à faire leur choix. J’ai travaillé sur ce projet en tant que développeur frontend, en m’assurant que l'interface soit fluide et intuitive, tout en mettant en valeur les différentes collections disponibles sur le site.", "text-[#ff4747]", screenMangalaxy], 
    ['1Twitter2Plus', '1Twitter2Plus est un réseau social que j’ai développé en fullstack. Les utilisateurs peuvent publier des messages, suivre d’autres membres et interagir avec leurs posts. J’ai également intégré une intelligence artificielle qui répond à toutes leurs questions, ce qui apporte une dimension originale et interactive à la plateforme. Ce projet m’a permis de travailler sur l’ensemble de la stack, aussi bien côté frontend que backend, et d’explorer l’intégration d’une IA au service des utilisateurs.', 'text-[#1d9bf0]', screen1Twitter2Plus], 
    ['Connectify', 'Connectify est un réseau social que j’ai développé, pensé pour les étudiants d’un même établissement. L’objectif est de faciliter les échanges entre eux, que ce soit pour discuter, partager des infos ou élargir leur réseau. J’ai travaillé sur ce projet en tant que fullstack, en mettant en place des fonctionnalités comme la recherche d’utilisateurs par promo, ce qui permet de retrouver facilement ses camarades ou de faire de nouvelles rencontres au sein de l’école. Ce projet m’a permis de renforcer mes compétences en développement web et en gestion de bases de données.', 'text-[#3e7a0c]', screenConnectify]
  ]
  return (
    <>
      <h2 className='text-3xl text-white m-auto w-fit'>Mes Projets:</h2>
      <div id="projets" className="overflow-hidden">
        {projets.map((array, index) => (
          <Image key={index} props={array} />
        ))}
      </div>
    </>
  );
}
