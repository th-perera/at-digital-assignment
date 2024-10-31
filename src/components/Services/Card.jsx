import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'

import { Poppins } from 'next/font/google';

function Card({image, title, text, btnLabel, direction}) {
  return (
    <div className={`mb-[10px] md:mb-[90px] flex flex-col ${direction == "left" ? "md:flex-row" : "md:flex-row-reverse"} lg:max-w-[1200px] lg:mx-auto lg:items-center`}>

        <div className='max-w-[275px] mx-auto object-cover lg:max-w-[300px] lg:mr-[30px]'>
            <Image 
                src={image}
                alt='image'
            />
        </div>

        <div className='text-center md:text-left lg:max-w-[530px]'>
            <div className='mb-[20px] mx-auto md:mx-0'>
                <h3 className={`font-bold text-[27px] text-[#6B3CC9]`}>{title}</h3>
            </div>
            <div className='mb-[30px]'>
                <p className='text-[16px]'>{text}</p>
            </div>
            <div>
                <Button label={btnLabel}/>
            </div>
        </div>


    </div>
  )
}

export default Card