/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




function WhatWeDo(props) {

    const handleLinkClick = (tab) => {
        props.updateActiveTab(tab);
      };
    
  return (
    <div className="wwd text-gray-600" onMouseLeave={ () => handleLinkClick('')} onClick={() => handleLinkClick('')}>
        
        <div className="flex justify-around items-start gap-3 w-[100%]">

            <div className="flex flex-col justify-center items-start text-left">
                <h1 style={{fontSize : "18px", fontWeight : "500", textAlign : "left"}}>Keep Up With Us</h1>
                <ul className="flex flex-col justify-center items-start gap-2 mt-4">
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <InfoOutlinedIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/about-us">About Us</Link>
                        </li>
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <ContactPageOutlinedIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <RunningWithErrorsIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/process">Process</Link>
                    </li>
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <ConnectWithoutContactIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/engagement-model">Engagement Model</Link>
                    </li>
                    
                </ul>
            </div>

            <div className="flex flex-col justify-ceter items-start text-left">
                <h1 style={{fontSize : "18px", fontWeight : "500", textAlign : "left"}}>Join and Learn More</h1>
                <ul className="flex flex-col justify-start items-start gap-2 mt-4">
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <WorkHistoryOutlinedIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/careers">Careers</Link>
                        </li>
                    <li style={{fontSize :"16px", fontWeight : "600"}} id="wwa_navitem">
                        <FileCopyOutlinedIcon sx={{fontSize : "25px", marginRight : "20px"}}/>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center text-left gap-2">
                <h1 style={{fontSize : "18px", fontWeight : "500", textAlign : "left"}} className="text-blue-500">Our Customer Stories</h1>
                
                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 px-1 py-2 w-[400px] mb-2" id='nav_cards'>
                    <ShowChartOutlinedIcon sx={{width: "50px", height : "50px"}}/>
                    <div className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Yakka FX</h1>
                        <span style={{fontSize : "12px"}}>Yakka FX: Your One-Stop Online Marketplace for Trading and Investment Solutions</span>
                    </div>
                </div>

                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg px-1 py-2 w-[400px] shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 bg-[#3B82F6] text-white" id='nav_cards'>
                    <WebOutlinedIcon sx={{width: "50px", height : "50px"}}/>
                    <div className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Scintillate RCM</h1>
                        <span style={{fontSize : "12px"}}>Craft seamless cross-platform mobile apps with our expertise.</span>
                    </div>
                </div>

            <h1 className='text-blue-600 text-[14px] text-left cursor-pointer w-[100%]'>See All <ArrowForwardIcon sx={{fontSize : "16px"}} className='text-blue-500 ml-4 text-sm'/></h1>
            </div>

        </div>        
    </div>
  )
}

export default WhatWeDo