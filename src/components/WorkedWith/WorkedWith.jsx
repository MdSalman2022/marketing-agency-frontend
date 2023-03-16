import React from 'react'

function WorkedWith() {
    return (
        <div className='bg-secondary h-full'>
            <div className='container mx-auto py-10'>
                <div className="flex flex-col gap-14 p-5 2xl:p-0">
                    <div className='flex flex-col md:flex-row md:items-center justify-start gap-10'>
                        <div className="font-bold text-4xl tracking-normal leading-normal">
                            <h3>Companies <br /> We Worked With</h3> 
                        </div>
                        <div>
                            <p>From startups to Fortune 500 companies, we have had the privilege <br />  of working with a diverse range of businesses across various industries. <br /> Our tailored solutions have helped our clients achieve their marketing <br /> goals and drive growth.</p>
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/tP2zrGD/Frame-56.png" alt="" />
                    <img src="https://i.ibb.co/J5Zcb6C/Frame-57.png" alt="" /> */}

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center">
                        <img className='w-32' src="https://i.ibb.co/cLRntnC/Company-logo.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/rmSmz4S/Company-logo-1.png" alt="" />
                        <img className='w-20' src="https://i.ibb.co/JFTWxL0/Company-logo-2.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/Zx0zg0X/Company-logo-3.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/1nL0Zpc/Company-logo-4.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/sWpC8v2/evernote.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/NTkcYbx/adobe.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/p4Y25Px/paypal.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/K5DWD3F/amazon.png" alt="" />
                        <img className='w-32' src="https://i.ibb.co/W5FTZJ3/asana.png" alt="" />
                    </div>

                    



                    

                    
                    




                </div>

            </div>
        </div>
    )
}

export default WorkedWith
