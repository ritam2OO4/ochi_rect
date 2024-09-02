import { motion } from 'framer-motion';
import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
export default function LandingPage() {
    return (

        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-16'>
            <div className="textstructure mt-20 md:mt-44 px-6 md:px-20">
                <div className="masker">
                    {['we create', 'eye-opening', 'presentations'].map((item, index) => (
                        <div key={index} className="mb-8">
                            {index === 1 ? (
                                <div className="img flex flex-col md:flex-row items-center gap-2">
                                    <motion.div className=' md:w-28 md:h-20 rounded' initial={{ width: 0 }} animate={{ width: 100 }} transition={{ ease: [0.56, 0, 0.24, 1], duration: 1 }}>
                                        <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className='w-20 h-14 md:w-28 md:h-20 rounded' alt="" />
                                    </motion.div>
                                    <h1 className='uppercase text-4xl md:text-8xl leading-tight md:leading-[3vw] tracking-tighter font-semibold text-center md:text-left'>
                                        {item}
                                    </h1>
                                </div>
                            ) : (
                                <h1 className='uppercase text-4xl md:text-8xl leading-tight md:leading-[3vw] tracking-tighter font-semibold text-center md:text-left'>
                                    {item}
                                </h1>
                            )}
                        </div>
                    ))}
                    <div className='border-t-[1px] border-zinc-400 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pt-8'>
                        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                            <p key={index} className='font-light capitalize text-xs md:text-sm text-zinc-300 text-center md:text-left'>
                                {item}
                            </p>
                        ))}
                        <div className='flex justify-center items-center gap-2 text-zinc-300 uppercase'>
                            <div className='border-[2px] border-zinc-600 p-1 rounded-full font-light'>Start The Project</div>
                            <div className='border-[2px] border-zinc-600 w-8 h-8 rounded-full font-light'>
                                <CgArrowTopRight size='1..2rem' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}