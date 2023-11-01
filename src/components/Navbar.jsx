import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const hamburger = () => {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
    }
    useEffect(() => {
        const option = document.getElementById("option");

        window.addEventListener('click', ((event) => {
            if (!option.contains(event.target) && event.target != option) {
                const dropdown = document.getElementById('dropdown');
                dropdown.classList.add('hidden');
            }
        }))
    }, [])
    const location = useLocation();

    return (
        <div id="navmain" className="sticky top-[3px] navbar h-16 bg-gradient-to-r from-gray-800 lg:to-gray-400 to-gray-300 text-gray-100 flex justify-between items-center lg:mb-0 ">

            <div className="flex items-center justify-around w-full">
                <ul className="flex flex-row items-center space-x-4 md:mr-4">
                    <li className='ml-4'>
                        <h1 className='text-4xl font-serif text-white pr-4 xl:ml-7'>V-News</h1>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg mb" to="/">Home</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/about' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/about">About</Link>
                    </li>
                </ul>

                <ul className="hidden lg:flex flex-row items-center space-x-4 top-16 pl-7">

                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/business' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/business">Business</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/entertainment' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/sports' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/sports">Sports</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/general' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/general">General</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/health' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/health">Health</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/science' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/science">Science</Link>
                    </li>
                    <li className={`pt-1 hover:text-green-400 ${location.pathname == '/technology' ? "text-green-400" : "text-white"}`}>
                        <Link className="text-lg" to="/technology">Technology</Link>
                    </li>
                </ul>

            </div>

            <div id="menu" className={`relative lg:hidden inline-block text-left mr-5`}>
                <div>
                    <button id="option" onClick={hamburger} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  border-2 border-white" aria-expanded="true" aria-haspopup="true">
                        <div id="outin" className="flex flex-col">
                            <div id='first' className="h-0.5 w-5 bg-white "></div>
                            <div id='second' className="h-0.5 w-5 bg-white my-1"></div>
                            <div id='third' className="h-0.5 w-5 bg-white"></div>
                        </div>
                    </button>
                </div>

                <div id="dropdown" className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="option" aria-orientation="vertical" aria-labelledby="option-button" tabIndex="-1">
                    <div className="py-1" role="none">

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/business">Business</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/entertainment">Entertainment</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/sports">Sports</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/general">General</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/health">Health</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/science">Science</Link></button>

                        <button className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> <Link className="text-lg" to="/technology">Technology</Link></button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Navbar;
