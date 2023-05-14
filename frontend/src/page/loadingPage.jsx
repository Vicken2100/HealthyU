import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#45b85e] to-[#92BB9B] h-screen w-screen flex items-center justify-center">
      <div className="animate-pulse rounded-full h-20 w-20 border-4 border-[#97a59a]"></div>
    </div>
  );
};

export default LoadingPage;