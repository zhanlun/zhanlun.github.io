import React, { useEffect, useRef, useState } from 'react'
import { HigherSectionDiv } from './HigherSectionDiv';

export const SectionDiv = (props) => {
  const { children } = props
  return (
    <HigherSectionDiv
      className={`min-h-screen py-10 px-4 md:px-8 lg:px-20 overflow-y-auto section-div
      border-b-2 border-epicyellow-normal
      `
      } {...props}>
      <div className={`bg-white bg-opacity-10 rounded-2xl px-8 pb-10 pt-6 mt-10
      w-full sm:w-3/4 lg:w-4/5
      
      `}>
        {children}
      </div>
    </HigherSectionDiv>
  )
}
