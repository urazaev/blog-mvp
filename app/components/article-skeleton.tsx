import React from "react";

const ArticleSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 max-w-4xl mx-auto flex w-full">
      <div className="w-1/2">
        <div className="h-56 bg-gray-300 rounded-l-lg animate-pulse"></div>
      </div>
      <div className="w-1/2 p-5 flex flex-col justify-between">
        <div>
          <div className="h-4 bg-gray-300 rounded mb-2  animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-5  animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded mb-2  animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded mb-2  animate-pulse"></div>
        </div>
        <div className="bg-blue-300 rounded w-24 h-8 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
