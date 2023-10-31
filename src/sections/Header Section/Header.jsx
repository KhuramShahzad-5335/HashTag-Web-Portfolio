import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (

    <div>


      {isMobile ? <MobileHeader /> : <DesktopHeader />}


    </div>
  );

}

export default Header;