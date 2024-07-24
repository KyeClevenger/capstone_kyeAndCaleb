import React from 'react';
import Courses from './Courses';

const CoursesPage = () => {
  return (
    <div className='flex w-screen bg-gray-400 justify-between p-12 h-full'>
      <h1 className='text-3xl text-center w-full p-6'>CoursesPage</h1>
      <Courses />
    </div>
  );
}

export default CoursesPage;
