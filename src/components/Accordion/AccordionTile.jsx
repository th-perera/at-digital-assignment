import React, { useState }  from 'react'
import Image from 'next/image';
import Plus from './images/plus.svg'
import Minus from './images/minus.svg'

function AccordionTile({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    
  return (
    <div className={`bg-[#FAF8FF] mb-5 rounded-[7px] p-[24px] relative`}>
         {/* Title Section */}
         <div className='flex mb-[20px]'>
            <p className={`text-[20px] md:text-[22px] font-medium ${isOpen ? "text-[#6B3CC9]" : "text-[#111]"} w-full mr-[50px] leading-[28px]`}>{title}</p>
            
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center focus:outline-none absolute top-8 right-5"
            >
                {/* Toggle Icon */}
                <Image
                src={isOpen ? Minus : Plus}
                alt={isOpen ? 'Close' : 'Open'}
                className="w-[14px] h-[14px] cursor-pointer"
                onClick={toggleAccordion}
                />
            </button>
         </div>

         {/* Content Section */}
         <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
               isOpen ? 'max-h-40' : 'max-h-0'
            }`}
         >
            <div className="text-[#6F6C90] text-[16px] md:text-[18px] leading-[30px]">
               {content}
            </div>
         </div>
      </div>
  )
}

export default AccordionTile