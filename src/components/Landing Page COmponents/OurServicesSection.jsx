/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img1 from "./b-1.png";
import img2 from "./b-2.png";
import img3 from "./b3.png";
import GraphicIcon from "./Graphic Design.png";

function OurServicesSection() {
  return (
    <div
      className="flex relative justify-center items-center mx-0"
      style={{ width: "100%" }}
    >
      <div
        className="background-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="image-scrolling2" style={{ opacity: 0.1 }}>
              <img src={img1} alt="Image 1" className="scroll-img" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="image-scrolling3" style={{ opacity: 0.1 }}>
              <img src={img2} alt="Image 1" className="scroll-img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-scrolling4" style={{ opacity: 0.1 }}>
              <img src={img3} alt="Image 1" className="scroll-img" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="image-scrolling5" style={{ opacity: 0.1 }}>
              <img src={img1} alt="Image 1" className="scroll-img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-scrolling6" style={{ opacity: 0.1 }}>
              <img src={img2} alt="Image 1" className="scroll-img" />
            </div>
          </div>
        </div>
        <div className="flex justify-center relative items-center mx-2 px-10 py-10">
          <div
            id="os_cont_cont"
            className="flex justify-center gap-4 items-center w-[100%]"
          >
            <div
              className="flex flex-col gap-2 lg:w-[100%] md:w-[100%] sm:[100%] xs:w-[90%] justify-center align-center"
              style={{ position: "relative", zIndex: 999 }}
            >
              <p
                style={{
                  fontFamily: "font-family: Kaushan, cursive",
                  fontSize: "38px",
                  color: "#777",
                }}
                id="givefont"
                className="flex justify-between items-center"
              >
                Design
                <img
                  src={GraphicIcon}
                  alt=""
                  width="700px"
                  className="
             xl:hidden lg:hidden md:block sm:block xs:block"

              style={{ zIndex: 999, width: "100px" }}
            />
            </p>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "rgb(28, 120, 206)",
              }}
            >
              Graphics Design
            </h1>
            <p className="xl:hidden lg:hidden md:hidden sm:block block " 
            style={{ fontSize: "16px", color: "aliceblue", lineBreak:"anywhere" }}>
              Elevate Your Brand's Presence With Our Expert Banner Design
              Services. Our Creative Process Combines Innovative Design Concepts
              With Your Unique Message To Create Visually Stunning Banners That
              Captivate Your Audience. Whether For Online Advertising Or ...
            </p>
            <p className="hidden sm:hidden md:hidden lg:block xl:block"
            style={{ fontSize: "18px", color: "aliceblue", width : "100%" }}>
              Elevate Your Brand's Presence With Our Expert Banner Design
              Services. Our Creative Process Combines Innovative Design Concepts
              With Your Unique Message To Create Visually Stunning Banners That
              Captivate Your Audience. Whether For Online Advertising Or
              Physical Displays, Our Banners Are Strategically Crafted To Make A
              Powerful Impact And Leave A Lasting Impression. Let Us Help You
              Stand Out And Effectively Communicate Your Brand's Identity
              Through Compelling Banner Designs That Drive Engagement And
              Success.
            </p>
            <Link to = "/design-services" className="mt-4 text-white hidden bg-[#666666] text-center w-56 py-2 text-md font-semibold rounded-xl hover:bg-[#52AEEE] hover:text-black"
            style={{zIndex: 99999}}
            >
              Read More
              </Link>
            </div>
            <img
              src={GraphicIcon}
              alt=""
              width="500px"
              id="dsp_c_micon"
              className="xl:block lg:block md:hidden sm:hidden hidden"
              style={{ zIndex: 999, width: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServicesSection;
