import React from 'react'

function Main() {
    
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow mx-5 md:w-1/2 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-semibold text-[#A592E3]">Your Journey to Inner
                            <br class="hidden lg:inline-block" />Peace Starts Here!
                        </h1>
                        <p class="relative mb-20 w-[80%] text-xl font-medium text-[#262626C7] leading-relaxed">Discover a path to emotional well-being with PsySense, your trusted companion for mental health awareness and support.</p>
                        <div class="flex justify-center mx-auto">
                            <img className='absolute w-32 left-[32%] bottom-0 animate-ping ' src='ellipse1.png' />
                            <img className='absolute w-20 left-64 animate-ping' src='ellipse2.png' />
                            <button class="relative inline-flex font-semibold text-white bg-[#A592E3] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>

                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className='absolute right-96 z-10' data-aos="zoom-in-right" src='icon1.png' />
                        <img className='absolute right-24 z-10 animate-pulse transition-all' data-aos="zoom-in" src='icon2.png' />
                        <img className='absolute right-24 -bottom-20 z-10' data-aos="zoom-in" src='icon4.png' />
                        <img className='absolute right-96 -bottom-20 z-10 animate-pulse transition-all' data-aos="zoom-in" src='icon3.png' />
                        <img class=" object-cover object-center rounded" alt="hero" src="landingimg.png" />
                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Take A Quiz!</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <a href='/imgbased' class="px-24 md:w-1/3" data-aos="zoom-in">
                            <div class="flex rounded-lg h-full bg-[#E4DEF7] border-2 border-[#A592E3] px-4 py-4 flex-col">
                                <div class="flex items-center mb-3">

                                    <h2 class="text-[#5E5D5D] mx-auto text-lg title-font font-medium">Image Based Quiz</h2>
                                </div>
                                <img src='card1.png' alt='cardimg' />

                            </div>
                        </a>
                        <a href='/' class="px-24 md:w-1/3" data-aos="zoom-in">
                            <div class="flex rounded-lg h-full bg-[#E2CAEB] border-2 border-[#7866B4] px-4 py-4 flex-col">
                                <div class="flex items-center mb-3">

                                    <h2 class="text-[#5E5D5D] text-lg mx-auto title-font font-medium">Psychology Questions </h2>
                                </div>
                                <img src='card2.png' alt='cardimg' />

                            </div>
                        </a>
                        <a href='/' class="px-24 md:w-1/3" data-aos="zoom-in">
                            <div class="flex rounded-lg h-full bg-[#F9EBC4] border-2 border-[#C9B887] px-4 py-4 flex-col">
                                <div class="flex items-center mb-3">

                                    <h2 class="text-[#5E5D5D] text-lg mx-auto title-font font-medium">Personal Quiz</h2>
                                </div>
                                <img src='card3.png' alt='cardimg' />

                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
