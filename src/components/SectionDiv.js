import React, { useEffect, useRef, useState } from 'react'

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

const isElementXPercentInViewport = function (el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  console.log(rect)
  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};

export const SectionDiv = (props) => {
  const { children, setActiveSectionId, id } = props
  const refObj = useRef(null)
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  const handleScroll = (e) => {
    console.log(refObj.current)

    if (isElementXPercentInViewport(refObj.current, 50)) {
      setActiveSectionId(id)
    }
  }

  return (
    <div
      ref={refObj}
      // onMouseEnter={handleScroll}
      className={`min-h-screen py-10 lg:px-20 overflow-y-auto section-div
    `
      } {...props}>
      <div className="bg-white bg-opacity-5 rounded-xl">
        {children}
      </div>
    </div>
  )
}
