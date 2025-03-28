import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

export default function AboutMe() {
  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
    console.log(recaptchaToken);
    
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Veuillez compléter le reCAPTCHA avant d'envoyer le message.");
      return;
    }

    emailjs
      .sendForm('service_kvmh6fa', 'template_ep53g59', form.current, {
        publicKey: 'hTemM5HEZ7wQqTOzN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setRecaptchaToken(null);
          location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 items-center text-white w-2/3 m-auto mb-12 mt-24 overflow-hidden' id='contact'>
    <motion.h2 
      className='mb-12 text-3xl'
      initial={{ y: -100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >Me contacter:</motion.h2>
      <motion.div 
        className='relative w-full lg:w-2/3'
        initial={{ x: -200, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Name</label>
        <input type="text" name="name" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full overflow-hidden' required />
      </motion.div>
      <motion.div 
        className='relative w-full lg:w-2/3'
        initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Email</label>
        <input type="text" name="email" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full overflow-hidden' required />
      </motion.div>
      <motion.div 
        className='relative w-full lg:w-2/3'
        initial={{ x: -200, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Title</label>
        <input type="text" name="title" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none w-full overflow-hidden' required />
      </motion.div>
      <motion.div 
        className='relative w-full lg:w-2/3'
        initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label className='absolute -top-3 left-3 px-3 bg-neutral-900'>Message</label>
        <textarea name="message" className='border-neutral-400 focus:border-neutral-200 border-2 rounded-lg px-3 py-3 focus:outline-none h-42 w-full overflow-hidden' required />
      </motion.div>
      <motion.div 
        initial={{ x: -200, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ReCAPTCHA 
          sitekey="6Lc1AwIrAAAAAJyTwRTtS2RfYdNdfp--Egp4NMqj" 
          onChange={handleRecaptcha}
          className=''
        />
      </motion.div>
      <motion.input 
        type="submit" 
        value="Send" 
        className='w-2/3 border-neutral-200 border-2 rounded-lg px-3 py-3 cursor-pointer'
        initial={{ y: 50, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
      />
    </form>
  )
}