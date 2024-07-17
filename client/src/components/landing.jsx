import React from 'react';
import mathImage from './pics/mathClass.jpg';
import doctorImage from './pics/The-Road-to-Medical-School.jpg';
import englishImage from './pics/EnglishClass.jpg';
import csImage from './pics/CSCollege.jpg';
import engineering from './pics/engineering-technology.jpg';
import vetImage from './pics/veterinary-assistant.jpg';
import animationImage from './pics/animationClass.jpg';
import scienceImage from './pics/scienceClass.jpg';

const Landing = () => {
  return (
    <div className='college h-screen overflow-hidden' id="home">
      <div className='backdrop-blur-sm h-full overflow-y-auto text-white'>
        <h1 className="text-7xl p-3 text-center pt-32">Landing Page</h1>
        <h3 className='text-center text-2xl p-12 w-screen'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eum reiciendis quaerat, aperiam suscipit nemo ut asperiores vel molestias error eos beatae repellendus sapiente qui nihil, deleniti praesentium quam optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis ullam perferendis earum velit, maxime aperiam minima cupiditate assumenda corrupti tenetur quaerat temporibus enim doloribus quisquam voluptas nulla quidem ad.
        </h3>
        <div className='flex-wrap flex gap-6 m-6 justify-center'>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={mathImage} alt="math pic" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img className='coverPics' src={doctorImage} alt="doctor image" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img className='coverPics' src={englishImage} alt="English Class" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={csImage} alt="Computer Science Class" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={engineering} alt="Engineering Technology Class" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={vetImage} alt="Veterinary Class" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={animationImage} alt="Computer Animation Class" />
            </a>
            <a href="home" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className='coverPics' src={scienceImage} alt="Science Class" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;

