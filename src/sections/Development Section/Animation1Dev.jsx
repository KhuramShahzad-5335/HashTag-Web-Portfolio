import { useEffect, useState } from "react";

function Animation1Dev() {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log("Current Scroll Y:", currentScrollY);
      // Debugging: Log the scroll position

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
  // console.log("Scroll Direction:", scrollDirection);

  return (
    <>
      <div
        id="Animation1Dev"
        className={
          scrollDirection === "scroll-up" ? "scroll-right" : "scroll-left"
        }
      >
        <div className="scroll-right">
          <div id="section8_animation">
            <img src="/6.png" alt=" ws" id="dev_animation_img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Animation1Dev;
