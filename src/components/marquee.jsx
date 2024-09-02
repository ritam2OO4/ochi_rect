import { motion } from 'framer-motion';
import React from 'react';

export default function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className='w-full bg-[#004D43] py-24 rounded-tl-[25px] rounded-tr-[25px]'
    >
      <div className='border-t-[1px] border-b-[1px] border-zinc-300 whitespace-nowrap flex overflow-hidden items-center'>
        <div className='flex'>
          <motion.div
            className='flex' // Duration is back to 10
          >
            <motion.h1 initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ ease: 'linear', repeat: Infinity, duration: 15 }} className='font-semibold text-[18vw] tracking-tighter -my-[5vw] pr-10'>
              WE ARE OCHI
            </motion.h1 >
            <motion.h1 initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ ease: 'linear', repeat: Infinity, duration: 15 }} className='font-semibold text-[18vw] tracking-tighter -my-[5vw] pr-10'>
              WE ARE OCHI
            </motion.h1 >
          </motion.div>
        </div>
      </div>
    </div>
  );
}
