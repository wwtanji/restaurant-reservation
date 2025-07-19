import React from 'react';
import womenCookImage from '../../assets/photos/women-cook.jpg';

const JoinComponent: React.FC = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${womenCookImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white px-6 z-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
          Have a Restaurant? <br />
          Join <span className="text-blue-500">Reservelt</span>
        </h2>

        <div className="flex justify-center gap-6 mt-8">
          <button
            className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinComponent; 