import { useEffect, useState } from "react";
import "../../pages/Design Service Page/DesignServicePage.css";

function Animation2Dev() {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection("scroll-up");
      } else {
        setScrollDirection("scroll-down");
      }

      // Update previous scroll position
      setPrevScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  // Debugging: Log the scroll direction

  return (
    <>
      <div
        id="Animation2Dev"
        className={
          scrollDirection === "scroll-up" ? "scroll-right" : "scroll-left"
        }
        style={{margin :"100px 0"}}
      >
        <div id="section7_animation">
          <div className="gallery">
            <img src="/1.png" alt="" className="loopimg" />
            <img src="/2.png" alt="" className="loopimg" />
            <img src="/3.png" alt="" className="loopimg" />
            <img src="/4.png" alt="" className="loopimg" />
            <img src="/5.png" alt="" className="loopimg" />
            <img src="/1.png" alt="" className="loopimg" />
            <img src="/2.png" alt="" className="loopimg" />
            <img src="/3.png" alt="" className="loopimg" />
            <img src="/4.png" alt="" className="loopimg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Animation2Dev;
