import React from 'react';
import profilePic from '../assets/images/LinkedinBGKye.jpg';

const ProfilePage = () => {
    return (
        <div className='bg-gray-800 p-12 h-screen'>
        <div className="max-w-2xl mx-auto p-5 bg-gray-100 rounded-lg shadow-2xl">
            <div className="text-center mb-8" >
                <div className="border-4 border-gray-800 rounded-full w-48 h-48 mx-auto overflow-hidden shadow-lg">
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="mt-4 text-2xl font-bold text-gray-800">Kye Clevenger</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
                <p className="mt-2 text-gray-600">Howdy! I'm Kye Clevenger, a software developer with a passion for building web applications.</p>
                <h2 className="mt-6 text-xl font-semibold text-gray-800">Contact Information</h2>
                <p className="mt-2 text-gray-600">Email: kye@gmail.com</p>
                <p className="mt-2 text-gray-600">Phone: (123) 456-7890</p>
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
