import React from "react";

export const StyledCard = ({ children }) => {
  return (
    <div
      className={`rounded p-4 w-full mx-0 sm:mx-4 my-8
      border-2 border-epicyellow-normal
      bg-black bg-opacity-0
      hover:bg-opacity-90
      duration-200
`}
    >
      {children}
    </div>
  );
};
