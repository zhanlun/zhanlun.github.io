import React from 'react'

export const SectionContent = (props) => {
  return (
    <div className="pt-6" {...props}>
      {props.children}
    </div>
  )
}
