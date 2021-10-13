import { HelloSection } from "../pageSections/HelloSection";
import { AboutSection } from "../pageSections/AboutSection";
import { ExperienceSection } from "../pageSections/ExperienceSection";
import { ProjectsSection } from "../pageSections/ProjectsSection";

export const navbarLinksData = [
  {
    id: 'hello',
    title: 'Hello',
    component: HelloSection,
  },
  {
    id: 'about',
    title: 'About',
    component: AboutSection,
  },
  {
    id: 'experience',
    title: 'Experience',
    component: ExperienceSection,
  },
  {
    id: 'projects',
    title: 'Projects',
    component: ProjectsSection,
  },
  {
    id: 'contact',
    title: 'Contact',
    component: AboutSection,
  },
]