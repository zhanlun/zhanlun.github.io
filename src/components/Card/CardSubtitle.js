import React from 'react'

export const CardSubtitle = ({ children }) => {
  return (
    <h4 className={`text-gray-100 font-semibold tracking-wide py-2 mt-2
    text-base
    `}>
      {children}
    </h4>
  )
}
