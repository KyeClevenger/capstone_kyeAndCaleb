import React from "react";
import doctorImage from '../../assets/images/The-Road-to-Medical-School.jpg';

const Nursing_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={doctorImage} 
                alt="Nursing Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                Nursing (NURS)
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                This course delves into the pivotal role of registered nurses in delivering patient-centered, safe, and high-quality care to adult patients within healthcare environments. It underscores the criticality of assessment in both planning patient care strategies and assessing patient outcomes.
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

export default Nursing_Class;
