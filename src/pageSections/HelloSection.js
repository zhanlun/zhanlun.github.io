import React from 'react'
import { AnimatedHeading } from '../components/AnimatedHeading'
import { HigherSectionDiv } from '../components/Section/HigherSectionDiv'

export const HelloSection = ({ id, setActiveSectionId }) => {
  return (
    <HigherSectionDiv
      setActiveSectionId={setActiveSectionId}
      id={id} className={`h-screen flex items-center section-div
    border-b-2 border-epicyellow-normal
    `}>
      <div className="w-full sm:w-3/4 xl:w-1/2 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-36 whitespace-nowrap">
        <div className="flex flex-col w-full">
          <AnimatedHeading colorClass="text-gray-50" >
            Hello.
          </AnimatedHeading>
          <AnimatedHeading colorClass="text-epicyellow-normal" >
            I'm
          </AnimatedHeading>
          <AnimatedHeading colorClass="text-epicyellow-normal" >
            Ng Zhan Lun
          </AnimatedHeading>
        </div>
      </div>
    </HigherSectionDiv>
  )
}
