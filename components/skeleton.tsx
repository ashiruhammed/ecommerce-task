import React from "react";

function Skeleton() {
  return (
    <div className="skeleton-container animate-pulse h-[405px]">
      <div className="flex flex-col md:flex-row gap-10 max-h-[405px]">
        <div className="h-48 w-64 bg-gray-200 rounded-lg"></div>

        <div className="flex flex-col justify-between basis-6/12">
          <div className="space-y-3">
            <div className="h-7 bg-gray-200 rounded-lg"></div>
            <div className="flex space-x-2 items-center">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="h-5 bg-gray-200 rounded-md"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded-lg"></div>
            <div className="flex space-x-2 items-center">
              <div className="w-5 h-5 bg-gray-200 rounded-md"></div>
              <div className="h-5 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          <div className="pt-7 border-t border-gray-200 flex flex-col gap-4">
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="h-7 w-14 bg-gray-200 rounded-md"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
