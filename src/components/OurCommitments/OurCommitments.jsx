import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const OurCommitments = () => {
  return (
      <div className='bg-base-100 py-20'>
          <div className="container mx-auto grid gap-5 md:gap-0 md:grid-cols-2 p-5 md:p-0">
              <div className='grid grid-cols-2 lg:gap-y-10'>
                  <span>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>245%</h1>
                    <p>More revenues for <br />the brand</p>
                  </span>
                  <span>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>130k</h1>
                    <p>Audiences reached <br />across platform</p>
                  </span>
                  <span>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>50+</h1>
                    <p>Brands work with us</p>
                  </span>
                  <span>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>24+</h1>
                    <p>Use This Section To<br />Describe Your</p>
                  </span>
              </div>
              <div className='space-y-10'>
                  <div>
                        <h3 className='text-4xl font-bold'>Our Commitments</h3>
                        <p>
                        At Embrace, we are committed to providing exceptional service to our clients. We believe in transparency, honesty, and collaboration, and we strive to establish strong relationships with our clients based on mutual trust and respect. Our team of experts is dedicated to staying up-to-date with the latest industry trends and techniques to ensure that we deliver innovative and effective marketing solutions. We are committed to delivering measurable results and helping our clients achieve their business objectives. Your success is our success, and we are passionate about helping you reach your full potential.
                        </p>
                  </div>
                  
                  <p className='text-primary font-bold flex items-center underline'>Learn More <FaArrowRight/></p>
              </div>
        </div>
          
    </div>
  )
}

export default OurCommitments