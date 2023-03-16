import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const Journey = () => {
  return (
      <div className='bg-primary h-full md:h-96 relative'>
        <img className='h-96' src="https://i.ibb.co/KWbwC3G/Group-584-1.png" alt="" />
        <div className="container mx-auto">
              <div className='absolute top-5 md:top-20 p-5 md:p-0'>
                <div className="grid md:grid-cols-2 gap-5 h-full md:h-60 md:content-center">
                    <h2 className='text-5xl leading-11 text-base-100 font-semibold'>Start Your Journey <br />With Us Now</h2>
                    <div className='space-y-5'>
                      <p className='text-base-100 lg:w-[700px] text-xs md:text-lg'>Starting your journey with us means partnering with a team of dedicated marketing professionals who are passionate about delivering exceptional results. We take a personalized approach to every client, taking the time to understand your unique needs, challenges, and goals. Our collaborative process ensures that we develop a tailored marketing strategy that aligns with your business objectives and resonates with your target audience.</p>
                      <p className='text-base-100 font-bold flex items-center gap-2 underline'>Learn More <FaArrowRight/></p>
                    </div>
                </div>
           </div>
         </div>
      </div>
  )
}

export default Journey