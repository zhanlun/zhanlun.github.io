import React from 'react'

export const StyledParagraph = ({ children }) => {
  return (
    <p className="text-base lg:text-lg xl:text-xl leading-loose font-semibold tracking-wider py-2 my-2">
      {children}
    </p>
  )
}
