import React from "react";
import { Link } from "react-router-dom";
import mathImage from '../assets/images/mathClass.jpg';
import doctorImage from '../assets/images/The-Road-to-Medical-School.jpg';
import englishImage from '../assets/images/EnglishClass.jpg';
import CSImage from '../assets/images/CSCollege.jpg';
import engineering from '../assets/images/engineering-technology.jpg';
import vetImage from '../assets/images/veterinary-assistant.jpg';
import animationImage from '../assets/images/animationClass.jpg';
import scienceImage from '../assets/images/scienceClass.jpg';


const Courses = () => {
    return (
        <div className="bg-gray-400 h-full" id="courses">
            <h1 className="text-center p-8 text-5xl">Courses</h1>
            <div className="flex flex-wrap p-12 h-full text-center justify-center gap-6">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mathematics (MATH)
                    </h5>
                    <img className="coverPics" src={mathImage} alt="math" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        This course applies a variety of mathematical functions (linear, quadratic, power, polynomial, rational, exponential, logarithmic, and logistic) to analyze business scenarios such as market equilibrium, rates of change, cost-benefit analysis, and inflation.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nursing (NURS)
                    </h5>
                    <img className="coverPics" src={doctorImage} alt="Medical Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        This course delves into the pivotal role of registered nurses in delivering patient-centered, safe, and high-quality care to adult patients within healthcare environments. It underscores the criticality of assessment in both planning patient care strategies and assessing patient outcomes.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ENGL 1010
                    </h5>
                    <img className="coverPics" src={englishImage} alt="English Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Calyek University's English program develops students' writing, speaking, and interpretative skills across professional, social, and cultural contexts. Emphasizing both standard English proficiency and the appreciation of linguistic diversity, the program explores traditional literary works while encouraging critical analysis and inclusion of diverse voices in academic and societal spheres.
                    </p>
                </div>
                <Link
                    to="/cs_class" 
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Computer Science
                    </h5>
                    <img className="coverPics" src={CSImage} alt="Computer Science Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Computer Science covers theory, programming, and innovative computing solutions development. Computer Scientists adeptly blend theoretical understanding with practical skills, continually exploring novel applications of computing technology. Major innovations like Google and Amazon exemplify the impact of computer science expertise.
                    </p>
                </Link>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Pre-Engineering
                    </h5>
                    <img className="coverPics" src={engineering} alt="Engineering Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Calyek University's pre-engineering program is designed for students to complete the initial two to three years of engineering education at an ABET-accredited institution. It allows seamless transition to Calyek University's engineering track or transfer to any Utah university offering baccalaureate engineering degrees.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Veterinary Medicine
                    </h5>
                    <img className="coverPics" src={vetImage} alt="Vet class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Calyek University offers a dynamic Veterinary Medicine program that combines rigorous academic training with hands-on clinical experience. Our curriculum emphasizes comprehensive veterinary science, preparing students to diagnose, treat, and prevent illnesses in various animal species.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        2D Animation
                    </h5>
                    <img className="coverPics" src={animationImage} alt="Animation Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Calyek University's Animation program combines artistic creativity with advanced digital skills. Students learn to craft captivating visual stories using cutting-edge technology and industry-standard techniques. Through hands-on projects and collaboration with professionals, our program prepares graduates to excel in the dynamic world of animation.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Science
                    </h5>
                    <img className="coverPics" src={scienceImage} alt="Science Class" />
                    <p className="p-3 text-gray-700 dark:text-gray-400">
                        Delve into the world of science at Calyek University through our dynamic science classes. Covering biology, chemistry, physics, and environmental science, our curriculum merges theory with practical laboratory experiences. Guided by accomplished faculty, these courses cultivate critical thinking and essential skills for scientific exploration and advancement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Courses;
