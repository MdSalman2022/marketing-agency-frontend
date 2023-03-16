import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-secondary'>
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-10 md:grid grid-cols-2 p-5 md:p-0">
          <div className='flex flex-col items-center md:items-start gap-8'>
            <img className='w-40' src="https://i.ibb.co/DDXD2Ng/Group-2184.png" alt="" />
            <p>Los Angeles, California, USA</p>
            <span className='flex gap-3 text-2xl text-primary'><FaInstagram /><FaTwitter /><FaFacebook /></span>
            <button className="primary-btn w-60 text-xl">Contact Us</button>
          </div>
          <div className='flex flex-col items-center md:items-start text-center md:text-start gap-10 md:grid grid-cols-3 font-semibold'>
            <div className="flex flex-col gap-3 md:gap-10">
              <p>Work With Us</p>
              <p>Advertise With Us</p>
              <p>Support Us</p>
              <p>Business Advices</p>
            </div>
            <div className="flex flex-col gap-3 md:gap-10">
              <p>Private Coaching</p>
              <p>Our Work</p>
              <p>Our Commitment</p>
              <p>Our Team</p>
            </div>
            <div className="flex flex-col gap-3 md:gap-10">
              <p>About Us</p>
              <p>FAQs</p>
              <p>Report a Bug</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-[#111] p-5 md:p-0">
        <div className="container mx-auto flex flex-col md:grid grid-cols-2 text-base-100 py-10">
          <div className='flex flex-col items-center md:items-start'> 
            <p>2022 Embrace, Inc. - All Rights Reserved</p> 
          </div>
          <div className='flex flex-col items-center gap-5 md:gap-0 md:grid grid-cols-3 font-semibold'>
            <div className="flex flex-col">
            </div>
            <div className="flex flex-col">
              <p>Terms of use</p> 
            </div>
            <div className="flex flex-col">
              <p>Privacy-policy</p> 
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer