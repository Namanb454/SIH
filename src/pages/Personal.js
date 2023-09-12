import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdOutlineArrowForward } from 'react-icons/md';

function Personal() {
    const ans = [
        {
            'ans': "I tend to forgive myself easily and focus on learning from my mistakes.",
            'sn': 'A.'
        },
        {
            'ans': "My Past  often haunts me, causing feelings of guilt and self-blame.",
            'sn': 'B.'
        },
        {
            'ans': " I find it challenging to move on from past  and may hold onto grudges.",
            'sn': 'C.'
        },
        {
            'ans': " I rarely dwell on past my mistakes, as I believe they don't define me.",
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
                    <h1 className='text-3xl mx-auto w-fit my-10'>Personal Quiz</h1>
                    <div class="flex justify-center mx-auto">
                        <img className='absolute w- right-[1%] top-28' src='ellipse1.png' />
                        <img className='absolute w- left-[3%] bottom-56' src='ellipse4.png' />
                        <img className='absolute w-[5%] left-[8%] bottom-40' src='ellipse2.png' />


                    </div>
                    <div class="relative w-[80%] bg-[#F9EBC4] rounded-2xl container mx-auto flex py-5 items-center justify-center flex-col">
                        <div className=' items-end w-[70%]'>
                            <MdOutlineArrowForward className='text-4xl ml-auto mb-5 px-2 rounded-xl bg-white' />
                            <h3 className='text-xl font-semibold px-5 mx-auto text-black'>
                                Q. Reflecting on your personal life and past experiences, which statement best describes your approach to handling past regrets and mistakes?
                            </h3>

                        </div>

                        <div class="text-center lg:w-[70%] w-full my-5">

                            <div class="justify-center">
                                {ans.map(data => {
                                    return (
                                        <div className='flex items-center'>
                                            <h2 className='mx-5 text-black font-semibold text-lg'>{data.sn}</h2>
                                            <button class="w-full my-4 pl-5 inline-flex text-white bg-[#F5AA67A6] border-2 border-[#2C2052] py-2 focus:outline-none hover:bg-[#e6954f] hover:border-[#A592E3] rounded-xl text-lg">
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

export default Personal
