import React, { useState } from 'react'
import logo from './assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };


    return (
        <div>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto realtive text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-2" src={logo} alt="" />
                            <span className="text-xl tracking-tight">Virtual</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12 list-none text-decoration-line: none;'>
                            <li><a href="#">Feature</a></li>
                            <li><a href="#">Workflow</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="" className="bg-gradient-to-r from bg-orange-500 to-orange-800 px-3 py-4 rounded-md">Create an account</a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                <li className='py-4'><a href="#">Feature</a></li>
                                <li className='py-4'><a href="#">Workflow</a></li>
                                <li className='py-4'><a href="#">Testimonial</a></li>
                                <li className='py-4'><a href="#">Pricing</a></li>
                            </ul>
                            <div className="flex space-x-6">
                                <a href="" className="py-2 px-3 border rounded-md">
                                    Sign In
                                </a>
                                <a href="" className="bg-gradient-to-r from bg-orange-500 to-orange-800 px-3 py-4 rounded-md">Create an account</a>
                            </div>

                        </div>
                    )}
                </div>
            </nav>

        </div>
    )
}

export default Navbar