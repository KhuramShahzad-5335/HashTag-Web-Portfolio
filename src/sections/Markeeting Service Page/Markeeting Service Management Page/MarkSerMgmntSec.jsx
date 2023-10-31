/* eslint-disable react/no-unescaped-entities */
import mgmntOne from "./step1.webp";
import mgmntTwo from "./step2.webp";
import mgmntThree from "./step3.webp";
import mgmntFour from "./step4.webp";


function MarkSerMgmntSec() {
  return (
    <div className="flex flex-col ml-10 mr-10 mt-40 mb-20">
      <div className="flex items-center justify-center bg-[#FAFAFB] p-10 pl-10 pr-100 " id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">Creative Strategy</h1>
          <p id="ecom_mgmnts_maintext">
            Unlock Creativity and Advanced Social Media Strategies to Amplify Your Brand, Attract New Customers, and Boost Visibility. Our in-depth analysis of your niche enables us to identify the optimal approach, voice, content, and target audience for your brand
          </p>
        </div>
        <img src={mgmntThree} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
      </div>
      

      <div className="flex items-center justify-center gap-10 p-10" id="ecom_mgmnt_secs">
        <img src={mgmntFour} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">Campaign Management</h1>
          <p id="ecom_mgmnts_maintext">
          The original eye-catching viral campaign is everything. We produce content that generates value for you, and your customers. We collect & analyze data so you won’t have to. We know what’s working, what’s not, who’s your target audience, and most importantly how to get you ROI.
          </p>
        </div>
      </div>


      <div className="flex items-center justify-center gap-10 bg-[#FAFAFB] w-[100%] p-10" id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">Community Management
</h1>
          <p id="ecom_mgmnts_maintext">
          Social listening is crucial to successful brand management, understanding your space and your customers. It allows you to monitor inquiries and issues and resolve problems in a timely fashion. With our effective community management services, you can solve problems and turn customers service complaints into loyal fans! We have amazing tools and protocols in place to listen and monitor the social media community
          </p>
        </div>
        <img src={mgmntOne} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
      </div>

      <div className="flex items-center justify-center gap-10" id="ecom_mgmnt_secs">
      < img src={mgmntTwo} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">Paid Media</h1>
          <p id="ecom_mgmnts_maintext">
          We study your audience and create highly targeted ads on social media platforms. We analyze, A/B test, and track ROI to produce measurable results for your business
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarkSerMgmntSec;
