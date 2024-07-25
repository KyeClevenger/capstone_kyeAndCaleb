import React from "react";
import engineering from '../../assets/images/engineering-technology.jpg';

const Engineering_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={engineering} 
                alt="Engineering Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                Pre-Engineering
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                Calyek University's pre-engineering program is designed for students to complete the initial two to three years of engineering education at an ABET-accredited institution. It allows seamless transition to Calyek University's engineering track or transfer to any Utah university offering baccalaureate engineering degrees.
                </p>
            </div>
        </div>
    );
};

export default Engineering_Class;