import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdOutlineArrowForward } from 'react-icons/md';

function Psychologybased() {
    const ans = [
        {
            'ans': "I embrace change as an opportunity for growth and adapt easily.",
            'sn': 'A.'
        },
        {
            'ans': "Change tends to make me anxious and uneasy,  I struggle to adjust.",
            'sn': 'B.'
        },
        {
            'ans': " I prefer routine and predictability, so I tend to avoid change if possible.",
            'sn': 'C.'
        },
        {
            'ans': " I don't feel strongly about change; it doesn't affects me.",
            'sn': 'D.'
        },
    ]
    return (
        <div>
            <div>
                <Navbar />
            </div>

            {/* Main  */}
            <div>
                <section class="relative text-gray-600 body-font my-10">
                    <h1 className='text-3xl mx-auto w-fit my-10'>Psychology Based Quiz</h1>
                    <div class="flex justify-center mx-auto">
                        <img className='absolute w- right-[1%] top-28' src='ellipse1.png' />
                        <img className='absolute w- left-[3%] bottom-56' src='ellipse5.png' />
                        <img className='absolute w-[5%] left-[8%] bottom-40' src='ellipse2.png' />


                    </div>
                    <div class="relative w-[80%] bg-[#E2CAEB] rounded-2xl container mx-auto flex py-5 items-center justify-center flex-col">
                        <div className=' items-end w-[70%]'>
                            <MdOutlineArrowForward className='text-4xl ml-auto mb-5 px-2 rounded-xl bg-white' />
                            <h3 className='text-xl font-semibold px-5 mx-auto text-black'>
                                Q. Life is filled with changes and transitions, both expected and unexpected. How do you typically handle significant changes in your life?
                            </h3>

                        </div>

                        <div class="text-center lg:w-[70%] w-full my-5">

                            <div class="justify-center">
                                {ans.map(data => {
                                    return (
                                        <div className='flex items-center'>
                                            <h2 className='mx-5 text-black font-semibold text-lg'>{data.sn}</h2>
                                            <button class="w-full my-4 pl-5 inline-flex text-white bg-[#A793E7] border-2 border-[#2C2052] py-2 focus:outline-none hover:bg-[#2C2052] hover:border-[#A592E3] rounded-xl text-lg">
                                                {data.ans}</button>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Psychologybased
