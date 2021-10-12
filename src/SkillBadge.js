import React from 'react'

export const SkillBadge = ({ children, colorClass }) => {
  return (
    <span className={`inline-block font-bold duration-200 px-4 py-2 mr-0 rounded-full
    ${colorClass}
    `}>
      {children}
    </span>
  )
}
