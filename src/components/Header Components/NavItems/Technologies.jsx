import { useState } from 'react';
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Technologies() {

  const tech = {
    "Web Development" : {
      mh : "Web Development",
      t1 : "Web Development Services",
    },
    "Backend" : {
      mh : "Backend",
      t1 : "Node JS",
      t2 : "Golang",
      t3  : "Java",
    },
    "Platform Partnerships" : {
        mh : "Platform Partnerships",
        t1 : "Salesforce",
        t2 : "AWS",
      },
    "Web 3.0" : {
        mh : "Web 3.0",
        t1 : "NFT Development",
        t2 : "Web 3.0 Real Estate Development",
        t3 : "Web 3.0 Store Development",
        t4 : "Decentralize Finance Development",
        t5 : "Digital Twins",
      },
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  function handleItemHover(item) {
    setHoveredItem(item);
  }

  function renderContent() {
    const item = tech[hoveredItem] || tech["App"];
    const content = [];
    if (item.mh) {
      content.push(<h1 id="nav__com__desc__heading">{item.mh}</h1>);
    }
    for (const [key, value] of Object.entries(item)) {
      if (key !== "mh") {
        content.push(<p id="nav__com__desc__h">{value}</p>);
      }
    }
    return (
      <div className="flex flex-col justify-start items-start gap-4 px-1 w-[50%] h-[40vh] border-s-2 pl-20">
        {content}
      </div>
    );
  }

  return (
    <div id="card__container">
      <div id="left__container">
        <div className="flex flex-col items-center justify-between">
        <div id="item__container"
          className='flex justify-center items-center gap-20 w-[100%] ml-7'
           onMouseEnter={() => handleItemHover("App")}>
                <div id="item__Tech_left" className='flex items-center gap-2 justify-start'>
                <LaunchIcon
                     sx={{ fontSize: 36, color: "#3B82F6", paddingRight: 1 }}
                />
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  App Dev 
                </h3>
              </div>
            <div id="item__tech_right">
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
          </div>
          <div id="item__container"
          className='flex justify-center items-center gap-20 w-[100%] ml-7'
           onMouseEnter={() => handleItemHover("Web")}>
                <div id="item__Tech_left" className='flex items-center gap-2 justify-start'>
                <LaunchIcon
                     sx={{ fontSize: 36, color: "#3B82F6", paddingRight: 1 }}
                />
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Web Dev
                </h3>
              </div>
            <div id="item__tech_right">
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
          </div>
          <div id="item__container"
          className='flex justify-center items-center gap-20 w-[100%] ml-7'
           onMouseEnter={() => handleItemHover("Backend")}>
                <div id="item__Tech_left" className='flex items-center gap-2 justify-start'>
                <LaunchIcon
                     sx={{ fontSize: 36, color: "#3B82F6", paddingRight: 1 }}
                />
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Backend
                </h3>
              </div>
            <div id="item__tech_right">
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
          </div>

          <div id="item__container"
          className='flex justify-center items-center gap-[53px] w-[100%] ml-7'
           onMouseEnter={() => handleItemHover("Platform Partnerships")}>
                <div id="item__Tech_left" className='flex items-center gap-2 justify-start'>
                <LaunchIcon
                     sx={{ fontSize: 36, color: "#3B82F6", paddingRight: 1 }}
                />
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Platform <br /> Partnerships
                </h3>
              </div>
            <div id="item__tech_right">
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
          </div>

          <div id="item__container"
          className='flex justify-center items-center gap-[86px] w-[100%] ml-7'
           onMouseEnter={() => handleItemHover("Web 3.0")}>
                <div id="item__Tech_left" className='flex items-center gap-2 justify-start'>
                <LaunchIcon
                     sx={{ fontSize: 36, color: "#3B82F6", paddingRight: 1 }}
                />
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Web 3.0
                </h3>
              </div>
            <div id="item__tech_right">
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
            </div>
          </div>
        </div>
      </div>
        <div className='w-[50%] text-sm'>
        {renderContent()}
        </div>
    </div>
  );
}

export default Technologies;