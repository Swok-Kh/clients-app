import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <p className="text-xl font-semibold text-white">Loading...</p>
    </div>
  );
};

export default Loader;
