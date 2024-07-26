import React from "react";
import MathImage from '../../assets/images/mathClass.jpg';

const Math_Class = () => {
    return (
        <div className="relative h-screen w-screen bg-gray-800 p-36 ">
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                src={MathImage} 
                alt="Math Class" 
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gray-600 rounded rounded-2xl mt-36 border border-4 shadow-2xl"> 
                <h5 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-white p-16">
                Mathematics (MATH)
                </h5>
                <p className="p-12 text-gray-300 dark:text-gray-300 text-2xl">
                This course applies a variety of mathematical functions (linear, quadratic, power, polynomial, rational, exponential, logarithmic, and logistic) to analyze business scenarios such as market equilibrium, rates of change, cost-benefit analysis, and inflation.
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

export default Math_Class;