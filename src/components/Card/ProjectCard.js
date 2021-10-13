import React from 'react'

export const ProjectCard = ({ children }) => {
  return (
    <div className={`rounded w-60 sm:w-72 xl:w-96 mx-0 sm:mx-4 my-4
      overflow-hidden
    bg-black bg-opacity-10
      hover:bg-opacity-50
      duration-200
`}>
      {children}
    </div>
  )
}
