// import Header from '../../sections/Header Section/Header'
import Footer from '../../sections/Footer Section/Footer'
import MarkServPageHero from "../../sections/Markeeting Service Page/Markeeting Hero Section/MarkServPageHero"
import SocialMedChanSec from "../../sections/Markeeting Service Page/Social Media Channels Section/SocialMedChanSec"
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent"
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec"
import MarkeetingDashBoardSection from "../../sections/Markeeting Service Page/Markeeting Dashboard Section/MarkeetingDashBoardSection" 
import MarkSerMgmntSec from "../../sections/Markeeting Service Page/Markeeting Service Management Page/MarkSerMgmntSec"
import MarkRWSliderSec from "../../sections/Markeeting Service Page/Markeeting Recent Work Slider/MarkRWSliderSec"

function MarkeetingServicePage() {
  return (
    <div id="mservice__page__wrapper" className="md:pt-24">
        {/* <Header /> */}
        <main>
          <MarkServPageHero/>
          <SocialMedChanSec/>
          <MarkeetingDashBoardSection/>
          <MarkSerMgmntSec/>
          <MarkRWSliderSec/>
          <EcomClientSatSec/>
          <ContactUsComponent/>
        </main>
        <Footer />
    </div>
  )
}

export default MarkeetingServicePage