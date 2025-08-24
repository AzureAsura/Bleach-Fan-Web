import React from 'react'
import { staggerContainer } from '../utils/motion'
import { characterCards } from '../constants/index.jsx'
import ExploreCard from "../components/ExploreCard";
import { TitleText, TypingText } from "../components/CustomTexts";
import { section } from 'framer-motion/client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Element } from 'react-scroll'


const Characters = () => {
  const [active, setActive] = useState('char-2')
  
  return (
    <section className='custom-paddings container' id='explore'>
      <Element name='Characters'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className="inner-width mx-auto flex flex-col"
        >
          {/* <TypingText title='Characters'
            textStyles='text-center' /> */}
          <TitleText title={<>CHARACTERS</>} textStyles='text-center' />
          <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
            {characterCards.map((char, index) => (
              <ExploreCard
                key={char.id}
                {...char}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </Element>

    </section>
  )
}

export default Characters