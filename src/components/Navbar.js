import React, { useState, useEffect, useRef } from 'react';
// import { BsFillCartFill } from "react-icons/bs";
// import { HiMiniBars4 } from "react-icons/hi";
import { MdNotificationsNone } from 'react-icons/md';

import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        // { 'id': '1', 'nav': 'Intro', 'link': '#' },
        // { 'id': '2', 'nav': <MdNotificationsNone />, 'link': '#about' },
        // { 'id': '3', 'nav': 'What We Do', 'link': '#services' },
        // { 'id': '4', 'nav': 'Our Focus', 'link': '#features' },
        // // { 'id': '4', 'nav': 'Contact Us', 'link': '#contack' },
        // { 'id': '5', 'nav': 'Demo', 'link': '#Demo' },
    ];
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("white");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav className=' bg-white border-b-2 border-gray-300' style={{
            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[5rem]">
                    <div className=" w-full flex items-center ">
                        <div className="flex items-center">
                            <img className="mx-2  w-[25%] items-center" src="PsySenselogo.png" alt="Logo" />
                            <Link to='/' className='lg:text-3xl text-xl items-center text-[#A592E3] font-serif py-auto font-medium '>PsySense</Link>
                        </div>
                        <div className="hidden md:block ml-auto">
                            <div className="ml-10 flex items-center space-x-4">
                                <a
                                    href='/'
                                    className="font-bold text-black hover:text-[#A592E3] transition-all px-3 w-full py-2 rounded-md text-base">
                                    <span className='w-full'>
                                        <MdNotificationsNone className='w-5 h-full' />
                                    </span>
                                </a>

                                <Link
                                    to="/contact"
                                    className="text-black font-semibold bg-[#F9EBC4] hover:bg-black border-2 border-[#F9EBC4] transition-all hover:text-[#F9EBC4] hover:border-black px-5 py-[5px] rounded-md text-base"
                                >
                                    Signup
                                </Link>
                                <a
                                    href='/'
                                    className="font-bold text-black hover:text-[#A592E3] transition-all px-3 py-2 rounded-md text-base">
                                    <span> Login</span>
                                </a>

                            </div>
                        </div>
                    </div>

                    <section className="MOBILE-MENU flex lg:hidden md:ml-auto" ref={menuRef}>
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-7 bg-[#A592E3] "></span>
                            <span className="block h-0.5 w-7 bg-[#A592E3] "></span>
                            <span className="block h-0.5 w-7 bg-[#A592E3] "></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav rounded-b-2xl" : "hideMenuNav"}>
                            <div
                                className="absolute top-0  right-0 md:px-10 px-3 py-[6%]"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-10 w-10 text-[#A592E3]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div
                                className={`${isNavOpen ? 'block' : 'hidden'
                                    } md:hidden bg-transparent`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <div className="px-2 pt-4 items-center pb-3 space-y-1 sm:px-3" ref={menuRef}>
                                    <div className="flex mb-28 items-center">
                                        <img className="mx-2 w-[25%] items-center" src="PsySenselogo.png" alt="Logo" />
                                        <Link to='/' className='lg:text-2xl text-[#A592E3] text-xl font-medium mx-auto w-fit font-serif'>PsySense</Link>
                                    </div>




                                    <a
                                        href="/"
                                        className="text-black font-bold hover:text-[#A592E3] transition-all block px-3 py-2 rounded-md text-base">
                                        <span className='w-full'>
                                            <MdNotificationsNone className='mx-auto w-5 h-full' />
                                        </span>
                                    </a>


                                    <Link
                                        to="/contact"
                                        className="w-fit mx-auto text-black font-semibold bg-[#F9EBC4] hover:bg-black border-2 border-[#F9EBC4] transition-all hover:text-[#F9EBC4] hover:border-black block px-5 py-[5px] rounded-md text-base"
                                    >
                                        Signup
                                    </Link>

                                    <a
                                        href="/"
                                        className="text-black w-fit mx-auto font-bold hover:text-[#A592E3] transition-all block px-3 py-2 rounded-md text-base">
                                        Login
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}

        </nav >
    );
};

export default Navbar;
