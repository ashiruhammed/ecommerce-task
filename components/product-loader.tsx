import React from "react";

function ProductSkeletonLoader() {
  return (
    <div className="font-bold flex flex-col items-center gap-2 animate-pulse">
      <div className="w-[195px] h-[260px] max-h-[260px] relative rounded-lg bg-gray-200">
        <div className="absolute inset-0 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="text-center">
        <p className="text-[#252b42] h-4 bg-gray-300 rounded mb-2"></p>
        <p className="text-[#737373] h-2 bg-gray-400 rounded mb-2"></p>
        <p className="flex items-center">
          <span className="w-4 bg-gray-300 rounded mr-2"></span>
          <span className="w-6 bg-gray-400 rounded"></span>
        </p>
      </div>
    </div>
  );
}

export default ProductSkeletonLoader;
