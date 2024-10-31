import React from 'react'
import Logo from './images/Logo.png'
import Image from 'next/image';

import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function Footer() {
  return (
    <footer className='w-full bg-[#6B3CC9] px-[40px] pt-[40px] text-[14px] text-white'>
        <div>
            {/*  */}
            <div className='flex flex-col gap-5 lg:flex-row mb-10'>
                <div className='mb-5'>
                    <div className="max-w-[268px] mb-[20px]">
                        <Image
                            src={Logo}
                            alt="AT Digital Logo"
                            className={
                            "max-w-[255px] xl:max-w-[255px] relative max-h-[36px]"
                            }
                        />
                    </div>
                    <div className="mb-[12px] md:max-w-[475px]">
                        <p className={`${lato.className} text-[16px] leading-[19px]`}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:flex-row lg:max-w-[700px] lg:mx-auto'>
                    <div className='md:mr-[130px]'>
                        <h4 className='font-bold mb-2 text-xl'>Our Technologies</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#">ReactJS</a></li>
                            <li><a href="#">Gatsby</a></li>
                            <li><a href="#">NextJS</a></li>
                            <li><a href="#">NodeJS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-2 text-xl'>Our Services</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#">Social media Marketing</a></li>
                            <li><a href="#">Web & Mobile App Development</a></li>
                            <li><a href="#">Data & Analytics</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            {/*  */}
            <div className='border-t-2 p-4 max-w-[630px] mx-auto'>
                <div className='flex items-center justify-center gap-[16px]'>
                    <a href="#" className=''>Privacy Policy</a>
                    <span> | </span>
                    <a href="#" className=''>Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer