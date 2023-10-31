import Footer from "../../sections/Footer Section/Footer";
import EComSerHeroSec from "../../sections/ECommerce Service Page/ECome Service Page Hero Sec-KS/EComSerHeroSec";
import EcomServiceProvidedServices from "../../sections/ECommerce Service Page/Ecom Section Provided Services/EcomServiceProvidedServices";
import EcomMgmntSec from "../../sections/ECommerce Service Page/ECom Management Section/EcomMgmntSec"
import EComRecentWork from "../../sections/ECommerce Service Page/ECom Recent Work Section/EComRecentWork";
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent"
import WorkedWithCI_Sec_LP from "../../sections/Worked With Companies Icons/WorkedWithCI_Sec_LP";

function EComServicePage() {
  return (
    <div className="ecom__service__page__container md:pt-24">
        {/* <Header/> */}
        <main>
            <EComSerHeroSec/>
            <EcomServiceProvidedServices/>
            <EcomMgmntSec/>
            <EComRecentWork/>
            <WorkedWithCI_Sec_LP/>
            <EcomClientSatSec/>
            <ContactUsComponent/>
        </main>
        <Footer/>
    </div>
  )
}

export default EComServicePage