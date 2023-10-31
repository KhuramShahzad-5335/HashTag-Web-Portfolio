import { Link } from "react-router-dom"
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";

function DeskHeaderNavLinks() {
  const [activeTab, setActiveTab] = useState(null);

  const updateActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center gap-8 text-[0.9rem] font-[400]">
         <ul className="flex justify-center items-center gap-10 text-[#6f6f6f]">
          <li id={activeTab === 'navitem0' ? "active-navItem" : "navitem0"} onMouseEnter={() => setActiveTab('navitem0')} onMouseLeave={() => setActiveTab('')}><Link to="/process" id="navLinkSizes">The Hashtag Web Way</Link></li>

          <li className="flex gap-1" id={activeTab === 'navitem1' ? "active-navItem" : "navitem1"} onMouseEnter={() => setActiveTab('navitem1')}>
            <Link className="flex gap-[2px] items-center justify-center">
              <span id="navLinkSizes">What We Do</span>
                <ArrowDropDownIcon sx={{fontSize: "20px"}}/>
            </Link>
          </li>

          <li id={activeTab === 'navitem2' ? "active-navItem" : "navitem2"}><Link to="/engagement-model" onMouseEnter={() => setActiveTab('navitem2')} onMouseLeave={() => setActiveTab('')} id="navLinkSizes">How We Engage</Link></li>
          
          <li id={activeTab === 'navitem3' ? "active-navItem" : "navitem3"} className="flex gap-2" style={{border: "2px solid rgba(10, 0, 0, 0.2)",borderRadius: "18px",padding: "10px"}} onMouseEnter={() => setActiveTab('navitem3')}>
            <Link className="flex gap-[20px] items-center justify-center hover:text-blue-600">
            <img src="/technical-support.png" alt="tech services icon"  className="w-[20px]"/>
            <span id="navLinkSizes">Who We Are</span>
                <ArrowDropDownIcon sx={{fontSize: "20px"}}/>
            </Link>
          </li>
         </ul>
        {activeTab === 'navitem1' && <WhoWeAre updateActiveTab={updateActiveTab} />}
        {activeTab === 'navitem3' && <WhatWeDo updateActiveTab={updateActiveTab}/>}
    </div>
  )
}

export default DeskHeaderNavLinks