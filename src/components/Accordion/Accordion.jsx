"use client"
import React from 'react'
import AccordionTile from './AccordionTile'

function Accordion() {

    const accordionData = [
        { title: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
        { title: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
        { title: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?', content: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
     ];

  return (

        <div className="mx-4 mb-[60px]">
            <div className='mb-[30px]'>
                <h3 className={`font-bold text-[#6B3CC9] max-w-[334px] mx-auto text-[27px] md:max-w-full text-center`}>Frequently asked questions</h3>
            </div>
            <div className='md:px-8 lg:max-w-[896px] lg:mx-auto'>
                {accordionData.map((item, index) => (
                    <AccordionTile key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>

  )
}

export default Accordion