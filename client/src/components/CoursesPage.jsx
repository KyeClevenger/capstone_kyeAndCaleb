import React from 'react';
import Courses from './Courses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CoursesPage = () => {
  return (
    <div className="bg-gray-400">
      <div className="bg-gray-600 w-11/12 rounded-2xl shadow-2xl mx-auto">
        <h1 className="text-5xl font-semibold text-center w-full p-6 text-white">
          Find the right course for you!
        </h1>
        <div className="flex justify-center items-center py-6">
          <div className="flex">
            <input
              type="text"
              className="border-3 border-r-0 border-blue-400 p-2 h-10 rounded-l-md outline-none text-green-700 focus:text-blue-400"
              placeholder="What are you looking for?"
            />
            <button
              type="submit"
              className="w-12 h-10 border border-blue-400 bg-blue-400 text-center text-white rounded-r-md cursor-pointer text-lg flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
      <Courses />
    </div>
  );
};

export default CoursesPage;
