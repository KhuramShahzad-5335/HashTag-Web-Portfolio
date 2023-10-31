import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import top1 from "./top1.jpg";
import top2 from "./top2.jpg";

function MarkeetingDashBoardSection() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <div id="smsp_ds_wrapper" className="flex justify-center items-center relative mt-20 mb-20">
        <motion.img
        src={top2} 
        alt="" 
        id="smsp_d_p_ico" 
        className="absolute w-[30%] z-1 top-30 right-90 shadow-3xl "
        animate={{ y: visible ? 0 : -30, scale: visible ? 1 : 0.9, transition: { duration: 1 } }}
        />
        <motion.img 
        src={top1} 
        alt="" 
        id="smsp_d_p_ico" 
        className="absolute w-[40%] z-1 bottom-0 left-0 shadow-3xl "
        animate={{ y: visible ? 0 : 30, scale: visible ? 1 : 0.9, transition: { duration: 1 } }}
        
        />
    </div>
  )
}

export default MarkeetingDashBoardSection