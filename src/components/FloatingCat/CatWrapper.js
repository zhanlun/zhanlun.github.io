import React from 'react'
import MyCat from './MyCat'

export const CatWrapper = ({ menuShow, setMenuShow }) => {
  return (
    <div className="z-40 fixed bottom-1 right-1 w-12 h-12 sm:w-16 sm:h-16 lg:w-28 lg:h-28 xl:w-40 xl:h-40 transform duration-500 hover:-rotate-6">
      <MyCat
        backgroundColor="#e8ea26"
        onClick={() => {
          setMenuShow(!menuShow)
        }}
        className="cursor-pointer"
      />
    </div>
  )
}
