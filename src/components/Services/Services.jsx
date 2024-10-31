import React from 'react'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import Card from './Card'

function Services() {
  return (
    <>
    <div className='flex flex-col mb-[30px] md:mx-[30px] lg:mt-[100px] mx-4'>
        <Card image={image1} direction="left" title="Web & Mobile App Development" text="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online." btnLabel="LEARN MORE"/>

        <Card image={image2} direction="right" title="Digital Strategy Consulting" text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business." btnLabel="LEARN MORE"/>
    </div>
    
    </>
  )
}

export default Services