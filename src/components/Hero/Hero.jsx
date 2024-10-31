import React from 'react'
import Image from 'next/image';
import HeroBg from './images/HeroBg.png'
import Button from '../Button/Button';

function Hero() {
  return (
    <div className='mb-[50px] flex flex-col lg:relative'>
        <div className=''>
            <Image
                src={HeroBg} 
                alt='Hero Background'
                className='aspect-auto w-full'
            />
        </div>
        <div className='bg-gradient-to-r from-emerald-400 to-cyan-500 p-8 text-white lg:absolute lg:bottom-[30px] lg:left-[50px] lg:max-w-[622px]'>
            <div className='mb-[16px]'>
                <h2 className='font-bold text-[48px] leading-[48px] capitalize '>We crush your competitors, goals, and sales records - without the B.S.</h2>
            </div>
            <div>
                <Button label="Get free consultation"/>
            </div>
        </div>


    </div>
  )
}

export default Hero