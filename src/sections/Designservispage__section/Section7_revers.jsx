import React, { useEffect, useState } from "react";
import "../../pages/Design Service Page/DesignServicePage.css";

function Section5_revers() {
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

  return (
    <>
      <div
        id="Section5_revers_1"
        className={
          scrollDirection === "scroll-up" ? "scroll-right" : "scroll-left"
        }
      >
        {
          <>
            <div id="section5_animation">
              <div className="animation-img">
                <img src="/animation_img11.png" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img2.jpg" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img9.jpg" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img17.png" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img3.jpg" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img16.png" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img17.png" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img18.jpg" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img10.jpg" alt="animation" />
              </div>
              <div className="animation-img">
                <img src="/animation_img11.jpg" alt="animation" />
              </div>
            </div>
          </>
        }
        {/* ... */}
      </div>
    </>
  );
}

export default Section5_revers;
