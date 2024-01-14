import React from "react";
import { SectionContent } from "../components/Section/SectionContent";
import { SectionDiv } from "../components/Section/SectionDiv";
import { SectionTitle } from "../components/Section/SectionTitle";
import { SkillBadge } from "../components/SkillBadge";
import { StyledParagraph } from "../components/StyledParagraph";
import { skillsData } from "../data/skills";

export const AboutSection = ({ id, setActiveSectionId }) => {
  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">About</SectionTitle>
      <SectionContent>
        <StyledParagraph>
          Hello there, I'm Zhan Lun. I'm currently a frontend developer doing
          mobile development with React Native. Check out some of my skills as
          follows:
        </StyledParagraph>
        <ul className="flex flex-wrap gap-4 mt-4">
          {skillsData.map((skill) => (
            <li key={skill}>
              <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black">
                {skill}
              </SkillBadge>
            </li>
          ))}
        </ul>
      </SectionContent>
    </SectionDiv>
  );
};
