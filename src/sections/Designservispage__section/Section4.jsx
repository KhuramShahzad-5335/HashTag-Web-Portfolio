import React, { useEffect, useState } from "react";
import "../../pages/Design Service Page/DesignServicePage.css";

function Section4() {
  const [scrollDirection, setScrollDirection] = useState("scroll-down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection("scroll-down");
      } else {
        setScrollDirection("scroll-up");
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
        id="section_4_animation_1"
        className={
          scrollDirection === "scroll-down" ? "scroll-right" : "scroll-left"
        }
      >
        {
          <>
            <div id="section4_animation">
              <div className="animation-img">
                <img src="/animation_img1.png" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img2.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img3.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img4.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img5.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img6.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img7.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img8.png" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img9.jpg" alt="image 1" />
              </div>
              <div className="animation-img">
                <img src="/animation_img10.jpg" alt="image 1" />
              </div>
            </div>
          </>
        }
        {/* ... */}
      </div>
    </>
  );
}

export default Section4;
