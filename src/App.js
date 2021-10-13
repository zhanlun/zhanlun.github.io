import MyCat from "./MyCat";
import { AnimatedHeading } from "./AnimatedHeading";
import { SectionTitle } from "./SectionTitle";
import React, { useEffect, useState } from "react";
import { SkillBadge } from "./SkillBadge";
import { StyledParagraph } from "./StyledParagraph";
import { SectionDiv } from "./components/SectionDiv";
import { SectionContent } from "./components/SectionContent";
import { StyledCard } from "./components/Card/StyledCard";
import { CardSubtitle } from "./components/Card/CardSubtitle";
import { HigherSectionDiv } from "./components/HigherSectionDiv";
import { useMediaQuery } from 'react-responsive'
import { experienceData } from "./data/experience";
import { projectsData } from "./data/projects";
import { CardTitle } from "./components/Card/CardTitle";
import { ProjectCard } from "./components/Card/ProjectCard";
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Masonry from 'react-masonry-css'

const linkNameList = ['Home', 'About', 'Experience', 'Projects', 'Contact']
const skillList = [
  'JavaScript',
  'React.js',
  'SQL',
  'Java',
  'Python',
  'ASP.NET',
  'HTML & CSS',
  'PHP',
]

function CustomControls({ activeSectionId, menuShow }) {

  return (
    <div className={`fixed right-12 z-20 top-20 pt-2 transform duration-500 h-full
    ${menuShow ? 'translate-y-0' : 'translate-y-full'}`
    }>
      <nav className="px-4 py-2 h-full rounded-l-lg bg-black bg-opacity-80 border-r-2 border-epicyellow-normal">
        <ul className="text-base sm:text-lg lg:text-xl text-right ">
          {
            linkNameList.map((linkName, idx) => (
              <li
                key={linkName}
                className={`link-name-list-item
                cursor-pointer
                hover:text-epicyellow-light
                text-gray-50
                `}
              >
                <a href={`#section-${idx + 1}`}
                  className={`
                  ${activeSectionId === `section-${idx + 1}` && 'active'}`}
                >
                  <span className={`inline-block transform duration-75 py-4 pl-4 pr-2 rounded-lg
                  `}>
                    {linkName}
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}


function App() {
  const [activeSectionId, setActiveSectionId] = useState('section-1')
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' })
  const [menuShow, setMenuShow] = useState(false)

  useEffect(() => {
    setMenuShow(!isMobile)
  }, [isMobile])

  const projectList = projectsData.map((project, idx) => (
    <ProjectCard key={idx}>
      <img src={project.img} className="border-epicyellow-normal transform duration-300 hover:rotate-2 h-44 w-full object-cover" />
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
              <li key={item} className="list-disc">{item}</li>
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
    <div
      className="relative scroll-container"
    >
      <CustomControls activeSectionId={activeSectionId} menuShow={menuShow} />

      <HigherSectionDiv
        setActiveSectionId={setActiveSectionId}
        id="section-1" className={`h-screen flex items-center section-div
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

      <SectionDiv id="section-2" setActiveSectionId={setActiveSectionId}>
        <SectionTitle colorClass="text-gray-50">
          About
        </SectionTitle>
        <SectionContent>
          <StyledParagraph>Hi, I'm Ng Zhan Lun. I'm a computer science graduate from Universiti Teknologi Malaysia.</StyledParagraph>
          <StyledParagraph>My current career focus is software development, especially in web development. Currently I love using React.js and its ecosystem to develop various web applications.</StyledParagraph>
          <StyledParagraph>Some of my skills are as follows:</StyledParagraph>
          <ul className="flex flex-wrap gap-4 mt-4">
            {
              skillList.map(skill => (
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
      <SectionDiv id="section-3" setActiveSectionId={setActiveSectionId}>
        <SectionTitle colorClass="text-gray-50">
          Experience
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
              experienceList
            }
          </Masonry>
        </SectionContent>
      </SectionDiv>
      <SectionDiv id="section-4" setActiveSectionId={setActiveSectionId}>
        <SectionTitle colorClass="text-gray-50">
          Projects
        </SectionTitle>
        <SectionContent>
          {/* <div className="flex flex-wrap gap-4 items-start"> */}

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
          {/* </div> */}
        </SectionContent>
      </SectionDiv>


      <div className="z-40 fixed bottom-1 right-1 w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 transform duration-500 hover:-rotate-6">
        <MyCat
          backgroundColor="#e8ea26"
          onClick={() => {
            setMenuShow(!menuShow)
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default App;
