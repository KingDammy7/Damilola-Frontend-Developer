import React from "react";

const CapsuleDetailsPopup = ({ capsule, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <section>
          <div className="p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold mb-2">
              {capsule.capsule_serial}
            </h2>
            <p className="text-gray-600">ID: {capsule.capsule_id}</p>
            <p className="text-gray-600">Status: {capsule.status}</p>
            <p className="text-gray-600">
              Original Launch: {capsule.original_launch}
            </p>
            <p className="text-gray-600">Type: {capsule.type}</p>
            <p className="text-center text-gray-600">
              Original Launch Unix: {capsule.original_launch_unix}
            </p>
            <p className="text-center text-gray-600">
              Landings: {capsule.landings}
            </p>

            <button
              class="mt-8 inline-block w-full rounded-full bg-violet-400 py-4 text-sm font-bold text-white shadow-xl"
              href=""
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CapsuleDetailsPopup;
