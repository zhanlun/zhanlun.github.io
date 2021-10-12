import React from 'react'

export const StyledCard = ({ children }) => {
  return (
    <div className={`rounded-lg p-4 w-60 sm:w-72 xl:w-96 mx-4
      border-2 border-epicyellow-normal
      bg-white bg-opacity-0
      hover:bg-opacity-5
      duration-200
`}>
      {children}
    </div>
  )
}
