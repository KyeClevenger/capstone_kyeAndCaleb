import React from "react";
import VetImage from '../../assets/images/veterinary-assistant.jpg';

const Vet_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={VetImage} 
                alt="Veterinary Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                    Veterinary Medicine
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                Calyek University offers a dynamic Veterinary Medicine program that combines rigorous academic training with hands-on clinical experience. Our curriculum emphasizes comprehensive veterinary science, preparing students to diagnose, treat, and prevent illnesses in various animal species.
                </p>
            </div>
        </div>
    );
};

export default Vet_Class;