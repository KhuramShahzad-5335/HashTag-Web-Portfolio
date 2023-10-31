import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import amazon from "./amazon.png";
import shopify from "./shopify.png";
import ebay from "./ebay.png";

function EcomServiceProvidedServices() {
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
    <div className="flex flex-col gap-7">
      <h1 id="ecom_ps_main_heading">Services We Provide</h1>
      <div
        id="ecom__ps__img__cont"
        className="flex items-center justify-center mb-20"
      >
        <motion.img
          src={ebay}
          alt="ebay-image"
          id="ecom_ps_micons"
          animate={{ y: visible ? 0 : 50 }} // Change the animation properties here
        />
        <motion.img
          src={amazon}
          alt="amazon-image"
          id="ecom_ps_micons"
          animate={{ y: visible ? 0 : -50 }} // Change the animation properties here
        />
        <motion.img
          src={shopify}
          alt="shopify-image"
          id="ecom_ps_micons"
          animate={{ y: visible ? 0 : 100 }} // Change the animation properties here
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

export default EcomServiceProvidedServices;