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
                      

                      <div className={`bg-secondary overflow-hidden transition-all duration-300 ${accordionTwo ? "h-auto" : "h-0"}`}><div className={`p-4 transform transition-transform duration-300 ${accordionTwo ? 'translate-y-0' : '-translate-y-20'}`}><div>
                      <p>Before starting a marketing campaign with a marketing agency, there are a few things that you should prepare:</p>

                          <ul className='list-decimal list-inside'>
                            <li>Clearly define your goals and objectives for the campaign.</li>
                            <li>Identify your target audience and understand their needs and preferences.</li>
                            <li>Gather and analyze data on your current market position, competitors, and industry trends.</li>
                            <li>Determine your budget for the campaign and establish metrics for measuring success.</li>
                            <li>Have a clear understanding of your brand identity and messaging.</li>
                            <li>By preparing these things in advance, you can help ensure that your marketing campaign is effective and aligned with your overall business objectives.</li>
                        </ul>
                      </div></div></div>


                      <span onClick={() => setAccordionThree(!accordionThree)} className='cursor-pointer select-none flex items-center justify-between py-5 border-y gap-10 bg-base-100 z-50'><p>Does my company need help for marketing advices?</p><div className='relative'><FaMinus className={`absolute right-3 -top-2 transition-all duration-300 ${accordionThree ? 'rotate-0' : 'rotate-90'} p-1 text-xl bg-transparent text-base-100 rounded-full z-50`} /><FaMinus className={minusStyle}  /></div></span> 
                      

                      <div className={`bg-secondary overflow-hidden transition-all duration-300 ${accordionThree ? "h-auto" : "h-0"}`}><div className={`p-4 transform transition-transform duration-300 ${accordionThree ? 'translate-y-0' : '-translate-y-20'}`}><div>
                      <p>If your company is looking to improve its marketing efforts, a marketing agency can be a valuable partner. Marketing agencies can provide expert advice and guidance on a wide range of marketing activities, including branding, digital marketing, social media, content marketing, and more.</p>
                        <p>Some signs that your company may benefit from the help of a marketing agency include:</p>
                          <ul className='list-decimal list-inside'>
                            <li>Your current marketing efforts are not generating the desired results.</li>
                            <li>Your marketing team lacks the expertise or resources to execute a comprehensive marketing strategy.</li>
                            <li>You are looking to expand your marketing efforts into new channels or markets.</li>
                            <li>You need help developing a cohesive brand identity and messaging.</li>
                          </ul>

                      
                      </div></div></div>
 
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