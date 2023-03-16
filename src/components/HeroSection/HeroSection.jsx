import React from 'react'

const HeroSection = () => {
  return (
      <div className='container mx-auto'>
        <div className="flex flex-col-reverse items-center md:flex-row justify-between py-10">
              <div className=' flex flex-col justify-center items-start gap-5 lg:gap-10 p-5 md:p-0'>
                  <div className='text-5xl lg:text-8xl font-bold w-full lg:tracking-wide'>
                    <h1>We Take </h1>
                    <h1>Care Of</h1>
                    <h1>Your Brand</h1>
                  </div>
                  <p className='w-full'>Let us elevate your brand to new heights with <br /> our expert marketing strategies and personalized approach</p>
                  <div className='flex gap-5 '>
                      <input className='input-box lg:w-96' type="text" placeholder='Enter Your Email' />
                      <button className='primary-btn'>Let's Talk</button>
                  </div>
              </div>
              <div className=''>
                  <img className='w-full max-w-sm lg:max-w-lg object-cover ' src="https://i.ibb.co/0X596B6/Group-2185-1.png" alt="" />
              </div>
        </div>
    </div>
  )
}

export default HeroSection