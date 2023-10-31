/* eslint-disable react/no-unescaped-entities */
import "../../pages/Engagementmodal Page/EngagmentModal.css";
function Eng_section1() {
  return (
    <>
      {/* s1  */}
      <div className="pro_section1_container">
        <div className="col">
          <h3 className="h3_2_pro">Turning Ideas Into Reality</h3>
          <h3 className="h3_1">A Strategic Approach to Bring You Closer to Your Business Goals</h3>
          <p className="p_1">
            At Hashtag Web, we ensure maximum value for your investment. Our solutions guarantee sustainable ROIs, catering to both SMEs and large 
            enterprises. Our tailored engagement models align with your specific business needs, focusing on project understanding and benefit maximization.
          </p>
          <button className="btn_1">Lets Talk</button>
        </div>
        <div className="col2">
          <img
            src="/Social Dashboard-rafiki -1- engag.svg"
            alt="img"
            className="image_hero"
          />
        </div>
      </div>
      {/* s2   rev */}
      <div className="pro_section2_container">
        <div className="col_rev">
          <h3 className="h3_2_rev">What Sets Us Apart?</h3>
          <h3 className="h3_1">
            We Build Solutions That Are Tailored To Your Business.
          </h3>
          <p className="p_1_rev">
          At Hashtag Web, we pride ourselves on crafting customized solutions that cater to your unique business needs. Our web design and development frameworks are versatile, 
          accommodating individual specifications while meeting broader app development requirements.
          </p>
          <p className="p_1_rev">
          This allows you to focus on your core strengths. With a global clientele spanning diverse industries, 
          we offer integrated approaches, leveraging the expertise of our specialists. Our engagement models are tailored to your specific business 
          requirements and industry standards, underpinned by years of experience and a track record of exceptional results.
          </p>
        </div>
        <div className="col2">
          <img
            src="/brand loyalty-rafiki-2-engag.svg"
            alt="img"
            className="image_1"
          />
        </div>
      </div>
      {/* s3   */}
      <div className="pro_section1_container">
        <div className="col">
          <h3 className="h3_2">The Fixed Price Model</h3>
          {/* <h3 className="h3_1">A Plan To Bring Us Closer To Your Business</h3>   */}
          <p className="p_1">
          For projects with a clear vision and specific requirements, we offer the Fixed Price Model. This approach includes a detailed plan with cost estimates, timelines, and milestones. Payments are linked to these milestones, ensuring transparency and progress tracking.
          </p>
          <p className="p_1">
          Project design and costs are agreed upon at contract signing. Any changes due to market dynamics are made with mutual consent.
          </p>
        </div>
        <div className="col2">
          <img
            src="/Pricing plans-rafiki_3_engag.svg"
            alt="img"
            className="image_1"
          />
        </div>
      </div>
      {/* s4 rev */}
      <div className="pro_section2_container">
        <div className="col_rev">
          <h3 className="h3_2_rev">The Dynamic Time and Material Approach</h3>
          {/* <h3 className="h3_1">
            We Build Solutions That Are Tailored To Your Business.
          </h3> */}
          <p className="p_1_rev">
            For projects in continuous flux without well-defined parameters, the Time and Material (T&M) Model is ideal. We integrate your ideas and project vision at each stage, ensuring adaptable milestones. Payments are linked to resource hours.
          </p>
          <p className="p_1_rev">
            With T&M, you actively influence project progress, shaping priorities and enabling rapid changes. You only pay for the actual hours worked, ensuring cost-effectiveness.
          </p>
        </div>
        <div className="col2">
          <img
            src="/Customer Survey-rafiki-3-engag.svg"
            alt="img"
            className="image_1"
          />
        </div>
      </div>
      {/* s5  */}
      <div className="pro_section1_container">
        <div className="col">
          <h3 className="h3_2">Your Dedicated Team</h3>
          {/* <h3 className="h3_1">A Plan To Bring Us Closer To Your Business</h3> */}
          <p className="p_1">
          For substantial, long-term projects, the Dedicated Team Model is the ultimate solution. It's like 'renting' your dream team from us, featuring top experts, including developers, designers, project managers, and writers - everything you need to power your project. This model boosts project flexibility and nurtures its potential.
          </p>
          <p className="p_1">
          With the Dedicated Team Model, you take the reins of your project, with professionals who seamlessly integrate as your extended team. The hassle of hiring, retention, and administration is eliminated. This model strikes the perfect balance between value and flexibility, providing a closely monitored team dedicated to your project's success.
          </p>
        </div>
        <div className="col2">
          <img src="/Team work-pana.svg" alt="img" className="image_1" />
        </div>
      </div>
      {/* bg bg bg container he bhai  */}
      <div id="pro_container_bg_2">
        <h3 className="h3_bg">Choosing the Perfect Engagement Model </h3>
        <p className="p_bg" style={{textAlign:"center", marginTop:"20px"}}>
          Selecting the right methodology for your project is pivotal in securing cost-effective marketability. Market trends are in constant flux, 
          evolving with every step. Thus, it's crucial to make an informed choice through thorough research.
        </p>
        <p className="p_bg" style={{textAlign:'center',marginTop:"30px"}}>
          At Hashtag Web, we recognize your diverse requirements. If you find yourself uncertain about the engagement models listed above, our team is 
          here to craft custom models tailored to your unique needs. Your project's success is our priority.
        </p>
      </div>
    </>
  );
}

export default Eng_section1;
