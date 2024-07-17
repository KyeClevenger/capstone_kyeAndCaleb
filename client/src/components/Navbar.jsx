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
            <style jsx>{`
                body {
                    overflow-x: hidden;  /* Hide horizontal scrollbar */
                }
                /* Hide horizontal scrollbar for Chrome, Safari, and Opera */
                .no-horizontal-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                /* Hide horizontal scrollbar for IE, Edge, and Firefox */
                .no-horizontal-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
            <nav className='bg-gray-400 fixed w-screen p-5 z-10 md:border-b-2 border-2 shadow-lg flex justify-end md:justify-end'>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center mr-5 p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`md:flex md:items-end md:border-0 shadow-2xl border-t-0 border-2 gap-8 items-center flex-grow absolute top-[6.95rem] left-0 bg-gray-400 w-full md:w-auto md:static md:flex-row-reverse md:gap-5 p-3 md:p-0 ${isMenuOpen ? 'block' : 'hidden'} no-horizontal-scrollbar`}>
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

