import React from 'react'
import Masonry from 'react-masonry-css'
import { CardSubtitle } from '../components/Card/CardSubtitle'
import { CardTitle } from '../components/Card/CardTitle'
import { StyledCard } from '../components/Card/StyledCard'
import { SectionContent } from '../components/Section/SectionContent'
import { SectionDiv } from '../components/Section/SectionDiv'
import { experienceData } from '../data/experience'
import { SectionTitle } from '../components/Section/SectionTitle'
import { SkillBadge } from '../components/SkillBadge'

export const ExperienceSection = ({ id, setActiveSectionId }) => {

  const experienceList = experienceData.map((experience, idx) => (
    <StyledCard key={idx}>
      <div className="mb-2">
        <CardTitle>{experience.title}</CardTitle>
        <CardSubtitle>{experience.subtitle}</CardSubtitle>
      </div>
      <div className="my-2">
        <ul className="pl-4 my-2 tracking-wide">
          {
            experience.listItems.map(item => (
              <li key={item} className="mb-3 list-disc">{item}</li>
            ))
          }
        </ul>
      </div>
      <div className="mt-4 border-t-2 border-epicyellow-normal">
        <CardSubtitle>{experience.bottomSubtitle}</CardSubtitle>
        <ul className="flex flex-wrap gap-4 pt-2">
          {
            experience.bottomListItems.map(item => (
              <li key={item}>
                <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                  {item}
                </SkillBadge>
              </li>
            ))
          }
        </ul>
      </div>
    </StyledCard>
  ))

  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">
        Experience
      </SectionTitle>
      <SectionContent>
        <Masonry
          breakpointCols={{
            default: 2,
            1200: 1,
          }}
          className="flex w-auto -ml-7"
          columnClassName="my-masonry-grid_column">
          {
            experienceList
          }
        </Masonry>
      </SectionContent>
    </SectionDiv>
  )
}
