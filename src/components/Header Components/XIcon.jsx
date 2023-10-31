import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Header_SM from "../../sections/Header Section/Header For SmallScreens/Header_SM";

function XIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={handleTogglePopover}>
        <CloseIcon sx={{ fontSize: 32, marginRight : 3, color : "GrayText" }} />
      </div>
      {isOpen && <Header_SM />}
    </div>
  );
}

export default XIcon;