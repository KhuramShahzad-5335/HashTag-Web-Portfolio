/* eslint-disable react/no-unescaped-entities */
function AUHero_Section() {
  return (
    <div id="au_sec_wrapper" className="flex items-center justify-center w-[100%] mx-8">
      <div id="auc_hero_l" className="flex flex-col items-start justify-start text-left max-w-[50%] gap-2 ml-8">
        {/* <p className="font-bold text-black text-lg">Our Step-By-Step Process</p> */}
        <h1 id="" className="font-bold text-[#0074FF] text-[2.7rem] sm:gap-0">Hashtag Web</h1>
        <p id="au_hero_dec_nw" className="text-[#000052] w-[80%]">
          At Hashtag Web, we're masters of software innovation. Our expertise spans idea prototyping, MVP development, 
          and custom software solutions. We're all about understanding your business and delivering tailored solutions across diverse domains. 
          Welcome to our world of technology transformation.
        </p>
        <button className="px-8 py-[1px] font-bold text-[#0074FF] mt-2 hover:bg-[#0074FF]  hover:text-white"
            id="au_cta_btn"
            style={{
                border : "2px solid black",
                borderRadius : "20px",
                // '&hover' : {'cursor:pointer', 'border' : '2px solid #0074FF'},
              }}
              onClick={() => alert("Will Handle it later")}>Let's Talk</button>
      </div>
      <div id="au_hero_sec_cv" className="flex items-center justify-center w-[50%]">
        <img src="./hero.jpg" alt="HeroImg" className="w-[80%] h-[80%]" />
      </div>
    </div>
  );
}

export default AUHero_Section;
