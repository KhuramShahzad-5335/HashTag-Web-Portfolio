/* eslint-disable no-unused-vars */
import "./RPSection.css"
import { useState, useEffect } from "react"
import RecentProjectsSM from "./RecentProjectsSM"
import TestComponent from "../../components/TestComponent"

function RPSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {windowWidth > 800 && <TestComponent/> }
      {windowWidth <= 800 &&  <RecentProjectsSM/>}
    </div>
  )
}

export default RPSection