import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

export default function about() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className=' w-full  bg-[#CDEA67] py-10'>
            <div className='w-full  border-b-[1px] border-zinc-400 '>
                <h1 className='text-[4vw] font-regular leading-none text-zinc-700 tracking-tight p-16'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='flex-col w-1/2 p-10'>
                    <h1 className='text-[4vw] font-regular leading-none text-zinc-700 tracking-tight'>Our approach:</h1>
                    <div className='flex items-center gap-2 text-zinc-200 uppercase mt-4'>
                        <div className='border-[2px] flex justify-center items-center px-4 border-zinc-600 p-1 rounded-full gap-5 bg-zinc-900 font-light tracking-tighter'>Read More
                            <div className='border-[2px] border-zinc-600 w-8 h-8 rounded-full font-light'>
                                <CgArrowTopRight size='1..2rem' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-1/2 py-10  rounded-lg overflow-hidden'>
              <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}