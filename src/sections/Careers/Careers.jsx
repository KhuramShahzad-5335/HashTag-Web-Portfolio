import ThreeCards from './ThreeCards'
import JoinTeam from './JoinTeam'
import CareerHero from './CareerHero'
// import Header from '../Header Section/Header'
import Footer from '../Footer Section/Footer'
import BGBlackBanner from './BGBlackBanner'
import ContactUsComponent from '../../components/Contact Us/ContactUsComponent'
import WorkedWithCI_Sec_LP from '../Worked With Companies Icons/WorkedWithCI_Sec_LP'
import EcomClientSatSec from '../ECommerce Service Page/Ecom Client Satisfaction/EcomClientSatSec'

const Careers = () => {
    return (
       <div>
            {/* <Header /> */}
            <div className="flex-grow p-4 ">
                <div className="grid grid-cols-1  md:pl-16 pt-2">
                    <CareerHero />
                </div>
            </div>
          
            <ThreeCards />
            <BGBlackBanner />
            <JoinTeam />
            <WorkedWithCI_Sec_LP/>
            <EcomClientSatSec/>
            <ContactUsComponent />
            <Footer />
        </div>
    )
}

export default Careers
