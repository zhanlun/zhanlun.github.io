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
        <StyledParagraph>Hi, I'm Ng Zhan Lun. I'm a computer science graduate from Universiti Teknologi Malaysia.</StyledParagraph>
        <StyledParagraph>My current career focus is software development, especially in web development. Currently, I love using various technologies such as React.js, Node.js and Java to develop various applications.</StyledParagraph>
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
