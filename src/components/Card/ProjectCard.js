import React from 'react'

export const ProjectCard = ({ children }) => {
  return (
    <div className={`rounded w-60 sm:w-72 xl:w-96 m-4
    bg-black bg-opacity-0
      hover:bg-opacity-50
      duration-200
`}>
      {children}
    </div>
  )
}
