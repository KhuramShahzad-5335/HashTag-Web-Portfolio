// import Header from "../../sections/Header Section/Header";
import Footer from "../../sections/Footer Section/Footer";
import ContactUsComponent from "../../components/Contact Us/ContactUsComponent";
import Contactus_section from "./Contactus_section"


function Contactus() {
  return (
    <div className="md:pt-36">
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