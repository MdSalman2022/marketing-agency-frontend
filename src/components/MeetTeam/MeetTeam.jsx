import React from 'react'

const MeetTeam = () => { 
  return (
    <div className='py-20'>
        <div className="container mx-auto ">
            <div className="flex flex-col gap-5 lg:grid grid-cols-2 justify-items-stretch md:gap-10 lg:gap-20 2xl:gap-32 p-5 md:p-0">
                <div className='grid grid-cols-3 gap-5'>
                    <img className='' src="https://i.ibb.co/N1j3h4x/Rectangle-185.png" alt="" />
                    <img className='' src="https://i.ibb.co/92NNb6T/Rectangle-184.png" alt="" />
                    <img className='' src="https://i.ibb.co/zVGKNLW/Rectangle-181.png" alt="" />
                    <img className='' src="https://i.ibb.co/LpsnbCC/Rectangle-182.png" alt="" />
                    <img className='' src="https://i.ibb.co/wCcVQth/Rectangle-183.png" alt="" />
                    <img className='' src="https://i.ibb.co/CVJ1FBB/Rectangle-186.png" alt="" />
                  </div>
                  <div className='flex flex-col gap-5 lg:gap-0 justify-between'>
                      <div className='space-y-5'>
                        <h1 className="text-5xl font-bold">Meet Our Team</h1>
                        <h4 className="text-5xl font-thin">Meet our talented and passionate team of marketing experts today!</h4>
                        <p>
                            Our diverse team brings a wealth of knowledge and experience to the table, ensuring that your brand is in good hands.
                            Get to know the people behind the magic, who will work tirelessly to drive growth and success for your brand. Let's build something great together!
                        </p>
                      </div>
                      <button className='primary-btn w-52 text-2xl font-normal'>Learn More</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTeam