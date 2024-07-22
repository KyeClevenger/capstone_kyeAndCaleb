import React, { useEffect, useRef } from 'react';
import mathImage from './pics/mathClass.jpg';
import doctorImage from './pics/The-Road-to-Medical-School.jpg';
import englishImage from './pics/EnglishClass.jpg';
import csImage from './pics/CSCollege.jpg';
import engineering from './pics/engineering-technology.jpg';
import vetImage from './pics/veterinary-assistant.jpg';
import animationImage from './pics/animationClass.jpg';
import scienceImage from './pics/scienceClass.jpg';

const images = [
  { src: mathImage, alt: "math pic" },
  { src: doctorImage, alt: "doctor image" },
  { src: englishImage, alt: "English Class" },
  { src: csImage, alt: "Computer Science Class" },
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

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
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
        <h1 className="text-7xl p-3 text-center pt-32">Calyek University</h1>
        <h3 className='bg-gray-200 rounded rounded-xl font-semibold text-3xl text-gray-900 p-12 m-12 mt-24 text-justify w-3/5'>
        Are you ready to take the next step in your educational journey? Calyek University is excited to welcome new and returning students for the upcoming Fall Semester. As you prepare for a new academic year, consider joining our vibrant and diverse community of learners and leaders.
        </h3>
        <div
          ref={scrollContainerRef}
          className='scroll-container flex flex-nowrap gap-8 p-6 justify-center items-center overflow-x-auto'
          style={{ display: 'flex', width: '100%' }}
        >
          {[...images, ...images].map((image, index) => (
            <a
              key={index}
              href="home"
              className="flex-shrink-0 border-4 border-gray-200 rounded-lg drop-shadow-lg"
              style={{ minWidth: '200px' }}
            >
              <img className='coverPics' src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
