/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FB from "./m_g_facebook.png";
import Insta from "./m_g_insta.png";
import Tiktok from "./m_g_tiktok.png";
import Twitter from "./m_g_twitter.png";
import Whatsapp from "./m_g_whatapp.png";
import { motion } from "framer-motion";

function MarketingSection() {
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
    <motion.div id="mar__sec__container">
      <div id="media__icons">
        <motion.img
          animate={{
            y: visible ? 0 : -30,
            scale: visible ? 1.5 : 1.3,
            transition: { duration: 1 },
          }}
          src={Twitter}
          alt="Facebook Icon"
        />
      </div>
      <div id="media__icons">
        <motion.img
        animate={{ y: visible ? 0 : 50, scale: visible ? 1 : 1.1, transition: { duration: 1 } }}
        src={FB} alt="Instagram Icon Icon" />
      </div>
      <div id="media__icons">
        <motion.img
        animate={{ y: visible ? 0 : 40, scale: visible ? 1 : 1.1, transition: { duration: 1 } }}
        src={Insta} alt="Twitter Icon" />
      </div>
      <div id="media__icons">
        <motion.img
        animate={{ y: visible ? 0 : -30, scale: visible ? 1.2 : 1.3, transition: { duration: 1 } }}
        src={Tiktok} alt="Tiktok Icon" />
      </div>
      <div id="media__icons">
        <motion.img 
        animate={{ y: visible ? 0 : -50, scale: visible ? 1.5 : 1.3, transition: { duration: 1 } }}
        src={Whatsapp} alt="Whatsapp Icon" />
      </div>

      <h1 id="mar__sec__subheading">Marketing</h1>
      <h3 id="mar__sec__mainheading">Social Media Marketing</h3>
      <p id="mar__sec__desc">
        Social Media Marketing A Great Method To Bring Sales For Your Business.
        Do You Know There Are 226 Million On Facebook, 2 Billion On Instagram, 1
        Billion TikTok And 875 Million Active Users On LinkedIn. So, If You Are
        Ignoring Social Media You Are Ignoring Billion Of Customers. I Know You
        Don’t Want To Ignore Them.
      </p>
      <button
        id="mar__sec__cta__button"
        onClick={() => alert("Ruko zara sbr kro")}
      >
        Read More
      </button>
    </motion.div>
  );
}

export default MarketingSection;
