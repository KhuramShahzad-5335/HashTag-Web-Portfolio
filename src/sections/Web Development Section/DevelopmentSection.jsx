import { useEffect, useRef } from "react";

function DevelopmentSection() {
  const parentRef = useRef(null);
  useEffect(() => {
    const parentContainer = parentRef.current;
    const textSecDev = document.querySelector(".text-sec-dev");
    const handleScroll = () => {
      const parentRect = parentContainer.getBoundingClientRect();
      const textSecDevRect = textSecDev.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const parentTop = parentRect.top + scrollY;
      const parentBottom = parentRect.bottom + scrollY - textSecDevRect.height;
      // Adjust the position of textSecDev based on the scroll position relative to the parent container
      textSecDev.style.top = `${Math.max(
        Math.min(scrollY - parentTop, parentBottom - parentTop),
        0
      )}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="dev-sec-container">
      <div className="pro-abu-relative" ref={parentRef}>
        <div className="text-sec-dev">
          <h1 id="development__sec_subheading">Develop</h1>
          <h3 id="development__sec_mainheading">Web Development</h3>
          <p className="text-sec-dev-pra">
            Website Is An Asset For Your Business In Digital Era. Your Website
            Should Be A Machine That Generate Leads For Your Business And
            Convert Them Into Sales. It Should Work As A Sales Funnel. Your
            Website Should Be A Demon And Grab Every Possible Customer As You
            Can Possible Handle.
          </p>
          {/* <button
            id="services__section__button"
            style={{ margin: "10px  0px" }}
          >
            Read More
          </button> */}
        </div>
      </div>
      <div className="row-image-sec">
        <div className="col1-image-sec">
          <img src="/1.png" alt="img" className="col-image-dev-sec" />
          <img src="/2.png" alt="img" className="col-image-dev-sec" />
          <img src="/3.png" alt="img" className="col-image-dev-sec" />
          <img src="/4.png" alt="img" className="col-image-dev-sec" />
          <img src="/5.png" alt="img" className="col-image-dev-sec" />
          <img src="/6.png" alt="img" className="col-image-dev-sec" />
        </div>
        <div className="col2-image-sec">
          <img src="/4.png" alt="img" className="col-image-dev-sec" />
          <img src="/5.png" alt="img" className="col-image-dev-sec" />
          <img src="/6.png" alt="img" className="col-image-dev-sec" />
          <img src="/1.png" alt="img" className="col-image-dev-sec" />
          <img src="/2.png" alt="img" className="col-image-dev-sec" />
          <img src="/3.png" alt="img" className="col-image-dev-sec" />
        </div>
      </div>
    </div>
  );
}

export default DevelopmentSection;
