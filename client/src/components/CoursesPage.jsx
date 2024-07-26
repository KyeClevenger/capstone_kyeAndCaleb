import React from 'react';
import Courses from './Courses';

const CoursesPage = () => {
  return (
    <div className='flex w-screen bg-gray-400 p-12 h-full'>
      <div className='bg-gray-600 w-11/12 rounded rounded-2xl shadow-2xl'>
      <h1 className='text-5xl font-semibold text-center w-full p-6 underline underline-offset-8'>Find Your Degree</h1>
      </div>
      <Courses />
    </div>
  );
}

export default CoursesPage;
