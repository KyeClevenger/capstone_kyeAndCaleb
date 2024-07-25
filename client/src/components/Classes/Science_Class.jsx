import React from "react";
import ScienceImage from '../../assets/images/scienceClass.jpg';

const Science_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={ScienceImage} 
                alt="Science Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                    Science
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                    Delve into the world of science at Calyek University through our
                    dynamic science classes. Covering biology, chemistry, physics, and
                    environmental science, our curriculum merges theory with practical
                    laboratory experiences. Guided by accomplished faculty, these courses
                    cultivate critical thinking and essential skills for scientific
                    exploration and advancement.
                </p>
            </div>
        </div>
    );
};

export default Science_Class;

