import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'
import zap from '../../public/zap.svg'
import byakuya from '../assets/byakuya.png'


const Hero = () => {
    return (
        <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
            <Element name='hero'>
                <div className='container '>
                    <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                        <div className='caption small-2 uppercase text-p3 '>Bleach Fan Made Website</div>
                        <h1 className='mb-6 h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 uppercase'>
                            thousand years blood war
                        </h1>
                        <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                            A fanmade site dedicated to Bleach Thousand Year Blood War that dives into the characters, epic battles, and the world of Soul Reapers.
                        </p>
                        <LinkScroll to='characters' offset={-100} spy smooth>
                            <Button icon={zap}>Explore</Button>
                        </LinkScroll>
                    </div>
                    <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none max-md:hidden hero-img-res'>
                        <img src={byakuya} alt="hero" className='size-1230 max-lg:h-auto' />
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Hero