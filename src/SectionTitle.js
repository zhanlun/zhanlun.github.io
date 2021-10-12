import React from 'react'

export const SectionTitle = ({ children, colorClass }) => {
  return (
    <div
      className="animated-text w-3/4"
    >
      <span
        className={
          `
        inline-block
        leading-7 py-4 text-2xl md:text-4xl
        font-bold tracking-wide
        mt-4
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
