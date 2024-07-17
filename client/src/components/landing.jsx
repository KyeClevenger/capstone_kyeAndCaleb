import React, { useEffect, useRef } from 'react';
import mathImage from './pics/mathClass.jpg';
import doctorImage from './pics/The-Road-to-Medical-School.jpg';
import englishImage from './pics/EnglishClass.jpg';
import csImage from './pics/CSCollege.jpg';
import engineering from './pics/engineering-technology.jpg';
import vetImage from './pics/veterinary-assistant.jpg';
import animationImage from './pics/animationClass.jpg';
import scienceImage from './pics/scienceClass.jpg';

const Landing = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 30);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className='college h-screen' id="home">
      <div className='backdrop-blur-sm h-full text-white'>
        <h1 className="text-7xl p-3 text-center pt-32">Landing Page</h1>
        <h3 className='text-center text-2xl p-12 w-screen'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eum reiciendis quaerat, aperiam suscipit nemo ut asperiores vel molestias error eos beatae repellendus sapiente qui nihil, deleniti praesentium quam optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis ullam perferendis earum velit, maxime aperiam minima cupiditate assumenda corrupti tenetur quaerat temporibus enim doloribus quisquam voluptas nulla quidem ad.
        </h3>
        <div
          ref={scrollContainerRef}
          className='flex flex-nowrap gap-8 p-6 justify-center items-center overflow-x-auto'
        >
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={mathImage} alt="math pic" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={doctorImage} alt="doctor image" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={englishImage} alt="English Class" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={csImage} alt="Computer Science Class" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={engineering} alt="Engineering Technology Class" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={vetImage} alt="Veterinary Class" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={animationImage} alt="Computer Animation Class" />
          </a>
          <a href="home" className="flex-shrink-0 border-4 border-gray-400 rounded-lg drop-shadow-lg">
            <img className='coverPics' src={scienceImage} alt="Science Class" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
