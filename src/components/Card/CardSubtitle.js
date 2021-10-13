import React from 'react'

export const CardSubtitle = ({ children }) => {
  return (
    <h4 className={`text-gray-100 italic font-semibold tracking-tight py-2
    text-base sm:text-lg
    `}>
      {children}
    </h4>
  )
}
