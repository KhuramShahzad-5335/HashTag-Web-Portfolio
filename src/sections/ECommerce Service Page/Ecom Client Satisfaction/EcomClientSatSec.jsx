import kayla from "./amandakiphoto.jpg";

function EcomClientSatSec() {
  return (
    <div id="ecom_css_wrapper" className="flex flex-col gap-4 items-center justify-center min-w-80 mt-10 mb-10">
        <h1 className="font-[#000000] font-bold text-[28px] text-[#0074FF]">What Our Clients Say</h1>
        <p className="text-[#888888] w-[70%] text-xl text-center text-[18px] font-medium" id="ecom_css_quote">“Hashtag Web delivered exceptional service and were very collaborative with our requirements. Highly satisfied with the results.”</p>
        <div className="flex justify-center items-center gap-5">
            <img src={kayla} alt="kayla our client"  className="w-14 rounded-full h-auto shadow-lg"/>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#2c2c2c] font-semibold">Amanda Perez</p>
                <p className="text-[#888888]">Director - Client Services(Scintillate)</p>
            </div>
        </div>
    </div>
  )
}

export default EcomClientSatSec