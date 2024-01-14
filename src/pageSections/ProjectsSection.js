import { ExternalLinkIcon } from "@heroicons/react/outline";
import React from "react";
import Masonry from "react-masonry-css";
import { CardSubtitle } from "../components/Card/CardSubtitle";
import { CardTitle } from "../components/Card/CardTitle";
import { ProjectCard } from "../components/Card/ProjectCard";
import { SectionContent } from "../components/Section/SectionContent";
import { SectionDiv } from "../components/Section/SectionDiv";
import { SectionTitle } from "../components/Section/SectionTitle";
import { SkillBadge } from "../components/SkillBadge";
import { StyledParagraph } from "../components/StyledParagraph";
import { projectsData } from "../data/projects";

export const ProjectsSection = ({ id, setActiveSectionId }) => {
  const projectList = projectsData.map((project, idx) => (
    <ProjectCard key={idx}>
      <div className="overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="object-cover w-full duration-300 transform border-epicyellow-normal hover:scale-105 h-44"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <CardTitle>{project.title}</CardTitle>
          <p className="py-2 mt-2 tracking-tight text-gray-100">
            {project.subtitle}
          </p>
        </div>
        <div className="my-2">
          <ul className="flex flex-wrap pl-4 my-2 tracking-tight gap-x-6">
            {project.linkListItems.map((item, idx) => (
              <li
                key={idx}
                className="px-2 py-1 my-3 list-none border rounded border-epicyellow-normal hover:bg-black"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-xs font-semibold duration-200 w-max sm:text-base hover:text-epicyellow-normal"
                >
                  <ExternalLinkIcon className="w-4 h-4 mt-0 mr-1 sm:mt-1" />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 border-t-2 border-epicyellow-normal">
          <CardSubtitle>{project.bottomSubtitle}</CardSubtitle>
          <ul className="flex flex-wrap gap-4 pt-2">
            {project.bottomListItems.map((item) => (
              <li key={item}>
                <SkillBadge colorClass="bg-epicyellow-normal hover:bg-epicyellow-light text-black text-sm">
                  {item}
                </SkillBadge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProjectCard>
  ));

  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">Personal Projects</SectionTitle>
      <StyledParagraph>
        These are some of my earlier personal projects, crafted for learning and
        enjoyment :)
      </StyledParagraph>
      <SectionContent>
        <Masonry
          breakpointCols={{
            default: 2,
            1200: 1,
          }}
          className="flex w-auto -ml-7"
          columnClassName="my-masonry-grid_column"
        >
          {projectList}
        </Masonry>
      </SectionContent>
    </SectionDiv>
  );
};
