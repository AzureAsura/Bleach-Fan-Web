import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { div, h3 } from 'framer-motion/client'

const ExploreCard = ({ id, imgUrl, skill, title, index, active, handleClick }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2] '}
        flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-700 ease-out cursor-pointer
    `} onClick={() => handleClick(id)}
    >
        <img
            src={imgUrl}
            alt="Character"
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
            <h3 className='font-semibold sm:text-[30px] text-[18px] text-white absolute z-0 
               lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] 
               break-words text-start max-w-[150px]'>{title}</h3>
        ) : (
            <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] '>
                <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>{skill}</p>
                <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>{title}</h2>
            </div>
        )}
    </motion.div>

)

export default ExploreCard