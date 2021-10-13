import React from 'react'
import { SectionContent } from '../components/SectionContent'
import { SectionDiv } from '../components/SectionDiv'
import { SectionTitle } from '../SectionTitle'
import { SkillBadge } from '../SkillBadge'
import { StyledParagraph } from '../StyledParagraph'
import { skillsData } from '../data/skills'

export const AboutSection = ({ id, setActiveSectionId }) => {
  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">
        About
      </SectionTitle>
      <SectionContent>
        <StyledParagraph>Hi, I'm Ng Zhan Lun. I'm a computer science graduate from Universiti Teknologi Malaysia.</StyledParagraph>
        <StyledParagraph>My current career focus is software development, especially in web development. Currently I love using React.js and its ecosystem to develop various web applications.</StyledParagraph>
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
