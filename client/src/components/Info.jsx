import React from 'react'
import StudentLifeImage from './pics/schoolLife.jpg';

const Info = () => {
    return (
        <div className='h-screen text-white bg-gray-300 p-12' id="info">
            <h1 className='text-center text-md p-3 text-5xl underline underline-offset-8'>Student Life!</h1>
            <div className='flex items-center'>
            <img className=" rounded-full w-3/5 h-3/5 object-cover m-12 rounded-2xl" src={StudentLifeImage} alt="School Life" />
            <h3 className='text-2xl text-gray-500 '>Welcome to CalyeK University, where innovation meets excellence! Founded on integrity, knowledge, and discovery, we are a beacon of academic brilliance and cutting-edge research. Our dynamic, inclusive campus brings together students from diverse backgrounds to learn, grow, and shape the future. With state-of-the-art facilities, world-renowned faculty, and a vibrant student community, we offer an unparalleled educational experience.</h3>
            </div>
        </div>
    )
}

export default Info