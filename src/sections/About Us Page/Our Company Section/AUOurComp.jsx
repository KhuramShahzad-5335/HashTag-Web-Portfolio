/* eslint-disable react/no-unescaped-entities */
import icon1 from "./abt-1.svg";
import icon2 from "./abt-2.svg";
import icon3 from "./abt-3.svg";

function AUOurComp() {
  return (
    <div className="flex flex-col items-center gap-2 mb-6">
      <h1 className="font-bold text-[2.6rem] text-[#0074FF] mx-2">Our Company</h1>
      <p id="auoc_mh" className="text-[#000000] font-semibold text-xl">
        We Build Robust Solutions To Make Your Business Stand Out In The
        Industry
      </p>
      <div id="au_oc_c_cont" className="flex lg:flex-row justify-center items-center gap-8">
        <div
          id="card_container_au_sec"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img src={icon3} alt="sdjf" id="au_c_s_c_i"/>

          <h1 className="text-[#0074FF] font-bold text-[24px]">
            Focused On Quality
          </h1>

          <p className="text-[18px] font-[500]    text-[#2F2F2F]">
            We put a strong focus on the needs of your business to figure out
            solutions that best fits your demand and nail it.
          </p>

          <button
            onClick={() => alert("wait bro")}
            id="btn_au_sec_card"
            className="rounded-2xl px-8 py-1 text-[#0074FF] font-semibold hover:bg-[#0074FF] hover:text-white transition-all duration-300 ease-in-out"
          >
            Let's Talk
          </button>
        </div>

        <div
          id="card_container_au_sec"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img src={icon1}  alt="sdjf" id="au_c_s_c_i" />

          <h1 className="text-[#0074FF] font-bold text-[24px]">
            Strong Track Record
          </h1>

          <p className="text-[18px] font-[500] text-[#2F2F2F]">
            Our preventive and progressive approach will help take the lead
            while addressing possible threats in managing.
          </p>

          <button
            onClick={() => alert("wait bro")}
            id="btn_au_sec_card"
            className="rounded-2xl px-8 py-1 text-[#0074FF] font-semibold hover:bg-[#0074FF] hover:text-white transition-all duration-300 ease-in-out"
          >
            Let's Talk
          </button>
        </div>

        <div
          id="card_container_au_sec"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img src={icon2}  alt="sdjf" id="au_c_s_c_i"/>

          <h1 className="text-[#0074FF] font-bold text-[24px]">
            Strong Management
          </h1>

          <p className="text-[18px] font-[500]    text-[#2F2F2F]">
            Our support team is available 24/7 and can get ready for solving any
            of your situational rising problems.
          </p>

          <button
            onClick={() => alert("wait bro")}
            id="btn_au_sec_card"
            className="rounded-2xl px-8 py-1 text-[#0074FF] font-semibold hover:bg-[#0074FF] hover:text-white transition-all duration-300 ease-in-out"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
}

export default AUOurComp;
