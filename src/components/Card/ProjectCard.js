import React from "react";

export const ProjectCard = ({ children }) => {
  return (
    <div
      className={`rounded w-full mx-0 sm:mx-4 my-8
      bg-black bg-opacity-50
      hover:bg-white hover:bg-opacity-5
      duration-200
`}
    >
      {children}
    </div>
  );
};
