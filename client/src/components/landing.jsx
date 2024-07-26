import React, { useEffect, useRef } from 'react';
import mathImage from '../assets/images/mathClass.jpg';
import doctorImage from '../assets/images/The-Road-to-Medical-School.jpg';
import englishImage from '../assets/images/EnglishClass.jpg';
import CSImage from '../assets/images/CSCollege.jpg';
import engineering from '../assets/images/engineering-technology.jpg';
import vetImage from '../assets/images/veterinary-assistant.jpg';
import animationImage from '../assets/images/animationClass.jpg';
import scienceImage from '../assets/images/scienceClass.jpg';

const images = [
  { src: mathImage, alt: "math pic" },
  { src: doctorImage, alt: "doctor image" },
  { src: englishImage, alt: "English Class" },
  { src: CSImage, alt: "Computer Science Class" },
  { src: engineering, alt: "Engineering Technology Class" },
  { src: vetImage, alt: "Veterinary Class" },
  { src: animationImage, alt: "Computer Animation Class" },
  { src: scienceImage, alt: "Science Class" }
];

const Landing = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust this value to control scroll speed

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }

        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(scroll);
    };
  }, []);

  return (
    <div className='college h-screen' id="home">
      <div className='backdrop-blur-sm h-full text-white'>
        <h1 className="text-5xl md:text-7xl p-3 text-center pt-24 md:pt-32">Calyek University</h1>
        <h3 className='bg-gray-300 rounded rounded-xl font-semibold text-lg md:text-3xl text-gray-500 p-6 md:p-12 m-6 md:m-12 mt-12 md:mt-24 text-justify w-11/12 md:w-3/5 mx-auto'>
          Are you ready to take the next step in your educational journey? Calyek University is excited to welcome new and returning students for the upcoming Fall Semester. As you prepare for a new academic year, consider joining our vibrant and diverse community of learners and leaders.
        </h3>
        <div
          ref={scrollContainerRef}
          className='scroll-container flex flex-nowrap gap-4 p-6 justify-center items-center overflow-hidden w-full'
          style={{ pointerEvents: 'none' }}
        >
          {[...images, ...images].map((image, index) => (
            <a
              key={index}
              href="#home"
              className="flex-shrink-0 border-4 border-gray-200 rounded-lg drop-shadow-lg"
              style={{ minWidth: '150px', width: '350px', pointerEvents: 'none' }}
            >
              <img className='coverPics w-full h-auto' src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
