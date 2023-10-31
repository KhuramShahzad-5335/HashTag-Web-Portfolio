import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Popover({ children, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [popoverRef]);

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div
        className="cursor-pointer"
        onClick={handleTogglePopover}
      >
        {children}
      </div>
      {isOpen && (
        <div className="absolute right-[-150px] top-[61px] ml-0 mt-2 w-auto border-none">
          {content}
        </div>
      )}
    </div>
  );
}

Popover.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

export default Popover;