import OurServicesSection from "../../components/Landing Page COmponents/OurServicesSection";

import {useNavigate} from "react-router-dom"

function Services() {
  const navigate = useNavigate();
  return (
    <div id="service__section__container">
      <div id="services__section__header__container">
      <h1 id="services__section__subheading" className="ml-[120px] font-bold">What We Do</h1>
        <div id="services__sec_sot_cont"   className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col w-[100%] justify-center 2xl:gap-[470px] xl:gap-[370px] lg:gap-[370px] md:gap-[30px] sm:gap-[6px] gap-[6px] items-center">
        <h3 id="services__section__mainheading">
          Expert In Every Aspect Of Lifecycle
        </h3>
        <button
          type="button"
          id="services__section__button"
          onClick={() => {
            navigate("/design-service");
          }}
        >
          Our Services
        </button>
        </div>
      </div>
      

          <div className="relative lg:w-[90%] md:w-[90%] sm:w-[100%] h-auto mt-6">
              <OurServicesSection/>
          </div>



    </div>
  );
}

export default Services;
// service page is added