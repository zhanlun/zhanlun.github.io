import React from 'react'

export const StyledCard = ({ children }) => {
  return (
    <div className={`rounded-lg p-4 w-72 xl:w-96 mx-4
      border-2 border-epicyellow-normal
      bg-gray-900 bg-opacity-0
      hover:bg-opacity-50
      duration-200
`}>
      {children}
    </div>
  )
}
