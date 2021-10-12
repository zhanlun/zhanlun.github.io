import React, { useRef } from 'react'

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

export const SectionDiv = (props) => {
  const { children, setScrollMode, scrollY } = props
  const refObj = useRef(null)

  const handleScroll = (e) => {
    const { scrollHeight, clientHeight, scrollTop } = refObj.current
    const hasVerticalScrollbar = scrollHeight > clientHeight;
    if (!hasVerticalScrollbar) {
      setScrollMode('full-page')
      return
    }
    if (!checkScrollDirectionIsUp(e) && (scrollTop + clientHeight + 1) > scrollHeight) {
      setScrollMode('full-page')
    } else if (checkScrollDirectionIsUp(e) && (scrollTop - 1) < 0) {
      setScrollMode('full-page')
    } else {
      setScrollMode('normal')
    }
  }

  const handleTouchMove = (e) => {
    console.log(e)
  }
  return (
    <div
      ref={refObj}
      onTouchStart={() => setScrollMode('normal')}
      onWheel={handleScroll}
      className={`h-full px-1 lg:px-20 overflow-y-auto
    ${'' //section-div
        }
    `
      } {...props}>
      {children}
    </div>
  )
}
