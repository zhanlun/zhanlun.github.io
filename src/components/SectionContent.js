import React from 'react'

export const SectionContent = (props) => {
  return (
    <div className="pt-6 w-full sm:w-3/4 lg:w-4/5" {...props}>
      {props.children}
    </div>
  )
}
