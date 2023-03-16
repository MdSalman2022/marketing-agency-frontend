import React from 'react'

const FooterBanner = () => { 
  return (
    <div className='md:py-20 p-5 '>
        <div className="container mx-auto p-10 md:py-10  md:px-20 bg-[#232038] rounded-3xl">
              <div className='flex flex-col-reverse items-center md:items-stretch md:flex-row gap-20 md:gap-0 justify-between h-full md:h-80'>
                <div className='flex flex-col gap-5 md:gap-0 items-center md:items-start md:justify-between'>
                    <h2 className='text-3xl md:text-5xl font-semibold text-base-100 tracking-wide text-center md:text-start'>Start Your Journey <br /> With Us Now</h2>
                    <button className="primary-btn w-52">Start Now</button>
                </div>
                <img className='w-80' src="https://i.ibb.co/VmxLpTv/Group-2186.png" alt="" />
              </div>    
        
        </div>
    </div>
  )
}

export default FooterBanner