/* eslint-disable react/no-unescaped-entities */
import mgmntOne from "./stmnt-1.png";
import mgmntTwo from "./stmnt-2.png";
import mgmntThree from "./stmnt-3.png";
import mgmntFour from "./stmnt-4.png";


function EcomMgmntSec() {
  return (
    <div className="flex flex-col px-8 md:px-0 md:ml-10 md:mr-10 mt-10 mb-10">
      <div className="flex items-center justify-center md:bg-[#FAFAFB] p-10 pl-10 pr-100" id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext" >
            Welcome to our comprehensive guide on E-Commerce Management! In
            today's fast-paced digital landscape, managing an online store
            efficiently and effectively is paramount to success. Whether you're
            a seasoned e-commerce veteran or just starting out, this section
            will provide you with valuable insights into the world of e-commerce
            management.
          </p>
        </div>
        <img src={mgmntOne} alt="Management-Image" id="ecom_hero_mgmnt_img" />
      </div>


      <div className="flex items-center justify-center gap-10 p-10" id="ecom_mgmnt_secs">
        <img src={mgmntFour} alt="Management-Image" id="ecom_hero_mgmnt_img" />
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">What Is E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext">
            E-commerce management refers to the process of overseeing and optimizing all aspects of an online business, from product listings and inventory management to customer service and marketing. It involves a holistic approach to running an e-commerce store, ensuring seamless operations and a superior shopping experience for customers
          </p>
        </div>
      </div>


      <div className="flex items-center justify-center gap-10 md:bg-[#FAFAFB] w-[100%] p-10" id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management Importance</h1>
          <p id="ecom_mgmnts_maintext">
            Effective e-commerce management can make or break your online business. It's not just about selling products online; it's about creating a cohesive strategy that maximizes sales, minimizes costs, and keeps customers coming back for more. In an era where competition is fierce and customer expectations are high, mastering e-commerce management is a key differentiator.
          </p>
        </div>
        <img src={mgmntThree} alt="Management-Image" id="ecom_hero_mgmnt_img" />
      </div>

      <div className="flex items-center justify-center gap-10" id="ecom_mgmnt_secs">
        < img src={mgmntTwo} alt="Management-Image" id="ecom_hero_mgmnt_img" />
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">Components Of E-Commerce</h1>
          <p id="ecom_mgmnts_maintext">
            We study your audience and create highly targeted ads on social media platforms. We analyze, A/B test, and track ROI to produce measurable results for your business
          </p>
        </div>
      </div>
    </div>
  );
}

export default EcomMgmntSec;
