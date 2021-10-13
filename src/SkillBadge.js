import React from 'react'

export const SkillBadge = ({ children, colorClass }) => {
  return (
    <span className={`inline-block select-none font-bold duration-200 px-4 py-2 mr-0 rounded-full
    text-xs sm:text-base
    ${colorClass}
    `}>
      {children}
    </span>
  )
}
