
import React, { useState } from 'react';
import CapsuleDetailsPopup from './CapsuleDetailsPopUp';

const CapsuleCard = ({ capsule }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-full p-4">
      <div className="h-64 w-full rounded-lg bg-gray-100 bg-white border border-gray-300 rounded-lg p-4">
     
        <h2 className="text-xl text-center font-semibold mb-2">{capsule.capsule_serial}</h2>
        <p className="text-center text-gray-600">{capsule.capsule_id}</p>
        <p className="text-center text-gray-600">{capsule.status}</p>
        <p className="text-center text-gray-600">{capsule.type}</p>
        <p className="text-center text-gray-600">{capsule.original_launch}</p>
        <p className="text-center text-gray-600">{capsule.original_launch_unix}</p>
        <p className="text-center text-gray-600">{capsule.landings}</p>
      <div className='flex justify-center'>
        <button
          className="mt-2 bg-violet-400 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={openPopup}
        >
          View Details
        </button>
        </div>
      </div>
      
      {isPopupOpen && (
        <CapsuleDetailsPopup capsule={capsule} onClose={closePopup} />
      )}
    </div>
  );
};

export default CapsuleCard;
