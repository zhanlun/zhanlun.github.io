import MyCat from "./MyCat";
import { AnimatedHeading } from "./AnimatedHeading";
import { SectionTitle } from "./SectionTitle";
import React, { useState } from "react";
import { SkillBadge } from "./SkillBadge";
import { StyledParagraph } from "./StyledParagraph";
import { SectionDiv } from "./components/SectionDiv";
import { SectionContent } from "./components/SectionContent";
import { StyledCard } from "./components/Card/StyledCard";
import { CardSubtitle } from "./components/Card/CardSubtitle";
import { HigherSectionDiv } from "./components/HigherSectionDiv";

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
    <div className={`fixed right-12 top-20 pt-2 transform duration-500 h-full 
    ${menuShow ? 'translate-y-0' : 'translate-y-full'}`
    }>
      <nav className="px-4 py-2 h-full border-r-2 border-epicyellow-normal">
        <ul className="text-xl text-right ">
          {
            linkNameList.map((linkName, idx) => (
              // TODO
              // adjust the link background color
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
  const [menuShow, setMenuShow] = useState(true)

  return (
    <div
      className="relative scroll-container"
    >
      <CustomControls activeSectionId={activeSectionId} menuShow={menuShow} />

      {/* TODO
        PUT LOGIC INTO SECTION-1
      */}
      <HigherSectionDiv
        setActiveSectionId={setActiveSectionId}
        id="section-1" className={`h-screen flex items-center section-div
        border-b-2 border-epicyellow-normal
        `}>
        <div className="w-full sm:w-3/4 xl:w-1/2 ">
          <div className="flex flex-col w-full">
            <AnimatedHeading defaultText="Hello." colorClass="text-gray-50" />
            <AnimatedHeading defaultText="I'm" colorClass="text-epicyellow-normal" />
            <AnimatedHeading defaultText="as dfgq qwae" colorClass="text-epicyellow-normal" name />
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
          <ul className="flex flex-wrap select-none gap-4 mt-4">
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
          <div className="flex flex-wrap gap-4">
            <StyledCard>
              <div className="mb-2">
                <h3 className="text-gray-50 border-b-2 border-epicyellow-normal font-bold text-2xl tracking-tight pb-2">Internship</h3>
                <CardSubtitle>Huawei Technologies (Malaysia)</CardSubtitle>
              </div>
              <div className="my-2">
                <ul className="pl-4 my-2 tracking-wide">
                  <li className="list-disc">Involved in development & maintenance of internal systems</li>
                </ul>
              </div>
              <div className="mt-4 border-t-2 border-epicyellow-normal">
                <CardSubtitle>Technologies Used</CardSubtitle>
                <ul className="flex flex-wrap select-none gap-4 pt-2">
                  {
                    ['JavaScript', 'HTML & CSS', 'SQL', 'Huawei GDE'].map(skill => (
                      <li key={skill}>
                        <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                          {skill}
                        </SkillBadge>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </StyledCard>
            <StyledCard>
              <div className="mb-2">
                <h3 className="text-gray-50 border-b-2 border-epicyellow-normal font-bold text-2xl tracking-tight pb-2">Internship</h3>
                <CardSubtitle>Huawei Technologies (Malaysia)</CardSubtitle>
              </div>
              <div className="my-2">
                <ul className="pl-4 my-2 tracking-wide">
                  <li className="list-disc">Involved in development & maintenance of internal systems</li>
                </ul>
              </div>
              <div className="mt-4 border-t-2 border-epicyellow-normal">
                <CardSubtitle>Technologies Used</CardSubtitle>
                <ul className="flex flex-wrap select-none gap-4 pt-2">
                  {
                    ['JavaScript', 'HTML & CSS', 'SQL', 'Huawei GDE'].map(skill => (
                      <li key={skill}>
                        <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                          {skill}
                        </SkillBadge>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </StyledCard>
            <StyledCard>
              <div className="mb-2">
                <h3 className="text-gray-50 border-b-2 border-epicyellow-normal font-bold text-2xl tracking-tight pb-2">Internship</h3>
                <CardSubtitle>Huawei Technologies (Malaysia)</CardSubtitle>
              </div>
              <div className="my-2">
                <ul className="pl-4 my-2 tracking-wide">
                  <li className="list-disc">Involved in development & maintenance of internal systems</li>
                </ul>
              </div>
              <div className="mt-4 border-t-2 border-epicyellow-normal">
                <CardSubtitle>Technologies Used</CardSubtitle>
                <ul className="flex flex-wrap select-none gap-4 pt-2">
                  {
                    ['JavaScript', 'HTML & CSS', 'SQL', 'Huawei GDE'].map(skill => (
                      <li key={skill}>
                        <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                          {skill}
                        </SkillBadge>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </StyledCard>
          </div>
        </SectionContent>
      </SectionDiv>
      <SectionDiv id="section-4" setActiveSectionId={setActiveSectionId}>
        <SectionTitle colorClass="text-gray-50">
          About
        </SectionTitle>
        <SectionContent>
          <StyledParagraph>Hi, I'm Ng Zhan Lun. I'm a computer science graduate from Universiti Teknologi Malaysia.</StyledParagraph>
          <StyledParagraph>My current career focus is software development, especially in web development. Currently I love using React.js and its ecosystem to develop various web applications.</StyledParagraph>
          <StyledParagraph>Some of my skills are as follows:</StyledParagraph>
          <ul className="flex flex-wrap select-none gap-4 mt-4">
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


      <div className="fixed bottom-1 right-1 w-24 h-24 md:w-36 md:h-36 xl:w-48 xl:h-48 transform duration-500 hover:-rotate-6">
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
