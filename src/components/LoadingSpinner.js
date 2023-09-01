import React from 'react';
import loader from "../images/astronaut.svg"

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500">
      <img className="h-8 w-auto space-x-3" src={loader} alt="Logo" />
      </div>
    </div>
  );
};

export default LoadingSpinner;