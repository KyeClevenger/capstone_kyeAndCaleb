import React from "react";
import EnglishImage from '../../assets/images/EnglishClass.jpg';

const English_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={EnglishImage} 
                alt="English Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                    English
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                Calyek University's English program develops students' writing, speaking, and interpretative skills across professional, social, and cultural contexts. Emphasizing both standard English proficiency and the appreciation of linguistic diversity, the program explores traditional literary works while encouraging critical analysis and inclusion of diverse voices in academic and societal spheres.
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

export default English_Class;

