// import Header from "../../sections/Header Section/Header";
import Footer from "../../sections/Footer Section/Footer";
import Section1 from"../../sections/Designservispage__section/Section1"
import Section2 from "../../sections/Designservispage__section/Section2";
import Section3 from "../../sections/Designservispage__section/Section3";
import Section4 from "../../sections/Designservispage__section/Section4";
import Section6 from "../../sections/Designservispage__section/Section6";
import Section5_revers from "../../sections/Designservispage__section/Section5_revers";
import Section7_revers from "../../sections/Designservispage__section/Section7_revers";
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent";

function DesignServicePage() {
  return (
    <div id="design__page__container" className="md:pt-24">
        {/* <Header/> */}
        <main>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5_revers/>
        <Section6/>
        <Section7_revers/>
        <EcomClientSatSec/>
        <ContactUsComponent/>
        </main>
        <Footer />
    </div>
  )
}

export default DesignServicePage