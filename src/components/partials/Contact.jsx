import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function AboutMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kvmh6fa', 'template_ep53g59', form.current, {
        publicKey: 'hTemM5HEZ7wQqTOzN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    // <div className='w-2/3 h-[80vh] m-auto text-white'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 items-center text-white w-2/3 m-auto mb-12' id='contact'>
      <motion.h2 
        className='mb-12 text-3xl'
        initial={{ y: -100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >Me contacter:</motion.h2>
        <motion.div 
          className='relative w-1/3'
          initial={{ x: -500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Name</label>
          <input type="text" name="name" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full' required />
        </motion.div>
        <motion.div 
          className='relative w-1/3'
          initial={{ x: 500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Email</label>
          <input type="text" name="email" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full' required />
        </motion.div>
        <motion.div 
          className='relative w-1/3'
          initial={{ x: -500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Title</label>
          <input type="text" name="title" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full' required />
        </motion.div>
        <motion.div 
          className='relative w-1/3'
          initial={{ x: 500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Message</label>
          <textarea name="message" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none h-42 w-full' required />
        </motion.div>
        <motion.input 
          type="submit" 
          value="Send" 
          className='w-1/3 border-neutral-200 border-2 rounded-lg px-3 py-3'
          initial={{ x: -500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }} 
        />
      </form>
    // </div>
  )
}