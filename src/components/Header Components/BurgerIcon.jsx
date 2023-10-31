import { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import Header_SM from "../../sections/Header Section/Header For SmallScreens/Header_SM";

function BurgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={handleTogglePopover}>
        <MenuIcon sx={{ fontSize: 32, marginRight : 3, color : "GrayText" }} />
      </div>
      {isOpen && <Header_SM />}
    </div>
  );
}

export default BurgerIcon;