import { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Popover from './PopOver';
import WhatWeDo from "./NavItems/WhatWeDo"
import WhoWeServe from './NavItems/WhoWeServe';
import Technologies from './NavItems/Technologies';
import HowWeEngage from './NavItems/HowWeEngage';
import WhoWeAre from './NavItems/WhoWeAre';

function NavLink({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  
  };

  return (
    <Popover content={content}>
      <div
        className="flex items-center py-2 text-[#8B8B8B] font-semibold hover:text-[#005CF1]"
        onClick={handleTogglePopover}
      >
        {label}
        {isOpen ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 18 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
        )}
      </div>
    </Popover>
  );
}

function NavLinks() {
  const navLinks = [
    { label: 'What We Do', content: <WhatWeDo /> },
    { label: 'Who We Serve', content: <WhoWeServe /> },
    { label: 'Technologies', content: <Technologies /> },
    { label: 'How we engage', content: <HowWeEngage /> },
    { label: 'Who we are', content: <WhoWeAre /> },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <nav className="flex space-x-4 text-[#8B8B8B] z-20">
      {navLinks.map((navLink, index) => (
        <NavLink
          key={navLink.label}
          label={navLink.label}
          content={navLink.content}
          onClick={() => handleNavLinkClick(index)}
        />
      ))}
    </nav>
  );
}


NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default NavLinks;