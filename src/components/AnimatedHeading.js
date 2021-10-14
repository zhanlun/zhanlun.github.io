import React from 'react'

export const AnimatedHeading = ({ children, colorClass }) => {
  return (
    <div
      className="animated-text"
    >
      <span
        className={
          `leading-7 py-4 text-5xl md:text-8xl
        font-bold tracking-tighter
        block
        transform
        duration-200
        ease-in-out
        ${colorClass}
        `
        }
      >
        {children}
      </span>
    </div>
  )
}
