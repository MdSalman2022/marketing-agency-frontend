import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonial = () => { 
  return (
      <div>
          <div className="container mx-auto space-y-10">
              <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between p-5 md:p-0">
                  <div>
                    <h3 className='text-3xl md:text-4xl font-bold mb-2'>What Our Client Said About Us</h3>
                    <p>Read what our satisfied clients have to say about our collaborative approach,<br /> exceptional results, and personalized service.</p>
                  </div>
                  <div className='flex items-center gap-3'>
                      <span className='p-2 text-2xl md:p-5 md:text-3xl bg-primary hover:bg-info hover:text-base-100 rounded-full text-neutral bg-opacity-10'><FaArrowLeft/></span>
                      <span className='p-2 text-2xl md:p-5 md:text-3xl bg-primary hover:bg-info rounded-full text-base-100'><FaArrowRight/></span>
                  </div>
              </div>
                <div>
                  <div className="grid lg:grid-cols-3 p-5 md:p-0 gap-5">
                    <div className='bg-primary rounded-3xl p-5 text-base-100'>
                      <div className='flex flex-col items-start gap-5'>
                <div className="card-header flex items-center gap-5">
                <img className='w-14' src="https://i.ibb.co/yNY6KF4/Ellipse-80.png" alt="" />
                          
                          <span className='space-y-2'>
                            <p className='font-bold text-xl'>Amelia Joseph</p>
                            <p>Cheif Manager</p>
                          </span>
                        </div>
                          <p>Working with this marketing agency has been a game-changer for our business. They've helped us create and implement a comprehensive marketing strategy that has significantly increased our online presence and customer engagement. Their team is incredibly knowledgeable and attentive, and we're so grateful for their expertise.</p>
                      </div>
                    </div>
                    <div className='bg-secondary rounded-3xl p-5 text-neutral'>
                      <div className='flex flex-col items-start gap-5'>
                        <div className="card-header flex items-center gap-5">
                        <img className='w-14' src="https://i.ibb.co/9cY5HQh/Ellipse-80-1.png" alt="" />
                          <span className='space-y-2'>
                            <p className='font-bold text-xl'>Amelia Joseph</p>
                            <p>Cheif Manager</p>
                          </span>
                        </div>
                        <p>We've been working with this marketing agency for several months now, and we're already seeing impressive results. Their approach is creative and innovative, and they're always on top of the latest industry trends. They've helped us improve our SEO, social media, and email marketing efforts, and we couldn't be happier with the results.</p>
                      </div>
                    </div>
                    <div className='bg-secondary rounded-3xl p-5 text-neutral'>
                      <div className='flex flex-col items-start gap-5'>
                        <div className="card-header flex items-center gap-5">
                        <img className='w-14' src="https://i.ibb.co/8N1Tytt/Ellipse-80-2.png" alt="" />
                          <span className='space-y-2'>
                            <p className='font-bold text-xl'>Amelia Joseph</p>
                            <p>Cheif Manager</p>
                          </span>
                        </div>
                        <p>I can't recommend this marketing agency highly enough. They took the time to really understand our brand and our goals, and they've created a marketing plan that's perfectly tailored to our needs. Their team is professional, responsive, and easy to work with, and we're already seeing a significant return on our investment. If you're looking for a marketing partner that truly cares about your success, this is the agency to choose.</p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Testimonial