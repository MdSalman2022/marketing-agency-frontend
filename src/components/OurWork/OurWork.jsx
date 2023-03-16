import React from 'react'

const OurWork = () => { 
  return (
      <div>
          <div className="container mx-auto text-center space-y-10">
              <div className='flex flex-col items-center gap-5 p-5 md:p-0'>
                <h1 className="text-5xl font-bold">Our Work</h1>
                <p className='lg:w-[650px]'>Our portfolio showcases our passion for creativity and innovation in marketing. We take pride in delivering exceptional work that drives growth and success for our clients. </p>
              </div>
              <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row items-center justify-between p-5 xl:p-0">
                  <span className='flex flex-col gap-2 items-center'>
                      <img className='md:w-96 lg:w-full lg:max-w-md object-cover xl:w-[400px]' src="https://i.ibb.co/WFBzLWR/Rectangle-161-2.png" alt="" />
                      <div className='p-5'>
                        <h4 className='text-3xl font-semibold'>Apple</h4>
                        <p className='text-xs'>Innovating with the world's most valuable brand was an honor.</p>
                      </div>
                  </span>
                  <span className='flex flex-col gap-5 items-center'>
                      <img className='md:w-96 lg:w-full lg:max-w-md object-cover xl:w-[400px]' src="https://i.ibb.co/1973Drd/Rectangle-161-1.png" alt="" />
                      <div className='p-5'>
                        <h4 className='text-3xl font-semibold'>Coca-Cola</h4>
                        <p className='text-xs'>Collaborating with the iconic Coca-Cola brand was a refreshing experience.</p>
                     </div>
                  </span>
                  <span className='flex flex-col gap-5 items-center'>
                      <img className='md:w-96 lg:w-full lg:max-w-md object-cover xl:w-[400px]' src="https://i.ibb.co/jRhB8yH/Rectangle-161.png" alt="" />
                      <div className='p-5'>
                        <h4 className='text-3xl font-semibold'>Nike</h4>
                        <p className='text-xs'>Empowering the world's athletes with the legendary <br /> Nike brand was exhilarating.</p>
                      </div>
                  </span>
              </div>
          </div>
    </div>
  )
}

export default OurWork