import React from 'react'
import { AnimatedHeading } from '../AnimatedHeading'
import { HigherSectionDiv } from '../components/HigherSectionDiv'

export const HelloSection = ({ id, setActiveSectionId }) => {
  return (
    <HigherSectionDiv
      setActiveSectionId={setActiveSectionId}
      id={id} className={`h-screen flex items-center section-div
    border-b-2 border-epicyellow-normal
    `}>
      <div className="w-full sm:w-3/4 xl:w-1/2 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-36 whitespace-nowrap">
        <div className="flex flex-col w-full">
          <AnimatedHeading defaultText="Hello." colorClass="text-gray-50" />
          <AnimatedHeading defaultText="I'm" colorClass="text-epicyellow-normal" />
          <AnimatedHeading defaultText="Ng Zhan Lun" colorClass="text-epicyellow-normal" name />
        </div>
      </div>
    </HigherSectionDiv>
  )
}
