import { useEffect, useState } from "react";

const BGBlackBanner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);


    return (
        <div id="pro_container_bg_2" className='max-w-full mx-4'>

            <h3 className="h3_bg text-xl py-6  md:text-5xl font-bold text-white">Why Be A Part Of HashtagWeb?</h3>
            {/* <div > */}
                {
                    isMobile ? <p className="p-white">We believe that what is most important in a candidate is the drive to learn and the curiosity to create. So, we aim at elevating the people with this drive from within rather than hiring from outside.</p> : <p className="p_bg z-10 p-white">We believe that what is most important in a candidate is the drive to learn and the curiosity to create. So, we aim at elevating the people with this drive from within rather than hiring from outside. Oyelabs is building products and startups with the potential to have a major impact on peoples lives and that could possibly disrupt the market! We at Oyelabs follow a culture of transparency where people are given a high degree of autonomy and you will grow here not because of what you know but because of what you do! So, if you are curious and love to find a solution then Oyelabs is probably the best place for you to be!</p>
                }
            {/* </div> */}
            <button className="inline-flex border-2 z-[2] mt-10 border-white bg-transparent rounded-2xl  border-solid px-8 focus:outline-none text-white font-semibold   text-lg">About Us</button>

        </div>
    )
}

export default BGBlackBanner