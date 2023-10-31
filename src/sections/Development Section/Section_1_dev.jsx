/* eslint-disable react/no-unescaped-entities */
import "../../pages/WebDevelopmentService/WebDevelopmentService.css";
import "./Animation1Dev";
import Animation1Dev from "./Animation1Dev";
import Animation2Dev from "./Animation2Dev";

function Section_1_dev() {
  return (
    <>
      <div id="Dev_container">
        <h1 id="dev_h1">Website Is The Most Powerful Marketing Tool</h1>

        <button id="dev_container_btn">Let's Develop Your Website</button>
      </div>
      <Animation1Dev /> 
      {/* section 1  */}
      <div id="dev-section-row">
        <div id="dev-section-col1">
          <h1 className="col1-h1">Web Development Services</h1>
          <p className="col1-pra">
          HashtagWeb is a premier web development agency with a team of top web developers in Pakistan. Share your project vision with us, and we will turn it into a reality. Our expertise spans a wide spectrum, from e-commerce solutions to comprehensive web development services. You're certain to be delighted with the website we craft for you. Partner with us for your next web development project, and we'll ensure your site is delivered on time and within budget.
          </p>
        </div>
        <div id="dev-section-col2">
          <img src="/Tablet Image.png" alt="img" className="col2-img" />
        </div>
      </div>
      {/* /* add animation content here  */}
      {/* section 2 */}
      {/* <div id="dev-section2-row2">
        <div id="dev-section-col1">
          <h1 className="col1-h1_Revrs">Responsive Website Design</h1>
          <p className="col1-pra_Revrs">
          At Hashtag Web, we appreciate the significance of responsive websites. 
          According to Google, failure to optimize for mobile screens can result in a loss of more than 60% of web traffic. 
          We specialize in crafting responsive websites that dynamically adjust to the user's device—be it a mobile, tablet, or desktop. 
          This adaptability ensures a seamless user experience and drives higher conversion rates. Hashtag Web is the trusted full-service agency for affordable, 
          top-quality responsive web design services.
          </p>
        </div>
        <div id="dev-section-col2">
          <img src="/frontend-png-1-1-1-1.png" alt="img" className="col2-img" />
        </div>
      </div> */}
      {/* section 3  */}
      <div id="dev-section-row">
        <div id="dev-section-col1">
          <h1 className="col1-h1">Quality Web Development</h1>
          <p className="col1-pra">
            HashtagWeb is a web development agency that has top web developers
            in Pakistan. Tell us what you want to develop and we will bring it
            to fruition. From e-commerce to web development services, we do
            everything in between. You will definitely love the website we will
            develop for you. Hire us for your next website development project
            and get your web developed within your time and budget.
          </p>
        </div>
        <div id="dev-section-col2">
          <img src="/responsive.png" alt="img" className="col2-img" />
        </div>
      </div>
      {/* section 4 */}
      <div id="dev-section2-row2">
        <div id="dev-section-col1">
          <h1 className="col1-h1_Revrs">Responsive Website Design</h1>
          <p className="col1-pra_Revrs">
            We understand the power of responsive websites. According to Google,
            you are losing more than 60% of your web traffic if your website is
            not optimized for mobile screens. That’s why we at Buzz Interactive
            design responsive websites that adapts to the size of the mobile,
            tablet or desktop a user is using to view it. So you can see higher
            conversions. Buzz Interactive is the best full-service responsive
            web design services agency that is offering quality responsive
            website development services at an affordable price
          </p>
        </div>
        <div id="dev-section-col2">
          <img src="/mobile-png-1-1-1-1.png" alt="img" className="col2-img" />
        </div>
      </div>

      <Animation2Dev />

      {/* animation two  2  */}
    </>
  );
}

export default Section_1_dev;
