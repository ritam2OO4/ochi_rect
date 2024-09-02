import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

export default function Feature() {
  const cards = [useAnimation(), useAnimation()];
  const cardcontainer = [useAnimation(), useAnimation()];

  // State to track the hovered card
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleHover = (index) => {
    setActiveCardIndex(index); // Set the active card index

    cardcontainer[index].start({
      scale: .94, // Scale up on hover
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.7,
      }
    });
    cards[index].start({
      y: "0%",
      opacity: 1,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.7,
      }
    });
  };

  const handleHoverEnd = (index) => {
    setActiveCardIndex(null); // Reset active card index

    cardcontainer.forEach((animation) => {
      animation.start({
        scale: 1, // Scale back to original size
      });
    });
    cards.forEach((animation) => {
      animation.start({
        y: "100%",
        opacity: 0,
        transition: {
          ease: [0.22, 1, 0.36, 1],
          duration: 0.7,
        }
      });
    });
  };

  return (
    <div className='w-full py-10'>
      <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl tracking-tighter'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-4 mt-10 overflow-hidden py-10'>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            animate={cardcontainer[0]}
            className={`relative cardcontainer w-1/2 h-[35vw] rounded-lg ${activeCardIndex === 0 ? 'z-[10]' : 'z-[1]'}`}>
            <h1 className='flex card absolute text-8xl text-[#CDEA67] font-regular tracking-tighter top-1/2 left-[85%] -translate-y-[50%] z-[99] pointer-events-none'>
              {'FYDE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  className='inline-block font-bold pointer-events-none'
                  animate={cards[0]}
                  initial={{ y: "100%", opacity: 0 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            animate={cardcontainer[1]}
            className={`relative cardcontainer w-1/2 h-[35vw] rounded-lg border-[1px] border-zinc-700 ${activeCardIndex === 1 ? 'z-[10]' : 'z-[1]'}`}>
            <h1 className='flex card absolute text-8xl text-[#CDEA67] font-regular tracking-tighter top-1/2 right-[90%] -translate-y-[50%] z-[99] pointer-events-none'>
              {'VISE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  className='inline-block font-bold pointer-events-none'
                  animate={cards[1]}
                  initial={{ y: "100%", opacity: 0 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
