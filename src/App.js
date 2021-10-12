import MyCat from "./MyCat";
import { AnimatedHeading } from "./AnimatedHeading";
import { FullPage, Slide } from 'react-full-page';
import { SectionTitle } from "./SectionTitle";
import React, { useRef, useState } from "react";
import { SkillBadge } from "./SkillBadge";
import { StyledParagraph } from "./StyledParagraph";
import { SectionDiv } from "./components/SectionDiv";
import { SectionContent } from "./components/SectionContent";
import { StyledCard } from "./components/Card/StyledCard";
import { CardSubtitle } from "./components/Card/CardSubtitle";

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

function CustomControls({ getCurrentSlideIndex, scrollToSlide }) {
  const currentSlideIndex = getCurrentSlideIndex();

  return (
    <div className="fixed right-12 top-20 hidden sm:block">
      <nav>
        <ul className="text-xl text-right px-4 py-2 border-r-2 border-epicyellow-normal">
          {
            linkNameList.map((linkName, idx) => (
              <li
                key={linkName}
                onClick={() => idx !== currentSlideIndex && scrollToSlide(idx)}
                className={`link-name-list-item
                cursor-pointer
                hover:text-epicyellow-light
                ${currentSlideIndex === idx ? 'text-epicyellow-normal' :
                    'text-gray-50'}
                `}
              >
                <span className={`inline-block transform duration-75 py-4
                ${currentSlideIndex === idx && 'translate-x-8 bg-black'}
                `}>
                  {linkName}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
function App() {
  const [scrollMode, setScrollMode] = useState('full-page')
  const [scrollY, setScrollY] = useState(0)

  const handleWheel = (e) => {
    setScrollY(window.scrollY)
  }

  return (
    <div
      className="relative"
      onWheel={handleWheel}
    >

      <FullPage controls={CustomControls} duration={500}
        scrollMode={scrollMode} // if some content need nested scroll container, can set to normal dynamically
      >
        <Slide>
          <div className="h-full flex items-center w-full sm:w-3/4 xl:w-1/2 ml-2 sm:ml-6 xl:ml-24">
            <div className="flex flex-col w-full">
              <AnimatedHeading defaultText="Hello." colorClass="text-gray-50" />
              <AnimatedHeading defaultText="I'm" colorClass="text-epicyellow-normal" />
              <AnimatedHeading defaultText="as dfgq qwae" colorClass="text-epicyellow-normal" name />
            </div>
          </div>
        </Slide>

        <Slide>
          <SectionDiv setScrollMode={setScrollMode} scrollY={scrollY}>
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
        </Slide>

        <Slide>
          <SectionDiv setScrollMode={setScrollMode} scrollY={scrollY}>
            <SectionTitle colorClass="text-gray-50">
              Experience
            </SectionTitle>
            <SectionContent>
              <div className=" gap-4">
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
        </Slide>


        <Slide>
          <SectionDiv setScrollMode={setScrollMode} scrollY={scrollY}>
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
        </Slide>
      </FullPage>


      <div className="fixed bottom-1 right-1 w-24 h-24 md:w-36 md:h-36 xl:w-48 xl:h-48 transform duration-500 hover:-rotate-6">
        <MyCat
          backgroundColor="#000"
        // backgroundColor="#e8ea26"
        />
      </div>
    </div>
  );
}

export default App;
