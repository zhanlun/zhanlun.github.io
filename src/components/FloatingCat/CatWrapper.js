import React from 'react'
import MyCat from './MyCat'

export const CatWrapper = ({ menuShow, setMenuShow }) => {
  return (
    <div className="z-40 fixed bottom-1 right-1 w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 transform duration-500 hover:-rotate-6">
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
