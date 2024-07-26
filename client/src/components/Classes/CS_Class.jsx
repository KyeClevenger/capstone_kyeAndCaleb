import React from "react";
import CSImage from '../../assets/images/CSCollege.jpg';

const CS_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={CSImage} 
                alt="Computer Science Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                    Computer Science
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                Computer Science covers theory, programming, and innovative computing solutions development. Computer Scientists adeptly blend theoretical understanding with practical skills, continually exploring novel applications of computing technology. Major innovations like Google and Amazon exemplify the impact of computer science expertise.
                </p>
                <div>
                <button className="bg-gray-400 p-6 m-6 rounded rounded-lg shadow-lg border border-2 text-white">
                    Add Class +
                </button>
            </div>
            </div>
        </div>
    );
};

export default CS_Class;
