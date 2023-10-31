import SatisfactionIcon from "./c-icon-2.png"
import CompletedICon from "./c-icon-1.png"
import DesignREsourcesIcon from "./c-icon-3.png"

function FeedbackSection() {
  return (
    <div id="feedback__section__container" className="py-32">
        <div id="fbs_headings container" className="w-[70%] flex flex-col">
        <h1 id="f_S_section_subheading" className="text-[#0074FF]">We Are Hashtag Web</h1>
        <h3 id="f__section__heading" className="text-[#5A5656] font-semibold sm:text-justify xl:block lg:block md:block sm:hidden hidden">Our on-demand Creative Design team excels at efficiently, shaping your vision.</h3>
        <h3 id="f__section__heading-1" className="text-[#5A5656] font-semibold sm:text-justify xl:hidden lg:hidden md:hidden sm:block hidden">Our on-demand Creative Design team excels at efficiently shaping your vision.</h3>
        </div>
        <div id="f__section__cards__container">
            <div id="f__card__1">
                <img src={SatisfactionIcon} alt="Client Satisfaction Icon" id="f__card__icon" className="w-[50px]"/>
                <div id="f__card_description">
                    <p id="f__card__num">100%</p>
                    <p id="f__card__desc">Client Satisfaction</p>
                </div>
                </div>

            <div id="f__card__1">
            <img src={CompletedICon} alt="Project Completed Icon" id="f__card__icon" className="w-[50px]"/>
                <div id="f__card_description">
                    <p id="f__card__num">1200+</p>
                    <p id="f__card__desc">Competed Projects</p>
                </div>
            </div>

            <div id="f__card__1">
            <img src={DesignREsourcesIcon} alt="Design Resources Icon"  id="f__card__icon" className="w-[50px]"/>
                <div id="f__card_description">
                    <p id="f__card__num">1800+</p>
                    <p id="f__card__desc">Design Resources</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection