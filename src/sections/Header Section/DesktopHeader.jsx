import CTAButton from "../../components/Header Components/CTAButton"
import DeskHeaderNavLinks from "../../components/Header Components/DeskHeaderNavLinks"
import { Link } from "react-router-dom"
import logo from "/hashtagweb.png"

function DesktopHeader() {
  return (
    <div className="flex justify-evenly items-center shadow-lg py-6 fixed top-0 left-0 w-[100%] bg-white" style={{zIndex : "9999"}}>
        <Link to="/">
          <img src={logo} alt="logo"  style={{width:"180px"}}/>
        </Link>
        <DeskHeaderNavLinks/>
        <CTAButton/>
    </div>
  )
}

export default DesktopHeader