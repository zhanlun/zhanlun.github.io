import React from 'react'

export const StyledCard = ({ children }) => {
  return (
    <div className={`rounded p-4 w-60 sm:w-72 xl:w-96 mx-0 sm:mx-4 my-4
      border-2 border-epicyellow-normal
      bg-black bg-opacity-0
      hover:bg-opacity-50
      duration-200
`}>
      {children}
    </div>
  )
}
