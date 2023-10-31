import "./AboutUsPage.css"
// import Header from "../../sections/Header Section/Header"
import AUHero_Section from "../../sections/About Us Page/About US Hero Section/AUHero_Section"
import EnvShowCase from "../../sections/About Us Page/EnvShowCase/EnvShowCase"
import AUOurComp from "../../sections/About Us Page/Our Company Section/AUOurComp"
import AbtHashTagWebSec from "../../sections/About Us Page/About Hashtagweb Section/AbtHashTagWebSec"
// import AbtOurTeam from "../../sections/About Us Page/Our Team Section/AbtOurTeam"
import WorkedWithCI_Sec_LP from "../../sections/Worked With Companies Icons/WorkedWithCI_Sec_LP"
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec"
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent"
import Footer from "../../sections/Footer Section/Footer"

function AboutUsPage() {
  return (
    <>
      {/* <Header/> */}
        <main className="xl:mt-36 lg:mt-36 md:mt-0 sm:mt-0 mt-0">
          <AUHero_Section/>
          <EnvShowCase/>
          <AUOurComp/>
          <AbtHashTagWebSec/>
          {/* <AbtOurTeam/> */}
          <WorkedWithCI_Sec_LP/>
          <EcomClientSatSec/>
          <ContactUsComponent/>
        </main>
      <Footer/>
    </>
  )
}

export default AboutUsPage