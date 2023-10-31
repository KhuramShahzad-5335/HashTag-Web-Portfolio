// import Header from "../../sections/Header Section/Header";
import Footer from "../../sections/Footer Section/Footer";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent";
import Contactus_section from "./Contactus_section"


function Contactus() {
  return (
    <div className="xl:pt-36 lg:pt-36 md:pt-0 sm:pt-0 pt-18">
    {/* <Header/> */}
    <main>
        <Contactus_section/>
        <ContactUsComponent/>
    </main>
    <Footer />
    </div>
  )
}

export default Contactus