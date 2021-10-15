import React, { useEffect, useRef } from 'react'
import { navbarLinksData } from '../data/navbarLinks'

/**
 * From https://stackoverflow.com/a/42234988
 */
function useOutsideAlerter(ref, callback, blockCondition, dependencies) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (blockCondition(event)) {
        return
      }
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    // Bind the event listener
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('touchstart', handleClickOutside)
    };
  }, [ref, ...dependencies]);
}


export const Navbar = ({ activeSectionId, menuShow, setMenuShow, isMobile }) => {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => {
    isMobile && setMenuShow(false)
  },
    (event) => (document.querySelector('#mycatwrapper').contains(event.target)),
    [isMobile]
  )

  return (
    <div
      ref={wrapperRef}
      className={`fixed z-20
    navbar
    pt-2 transform duration-500 h-full
    ${menuShow ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`
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