import React from 'react'

const HowItWorks = () => {
  return (
      <div className='py-20'>
          <div className="container mx-auto">
              <div className="flex flex-col items-center xl:grid grid-cols-2 p-5 xl:p-0 gap-5 xl:gap-0">
                  <div className='space-y-10'>
                    <h2 className='text-5xl font-bold'>How It Works</h2>
                    <p className='2xl:w-[500px]'>
                        As a marketing agency, we work closely with our clients to understand their unique needs and develop a customized marketing strategy that aligns with their business goals. Our process begins with a thorough analysis of your brand, target audience, and industry landscape.
                    </p>
                    <img className='w-[500px]' src="https://i.ibb.co/r4j80DJ/Rectangle-160-1.webp" alt="" />
                  </div>
                  <div>
                      <div className="grid md:grid-cols-2 gap-10">
                          <span className='space-y-5'>
                              <img className='w-14 md:w-24' src="https://i.ibb.co/VB1CgMC/majesticons-dollar-circle.png" alt="" />
                              <h4 className='text-3xl font-semibold'>Ideation</h4>
                              <p>
                                This process typically involves brainstorming sessions where team members come together to share their ideas and build on each other's thoughts.
                              </p>
                          </span>
                          <span className='space-y-5'>
                              <img className='w-14 md:w-24' src="https://i.ibb.co/Gk0D6mw/majesticons-dollar-circle-1.png" alt="" />
                              <h4 className='text-3xl font-semibold'>Budget</h4>
                              <p>
                                A well-planned budget ensures that the agency can deliver high-quality work and achieve the desired results within the allocated resources.
                              </p>
                          </span>
                          <span className='space-y-5'>
                              <img className='w-14 md:w-24' src="https://i.ibb.co/KK0BvR2/majesticons-dollar-circle-2.png" alt="" />
                              <h4 className='text-3xl font-semibold'>Performance</h4>
                              <p>
                                Performance can be measured using various metrics, such as engagement rates, conversion rates, click-through rates, return on investment (ROI), and more. 
                              </p>
                          </span>
                          <span className='space-y-5'>
                              <img className='w-14 md:w-24' src="https://i.ibb.co/CKW6ZZS/majesticons-dollar-circle-3.png" alt="" />
                              <h4 className='text-3xl font-semibold'>Speed</h4>
                              <p>
                                In today's fast-paced world, speed is critical in a marketing agency. Quick response times, efficient workflows, and timely delivery are key to meeting client expectations and achieving business goals.
                              </p>
                          </span>
                      </div>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default HowItWorks