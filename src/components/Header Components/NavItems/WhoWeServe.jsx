import { useState } from 'react';
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function WhoWeServe() {

  const wws = {
    "Featured Work" : {
        mh : "Featured Work",
    },
    "Industries" : {
      mh : "Industries",
      t1 : "Mobility & Logistics",
      t2 : "On-Demand Services",
      t3 : "On-Demand Delievery",
      t4 : "Financial Services",
      t5 : "Health Care",
    },
    "Business Sizes" : {
      mh : "Business Sizes",
      t1 : "Startups",
      t2 : "Enterprises",
    },
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  function handleItemHover(item) {
    setHoveredItem(item);
  }

  function renderContent() {
    const item = wws[hoveredItem] || wws["Featured Work"];
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
          <div id="item__container" onMouseEnter={() => handleItemHover("Featured Work")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Featured Work
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Get inspired by stories of success we helped our clients achieve.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Industries")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Industries
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Leverage expertise across a wide range of industries.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Business Sizes")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Business Size
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Explore our services tailored to your business size.
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

export default WhoWeServe;