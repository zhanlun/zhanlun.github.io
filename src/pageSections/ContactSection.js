import React from 'react'
import { SectionContent } from '../components/Section/SectionContent'
import { SectionDiv } from '../components/Section/SectionDiv'
import { SectionTitle } from '../components/Section/SectionTitle'
import { StyledParagraph } from '../components/StyledParagraph'
import { MailIcon } from '@heroicons/react/outline'
import { BsGithub } from 'react-icons/bs'

export const ContactSection = ({ id, setActiveSectionId }) => {
  return (
    <SectionDiv id={id} setActiveSectionId={setActiveSectionId}>
      <SectionTitle colorClass="text-gray-50">
        Contact
      </SectionTitle>
      <SectionContent>
        <StyledParagraph>
          <span className="flex flex-wrap">
            <MailIcon className="w-6 h-6 mt-0.5 mr-2" />
            Email —&nbsp;
            <a href="mailto:zhanlun.ng@gmail.com"
              className="hover:text-epicyellow-normal duration-200">
              zhanlun.ng@gmail.com
            </a>
          </span>
        </StyledParagraph>
        <StyledParagraph>
          <span className="flex">
            <BsGithub className="w-6 h-6 mt-0.5 mr-2" />
            <a href="https://github.com/zhanlun" target="_blank"
              className="hover:text-epicyellow-normal duration-200">
              Github
            </a>
          </span>
        </StyledParagraph>
      </SectionContent>
    </SectionDiv>
  )
}
