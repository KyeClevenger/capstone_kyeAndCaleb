import React from 'react';
import CSImage from '../../assets/images/CSCollege.jpg';


const CS_Class = () => {
    return (
        <>
        <div className='bg-gray-300 h-screen text-center justify-center items-center flex'>

            <a
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Computer Science
                </h5>
                <img className="coverPics" src={CSImage} alt="Computer Science Class" />
                <p className="p-3 text-gray-700 dark:text-gray-400">
                    Computer Science covers theory, programming, and innovative computing solutions development. Computer Scientists adeptly blend theoretical understanding with practical skills, continually exploring novel applications of computing technology. Major innovations like Google and Amazon exemplify the impact of computer science expertise.
                </p>
            </a>
            </div>
        </>
    );
};

export default CS_Class;
