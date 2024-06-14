import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Wish = () => {
  const [name, setName] = useState();
  useEffect(() => {
    axios.get(`https://birthdaybackend.onrender.com/api/get/data`)
      .then((response) => {
        setName(response.data.userName);
        console.log(response)
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, []);
    const divstyle = {
        backgroundImage:`url(https://wallpapercave.com/wp/wp2714836.jpg)`,
        backgroundPosition: 'center',
    }
    
  return (
    <div style={divstyle} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-4"
      >
        Happy Birthday, {name}!
      </motion.h1>
      <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src="https://media.tenor.com/i3cV9rg-cB4AAAAi/happy-birthday-cake.gif" 
        alt="Birthday Cake Animation" 
        className="w-64" 
      />
      <div>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-center"
      >
        Wishing you a  
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className=" text-lg text-center"
      >
        fantastic day
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className=" text-lg text-center"
      >
        filled with 
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className=" text-lg text-center"
      >
         joy and laughter!
      </motion.p>
      </div>
    </div>
  );
};

export default Wish;