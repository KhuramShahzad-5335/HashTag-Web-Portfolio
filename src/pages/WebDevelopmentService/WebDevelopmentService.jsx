import "./WebDevelopmentService.css";
// import Header from "../../sections/Header Section/Header";
import Footer from "../../sections/Footer Section/Footer";
import Section_1_dev from "../../sections/Development Section/Section_1_dev";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent";
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec";
import WorkedWithCI_Sec_LP from "../../sections/Worked With Companies Icons/WorkedWithCI_Sec_LP";

function WebDevelopmentService() {
  return (
    <div id="webdev__page__wrapper" className="md:pt-24">
      {/* <Header /> */}
      <main>
        <Section_1_dev />
        <WorkedWithCI_Sec_LP/>
        <EcomClientSatSec />
        <ContactUsComponent />
      </main>
      <Footer />
    </div>
  );
}

export default WebDevelopmentService;
