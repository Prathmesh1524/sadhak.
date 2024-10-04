import React from "react";

const FloatingCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <div className="relative">
   
        <div className="w-80 h-52 bg-white shadow-lg rounded-lg p-6 mb-4 absolute top-0 left-0 animate-right-to-left delay-[4s]">
          <h2 className="text-xl font-bold">Land a job</h2>
          <p className="text-gray-600">Find Everything in One Website.</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCards;
