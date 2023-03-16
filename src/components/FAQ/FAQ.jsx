import React, { useState } from 'react'
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa'

const FAQ = () => { 

    const [accordionOne, setAccordionOne] = useState(false)
    const [accordionTwo, setAccordionTwo] = useState('')
    const [accordionThree, setAccordionThree] = useState('')

    const minusStyle = 'absolute right-3 -top-2 z-10 flex p-1 text-xl bg-primary text-base-100 rounded-full'

  return (
      <div className='py-20'>
          <div className="container mx-auto p-5 md:p-0">
              <div className="flex flex-col lg:flex-row gap-10 2xl:gap-0 justify-between items-start">
                  <div className='flex flex-col w-full max-w-3xl'>
                      <span onClick={() => setAccordionOne(!accordionOne)} className='cursor-pointer select-none flex items-center justify-between py-5 border-y gap-10 bg-base-100 z-50'><p>How do i sign up for the project?</p><div className='relative'><FaMinus className={`absolute right-3 -top-2 transition-all duration-300 ${accordionOne ? 'rotate-0' : 'rotate-90'} p-1 text-xl bg-transparent text-base-100 rounded-full z-50`} /><FaMinus className={minusStyle} /></div></span> 
                      

                      <div className={`bg-secondary overflow-hidden transition-all duration-300 ${accordionOne ? "h-auto" : "h-0"}`}><div className={`p-4 transform transition-transform duration-300 ${accordionOne ? 'translate-y-0' : '-translate-y-20'}`}><p>To signup click on Try it now! button.</p></div></div>


                      <span onClick={() => setAccordionTwo(!accordionTwo)} className='cursor-pointer select-none flex items-center justify-between py-5 border-y gap-10 bg-base-100 z-50'><p>What thing that i should prepare before starting?</p><div className='relative'><FaMinus className={`absolute right-3 -top-2 transition-all duration-300 ${accordionTwo ? 'rotate-0' : 'rotate-90'} p-1 text-xl bg-transparent text-base-100 rounded-full z-50`} /><FaMinus className={minusStyle}  /></div></span> 
                      

                      <div className={`bg-secondary overflow-hidden transition-all duration-300 ${accordionTwo ? "h-auto" : "h-0"}`}><div className={`p-4 transform transition-transform duration-300 ${accordionTwo ? 'translate-y-0' : '-translate-y-20'}`}><p>To signup click on Try it now! button.</p></div></div>


                      <span onClick={() => setAccordionThree(!accordionThree)} className='cursor-pointer select-none flex items-center justify-between py-5 border-y gap-10 bg-base-100 z-50'><p>Does my company need help for marketing advices?</p><div className='relative'><FaMinus className={`absolute right-3 -top-2 transition-all duration-300 ${accordionThree ? 'rotate-0' : 'rotate-90'} p-1 text-xl bg-transparent text-base-100 rounded-full z-50`} /><FaMinus className={minusStyle}  /></div></span> 
                      

                      <div className={`bg-secondary overflow-hidden transition-all duration-300 ${accordionThree ? "h-auto" : "h-0"}`}><div className={`p-4 transform transition-transform duration-300 ${accordionThree ? 'translate-y-0' : '-translate-y-20'}`}><p>To signup click on Try it now! button.</p></div></div>
 
                  </div> 
                  <div className='flex flex-col justify-between gap-5'>
                      <h2 className='text-5xl font-bold'>How We Can Help You?</h2>
                      <p>Follow our newsletter. We will regulary update <br />our latest project and availability.</p>
                      <div className="flex items-center gap-3">
                        <input className='input-box xl:w-80' type="text" placeholder='Enter Your Email' />
                        <button className="primary-btn">Lets Talk</button>
                      </div>
                      <p className='font-bold text-primary underline flex items-center gap-1'>More FAQ <FaArrowRight /></p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FAQ