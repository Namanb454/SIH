import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdOutlineArrowForward } from 'react-icons/md';

function Imagebased() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            {/* Main  */}
            <div>
                <section class="relative text-gray-600 body-font my-10">
                    <h1 className='text-3xl mx-auto w-fit my-10'>Image Based Quiz</h1>
                    <div class="flex justify-center mx-auto">
                        <img className='absolute w- right-[1%] top-28' src='ellipse1.png' />
                        <img className='absolute w- left-[3%] bottom-56' src='ellipse3.png' />
                        <img className='absolute w-[5%] left-[8%] bottom-40' src='ellipse2.png' />


                    </div>
                    <div class="relative w-[80%] bg-[#E4DEF7] rounded-2xl container mx-auto flex py-10 items-center justify-center flex-col">
                        <div className='flex items-end w-[80%]'>
                            <h3 className='text-2xl mx-auto text-black'>
                                Q: What emotions does this image evokes to you?
                            </h3>
                            <MdOutlineArrowForward className='text-4xl px-2 rounded-xl bg-white' />
                        </div>
                        <img class="relative lg:w-[60%] md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="imgbq.png" />
                        <div class="text-center lg:w-2/3 w-full">

                            <div class="flex justify-center">
                                <button class="inline-flex text-white bg-[#A592E3] border-2 border-[#2C2052] py-2 px-10 focus:outline-none hover:bg-[#2C2052] hover:border-[#A592E3] rounded-xl mx-20 text-lg">Option 1</button>
                                <button class="ml-4 inline-flex text-white bg-[#A592E3] border-2 border-[#2C2052] py-2 px-10 focus:outline-none hover:bg-[#2C2052] hover:border-[#A592E3] rounded-xl mx-20 text-lg">Option 2</button>
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

export default Imagebased
