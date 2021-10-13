import React, { useEffect, useRef, useState } from 'react'

const isElementXPercentInViewport = function (el) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  if (rect.top < 0 && rect.bottom > windowHeight) {
    return true
  }
  // else height less than window, then check if is over 51 %
  if (rect.top >= 0 && (rect.top + 1 < windowHeight) && (windowHeight - rect.top) / windowHeight > 0.5) {
    return true
  }
  if ((rect.top < -1) && rect.bottom / windowHeight > 0.5) {
    return true
  }

  return false
};

export const HigherSectionDiv = (props) => {
  const { children, setActiveSectionId, id } = props
  const refObj = useRef(null)
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  const handleScroll = (e) => {
    if (isElementXPercentInViewport(refObj.current)) {
      setActiveSectionId(id)
      setTimeout(() => {
        // check again after scrolling by link, if is actually this page, update history
        isElementXPercentInViewport(refObj.current) && window.history.replaceState(undefined, undefined, '#' + id)
      }, 500);
    }
  }

  return (
    <div
      ref={refObj}
      {...props}
    >
      {children}
    </div>
  )
}
