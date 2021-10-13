import React from 'react'

export const CardTitle = ({ children }) => {
  return (
    <h3 className="text-gray-50 border-b-2 border-epicyellow-normal font-bold text-2xl tracking-tight pb-2">
      {children}
    </h3>
  )
}
