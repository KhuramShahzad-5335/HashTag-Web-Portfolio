import { useState } from 'react';
import { Link } from 'react-router-dom';
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HowWeEngage() {
  const hwe = {
    "Our Process": {
      mh: "Our Process",
      t1: "/process", // Link to "Our Process" page
    },
    "Engagement Model": {
      mh: "Engagement Model",
      t1: "/engagement-model", // Link to "Engagement Model" page
    },
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  function handleItemHover(item) {
    setHoveredItem(item);
  }

  function renderContent() {
    const item = hwe[hoveredItem] || hwe["Our Process"];
    const content = [];
    if (item.mh) {
      content.push(<h1 id="nav__com__desc__heading">{item.mh}</h1>);
    }
    for (const [key, value] of Object.entries(item)) {
      if (key !== "mh") {
        if (key === "t1" && value) {
          content.push(
            <Link to={value} key={key}>
              <p id="nav__com__desc__h">{item.mh}</p>
            </Link>
          );
        } else {
          content.push(<p id="nav__com__desc__h">{value}</p>);
        }
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
          <div id="item__container" onMouseEnter={() => handleItemHover("Our Process")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Our Process
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Get inspired by stories of success we helped our clients achieve.
              </p>
            </div>
          </div>
          <div id="item__container" onMouseEnter={() => handleItemHover("Engagement Model")}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                  Engagement Model
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Leverage expertise across a wide range of industries.
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

export default HowWeEngage;
