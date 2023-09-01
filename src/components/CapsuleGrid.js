import React, { useState, useEffect } from "react";
import CapsuleCard from "./CapsuleCard";

const ITEMS_PER_PAGE = 6;

const CapsuleGrid = () => {
  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchStatus, setSearchStatus] = useState("");
  const [searchSerial, setSearchSerial] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((data) => setCapsules(data));
  }, []);

  const totalPages = Math.ceil(capsules.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredCapsules = capsules.filter((capsule) => {
    const statusMatch = capsule.status
      .toLowerCase()
      .includes(searchStatus.toLowerCase());
    const serialMatch = capsule.capsule_serial
      .toLowerCase()
      .includes(searchSerial.toLowerCase());
    const typeMatch = capsule.type
      .toLowerCase()
      .includes(searchType.toLowerCase());

    return statusMatch && serialMatch && typeMatch;
  });

  const paginatedCapsules = filteredCapsules.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 w-full">
          <div class="relative">
            <label for="Search" className="sr-only">
              {" "}
              Search by Status{" "}
            </label>

            <input
              type="text"
              placeholder="Search by Status"
              className="w-full rounded-md shadow-sm sm:text-sm border border-gray-300 rounded p-2"
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div class="relative">
            <label for="Search" className="sr-only">
              {" "}
              Search by Serial Number{" "}
            </label>

            <input
              type="text"
              placeholder="Search by Serial Number"
              className="w-full rounded-md shadow-sm sm:text-sm border border-gray-300 rounded p-2"
              value={searchSerial}
              onChange={(e) => setSearchSerial(e.target.value)}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div class="relative">
            <label for="Search" className="sr-only">
              {" "}
              Search by Type{" "}
            </label>

            <input
              type="text"
              placeholder="Search by Type"
              className="w-full rounded-md shadow-sm sm:text-sm border border-gray-300 rounded p-2"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      {paginatedCapsules.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {paginatedCapsules.map((capsule) => (
              <CapsuleCard key={capsule.capsule_serial} capsule={capsule} />
            ))}
          </div>
          <ol className="flex justify-center gap-1 text-xs font-medium mt-4 mb-6">
            <li>
              <button
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`block h-8 w-8 rounded ${
                  currentPage === i + 1
                    ? "border-violet-400 bg-violet-400 text-white"
                    : "border border-gray-100 bg-white text-center leading-8 text-gray-900"
                }`}
              >
                <button
                  href="#"
                  onClick={() => handlePageChange(i + 1)}
                  className="block h-8 w-8 text-center leading-8"
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ol>
        </>
      ) : (
        <p>No capsules found.</p>
      )}
    </div>
  );
};

export default CapsuleGrid;
