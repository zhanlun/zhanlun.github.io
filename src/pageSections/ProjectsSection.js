import { ExternalLinkIcon } from '@heroicons/react/outline'
import React from 'react'
import Masonry from 'react-masonry-css'
import { CardSubtitle } from '../components/Card/CardSubtitle'
import { CardTitle } from '../components/Card/CardTitle'
import { ProjectCard } from '../components/Card/ProjectCard'
import { SectionContent } from '../components/Section/SectionContent'
import { SectionDiv } from '../components/Section/SectionDiv'
import { projectsData } from '../data/projects'
import { SectionTitle } from '../components/Section/SectionTitle'
import { SkillBadge } from '../components/SkillBadge'

export const ProjectsSection = ({ id, setActiveSectionId }) => {
  const projectList = projectsData.map((project, idx) => (
    <ProjectCard key={idx}>
      <div className="overflow-hidden">
        <img src={project.img} alt={project.title} className="border-epicyellow-normal transform duration-300 hover:scale-105 h-44 w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="text-gray-100 tracking-tight py-2 mt-2">
            {project.subtitle}
          </p>
        </div>
        <div className="my-2">
          <ul className="flex flex-wrap gap-x-6 pl-4 my-2 tracking-tight">
            {
              project.linkListItems.map((item, idx) => (
                <li key={idx} className="list-none my-3 border px-2 py-1 rounded border-epicyellow-normal hover:bg-black">
                  <a href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-max text-xs sm:text-base font-semibold hover:text-epicyellow-normal duration-200"
                  >
                    <ExternalLinkIcon className="w-4 h-4 mt-0 sm:mt-1 mr-1" />
                    {item.text}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="mt-4 border-t-2 border-epicyellow-normal">
          <CardSubtitle>{project.bottomSubtitle}</CardSubtitle>
          <ul className="flex flex-wrap gap-4 pt-2">
            {
              project.bottomListItems.map(item => (
                <li key={item}>
                  <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                    {item}
                  </SkillBadge>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </ProjectCard>
  )
  )

  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">
        Projects
      </SectionTitle>
      <SectionContent>
        <Masonry
          breakpointCols={{
            default: 2,
            1200: 1,
          }}
          className="flex -ml-7 w-auto"
          columnClassName="my-masonry-grid_column">
          {
            projectList
          }
        </Masonry>
      </SectionContent>
    </SectionDiv>

  )
}
