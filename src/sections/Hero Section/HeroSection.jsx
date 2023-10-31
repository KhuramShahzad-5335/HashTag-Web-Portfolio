/* eslint-disable react-hooks/exhaustive-deps */
import Animated_text_Comp from "../../components/Landing Page COmponents/Animated_text_Comp";

function HeroSection() {
  return (
    <div
      id="hero__section__container"
      className="flex items-center justify-evenly px-20 py-2 overflow-hidden"
    >
      <div id="h__description">
        <div id="animated__text">
          <Animated_text_Comp />
        </div>
        <h1 id="h__section__heading">
          Transforming Digital Ideas Into Reality
        </h1>
        <p id="h__section__desc">
          At HashTag Web we specialize in designing, building, shipping and
          scaling beautiful, usable products with blazing-fast efficiency.
        </p>
      </div>

      {/* loop image    */}
      <div className="parent-img">
      {/* <div className="prent_H">
          <div className="gallery_H">
            <img src="/1.png" alt="" />
            <img src="/2.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/4.png" alt="" />
            <img src="/5.png" alt="" />
            <img src="/6.png" alt="" />
          </div>
    </div> */}
    <div className="prent_H">
          <div className="gallery_H">
            <img src="/1.png" alt="" />
            <img src="/2.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/4.png" alt="" />
            <img src="/5.png" alt="" />
            <img src="/6.png" alt="" />
          </div>
    </div>
      </div>
    </div>
  );
}

export default HeroSection;


<div className="prent">
      <div className="gallery">
        <img src="/1.png" alt="" />
        <img src="/2.png" alt="" />
        <img src="/3.png" alt="" />
        <img src="/4.png" alt="" />
        <img src="/5.png" alt="" />
        <img src="/6.png" alt="" />
      </div>
</div>