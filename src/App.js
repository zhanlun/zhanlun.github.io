import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { CatWrapper } from "./components/FloatingCat/CatWrapper";
import { Navbar } from "./components/Navbar";
import { navbarLinksData } from "./data/navbarLinks";

function App() {
  const [activeSectionId, setActiveSectionId] = useState(navbarLinksData[0].id)  // take first section as default active section
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' })
  const [menuShow, setMenuShow] = useState(false)

  useEffect(() => {
    setMenuShow(!isMobile)
  }, [isMobile])

  useEffect(() => {
    window.history.replaceState(undefined, undefined, '#' + activeSectionId)
  }, [activeSectionId])

  return (
    <div
      className="relative scroll-container"
    >
      <Navbar activeSectionId={activeSectionId} menuShow={menuShow} setMenuShow={setMenuShow} isMobile={isMobile} />

      {
        navbarLinksData.map((link, idx) => (
          <link.component key={idx} id={link.id} setActiveSectionId={setActiveSectionId} />
        ))
      }

      <CatWrapper menuShow={menuShow} setMenuShow={setMenuShow} />
    </div>
  );
}

export default App;
