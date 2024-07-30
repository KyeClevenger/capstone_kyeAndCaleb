import React from "react";
import AnimationImage from '../../assets/images/animationClass.jpg';

const Animation_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={AnimationImage} 
                alt="Animation Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                    2D Animation
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                alyek University's Animation program combines artistic creativity with advanced digital skills. Students learn to craft captivating visual stories using cutting-edge technology and industry-standard techniques. Through hands-on projects and collaboration with professionals, our program prepares graduates to excel in the dynamic world of animation.
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

export default Animation_Class;
