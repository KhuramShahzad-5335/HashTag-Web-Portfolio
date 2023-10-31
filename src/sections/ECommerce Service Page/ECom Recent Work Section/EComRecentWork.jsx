import imgOne from "./rw-1.png";
import imgTwo from "./rw2.png";
import imgThree from "./rw3.png";

function EComRecentWork() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
        <h1 id="ecom_rw_main_heading">Recent Work</h1>
        <div className="flex items-center justify-center gap-5 flex-wrap w-[100%] mb-16" id="ecom_rw_img_cont">
            <img src={imgOne} alt="recent-work-image" id="ecom_rw_img"/>
            <img src={imgTwo} alt="recent-work-image" id="ecom_rw_img"/>
            <img src={imgThree} alt="recent-work-image" id="ecom_rw_img"/>
        </div>
    </div>
  )
}

export default EComRecentWork