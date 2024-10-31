import React, { useState } from "react";
import Link from "next/link";
import Logo from './images/Logo.png'
import Image from 'next/image';
import Close from "./images/close.svg"
import Menu from "./images/Hamburger.svg"

function Navbar() {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='sticky top-0 left-0 w-full z-[999] bg-[#6B3CC9]'>
        <div className="mx-auto relative py-[16px] md:py-0 px-[20px] md:flex justify-between items-center md:pt-0">
            <div className="flex items-center justify-between">
                <div className="max-w-[225px] md:max-w-[155px] cursor-pointer max-h-[36px]">
                    <Link href="/" className="block" title={"AT Digital Logo"}>
                    <Image
                        src={Logo}
                        alt="AT Digital Logo"
                        className={
                        "max-w-[220px] md:max-w-[192px] cursor-pointer"
                        }
                    />
                    </Link>
                </div>
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => {
                    setToggle(!toggle);
                    }}
                >
                    {toggle ? (
                        <Image 
                            src={Close}
                            alt="close"
                            className="max-w-[20px]"
                            />
                        ) : (
                            <Image 
                            src={Menu}
                            alt="menu"
                            className="max-w-[20px]"
                    />
                    )}
                </div>
            </div>
            <div
            className={`absolute ${toggle ? "z-100" : "z-[-999]"} ${toggle ? "max-w-[1320px]" : "max-w-0"
            } md:max-w-[1320px] transition-all linear duration-300 w-full top-full right-0 md:static md:top-auto md:right-auto md:w-auto md:z-100 overflow-scroll md:overflow-visible`}
            >
                <div
                    className={`md:flex px-[20px] pb-[80px] md:pb-[0px] h-[80px] md:h-[80px] min-h-[100vh] md:px-[0px] justify-between md:justify-end items-center md:min-h-[auto] 
                        ${toggle ? "translate-x-0" : "translate-x-full"} ${
                            toggle ? "bg-[#fff]" : "bg-[#6B3CC9]"
                          }  md:translate-x-0 transition-all linear duration-300 pt-[34px] md:pt-0 overflow-scroll md:overflow-visible`}
                >
                    <ul className={`md:flex justify-between items-center `}>
                        <li className={`md:mb-0 md:mr-[38px] max-w-[750px] ${toggle? "mb-[32px]" : "mb-[0px]"}  ${toggle? "text-black" : "text-white"}`}><a href="#">HOME</a></li>
                        <li className={`md:mb-0 md:mr-[38px] max-w-[750px] ${toggle? "mb-[32px]" : "mb-[0px]"}  ${toggle? "text-black" : "text-white"}`}><a href="#">SERVICES</a></li>
                        <li className={`md:mb-0 md:mr-[38px] max-w-[750px] ${toggle? "mb-[32px]" : "mb-[0px]"}  ${toggle? "text-black" : "text-white"}`}><a href="#">ABOUT US</a></li>
                        <li className={`md:mb-0 md:mr-[38px] max-w-[750px] ${toggle? "mb-[32px]" : "mb-[0px]"}  ${toggle? "text-black" : "text-white"}`}><a href="#">CONTACT US</a></li> 
                        <li className={`md:mb-0 md:mr-[38px] max-w-[750px] ${toggle? "mb-[32px]" : "mb-[0px]"}  ${toggle? "text-black" : "text-white"}`}><a href="#">CAREERS</a></li> 
                    </ul>
                </div>
            </div>

        </div>
     
    </nav>
  )
}

export default Navbar