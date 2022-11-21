import React from 'react'
import { SectionContent } from '../components/Section/SectionContent'
import { SectionDiv } from '../components/Section/SectionDiv'
import { SectionTitle } from '../components/Section/SectionTitle'
import { SkillBadge } from '../components/SkillBadge'
import { StyledParagraph } from '../components/StyledParagraph'
import { skillsData } from '../data/skills'

export const AboutSection = ({ id, setActiveSectionId }) => {
  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">
        About
      </SectionTitle>
      <SectionContent>
        <StyledParagraph>Hi, I'm Ng Zhan Lun.</StyledParagraph>
        <StyledParagraph>I'm a software developer with a focus in web development.</StyledParagraph>
        <StyledParagraph>Currently, I love using various web technologies such as React to build applications.</StyledParagraph>
        <StyledParagraph>Some of my skills are as follows:</StyledParagraph>
        <ul className="flex flex-wrap gap-4 mt-4">
          {
            skillsData.map(skill => (
              <li key={skill}>
                <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black">
                  {skill}
                </SkillBadge>
              </li>
            ))
          }
        </ul>
      </SectionContent>
    </SectionDiv>
  )
}
