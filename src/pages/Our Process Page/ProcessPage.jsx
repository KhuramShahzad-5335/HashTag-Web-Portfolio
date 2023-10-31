// import Header from "../../sections/Header Section/Header";
import Footer from "../../sections/Footer Section/Footer";
import EcomClientSatSec from "../../sections/ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent";
import Section1_process from "../../sections/Sections For Process Page/Section1_process";
import WorkedWithCI_Sec_LP from "../../sections/Worked With Companies Icons/WorkedWithCI_Sec_LP";

function ProcessPage() {
  return (
    <>
    <main className="xl:mt-24 lg:mt-24 md:mt-0 sm:mt-0 mt-4">
      <Section1_process/>
      <WorkedWithCI_Sec_LP/>
      <EcomClientSatSec/>
      <ContactUsComponent/>
    </main>

    <Footer/>

    </>
  )
}

export default ProcessPage