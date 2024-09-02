import { motion, useAnimation } from 'framer-motion'
import React from 'react'

export default function Card() {
    const card = [useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (index) => {
        card[index].start({
            scale: 0.96,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
            }
        })
    }

    const handleHoverEnd = (index) => {
        card[index].start({
            scale: 1,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
            }
        })
    }

    return (
        <div className='w-full flex gap-10 p-20 pb-0' data-scroll data-scroll-section data-scroll-speed='-.3'>
            <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                animate={card[0]}
                className='relative w-1/2 bg-[#004D43] h-[45vh] rounded-lg'>
                <img className='absolute bg-cover top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <h1 className='absolute bottom-8 left-6 text-sm font-light text-[#C9E767] border-[1px] border-[#C9E767] py-1 px-2 rounded-full'>&copy; 2024-2026</h1>
            </motion.div>

            <div className='relative w-1/2 h-[45vh] rounded-lg flex gap-10'>
                <motion.div
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    animate={card[1]}
                    className='relative w-1/2 h-[100%] bg-zinc-800 rounded-lg'>
                    <img className='absolute bg-cover top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <h1 className='absolute bottom-8 left-6 text-xs font-light tracking-tighter  text-zinc-100 border-[1px] border-zinc-200 py-1 px-2 rounded-full'>RATING 5.0 ON CLUTCH</h1>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    animate={card[2]}
                    className='relative w-1/2 h-[100%] bg-zinc-800 rounded-lg'>
                    <img className='absolute w-1/3 h-3/7 bg-cover top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <h1 className='absolute bottom-8 left-6 text-xs font-light tracking-tighter  text-zinc-100 border-[1px] border-zinc-200 py-1 px-2 rounded-full'>BUSINESS BOOTCAMP ON ALUMNI</h1>
                </motion.div>
            </div>
        </div>
    )
}
