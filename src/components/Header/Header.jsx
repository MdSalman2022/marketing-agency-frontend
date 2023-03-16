import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

  const [show, setShow] = useState(false)
  
  return (
      <div className='md:py-5'>
          <div className='w-full container mx-auto flex items-center justify-between p-3 md:p-0'>
              <div className='flex items-center justify-between lg:gap-20'>
          <div className='flex items-center gap-5 relative'>
            {/* dropdown for mobile start */}
                  <span onClick={()=>setShow(!show)} className='flex md:hidden bg-secondary p-3 rounded-full'><GiHamburgerMenu /></span>
                  <div className={`absolute top-12 ${show ? 'flex' : 'hidden'} md:hidden flex-col items-start gap-3 font-semibold bg-base-100 rounded-xl border border-primary p-3`}>
                      <span className='hover:underline hover:text-primary'>How it works</span>
                      <span className='hover:underline hover:text-primary'>Our Work</span>
                      <span className='hover:underline hover:text-primary'>Pricing</span>
                      <span className='hover:underline hover:text-primary'>About Us</span>
                  </div>
            {/* dropdown for mobile end */}
                  <img className='w-28 md:w-40' src="https://i.ibb.co/DDXD2Ng/Group-2184.png" alt="" />
                </div>
                <div className='hidden lg:flex items-center gap-3 font-semibold'>
                    <span className='cursor-pointer hover:text-primary'>How it works</span>
                    <span className='cursor-pointer hover:text-primary'>Our Work</span>
                    <span className='cursor-pointer hover:text-primary'>Pricing</span>
                    <span className='cursor-pointer hover:text-primary'>About Us</span>
                </div>
              </div>
              <ul>
                  <li><button className='primary-btn text-xs md:text-lg'>Try it Now</button></li>
              </ul>
          </div>
    </div>
  )
}

export default Header