import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className='text-white backdrop-blur-2xl fixed right-0 top-0 p-5 z-10 md:border-b-2 border-2 shadow-lg items-end flex md:flex-row justify-end'>
                <button
                    onClick={toggleMenu}
                    className="text-white inline-flex items-center mr-5 p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="text-white w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`md:flex backdrop-blur-2xl md:items-end md:border-0 shadow-2xl border-t-0 border-2 gap-8 flex-grow absolute top-[5.45rem] right-0 w-full md:w-auto md:static md:flex-row-reverse md:gap-5 p-3 md:p-0 ${isMenuOpen ? 'block' : 'hidden'} no-horizontal-scrollbar`}>
                    <button onClick={() => scrollToSection('login')} className="block md:inline-block">Login</button>
                    <button onClick={() => scrollToSection('info')} className="block md:inline-block">Info</button>
                    <button onClick={() => scrollToSection('courses')} className="block md:inline-block">Courses</button>
                    <button onClick={() => scrollToSection('home')} className="block md:inline-block">Home</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
