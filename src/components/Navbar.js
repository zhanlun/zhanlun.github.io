import React from 'react'
import { navbarLinksData } from '../data/navbarLinks'

export const Navbar = ({ activeSectionId, menuShow }) => {

  return (
    <div className={`fixed z-20
    navbar
    pt-2 transform duration-500 h-full
    ${menuShow ? 'translate-y-0' : 'translate-y-full'}`
    }>
      <nav className="px-4 py-2 h-full rounded-l-lg bg-black bg-opacity-80 border-r-2 border-epicyellow-normal">
        <ul className="text-xs sm:text-sm lg:text-xl text-right">
          {
            navbarLinksData.map((link, idx) => (
              <li
                key={link.id}
                className={`link-name-list-item
                cursor-pointer
                hover:text-epicyellow-light
                text-gray-50
                `}
              >
                <a href={`#${link.id}`}
                  className={`
                  ${activeSectionId === link.id ? 'active' : ''}`}
                >
                  <span className={`inline-block transform duration-75 py-4 pl-4 pr-2 rounded-lg
                  `}>
                    {link.title}
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