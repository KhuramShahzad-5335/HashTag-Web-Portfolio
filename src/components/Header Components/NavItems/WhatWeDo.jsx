import { useState } from 'react';
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function WhatWeDo() {

  const wwd = {
    "Strategy Conceling" : {
        mh : "Strategy Conceling",
        t1 : "Discovery Workshop",
        t2 : "Digital Transformation",
        t3 : "Tech Audit & Advisory",
        t4 : "Data Maturity & Assessmenet",
    },
    "Solutions Engineering" : {
      mh : "Solutions Engineering",
      t1 : "Custom SOftware Development",
      t2 : "Quality Assurance & Testing",
      t3 : "Interprise Integration Services",
      t4 : "Cloud Services",
    },
    "Data Services & Solutions" : {
      mh : "Data Services & Solutions",
      t1 : "Data Strategy",
      t2 : "Data Science",
      t3 : "AI & Machine Learning",
      t4 : "Data Engineering",
    },
    "Design Studio" : {
      mh : "Design Studio",
      t1 : "User Experience Design",
      t2 : "Design Systems",
      t3 : "UX Audit",
      t4 : "User Reseach",
      t5 : "Brand Identity Workshops",
      t6 : "Startup Bootcamps",
    },
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  function handleItemHover(item) {
    setHoveredItem(item);
  }

  function renderContent() {
    const item = wwd[hoveredItem] || wwd["Strategy Conceling"];
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
        <div className="flex flex-col">
          <div id="item__container" onMouseEnter={() => handleItemHover("Strategy Conceling")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Strategy Conceling
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Define and answer strategic bussiness questions.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Solutions Engineering")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Solutions Engineering
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Build tailored solutions to meet your needs.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Data Services & Solutions")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Data Services & Solutions
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Foster growth with data driven approach.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Design Studio")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Design Studio
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Create extraordinary product & services experiences.
              </p>
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

export default WhatWeDo;