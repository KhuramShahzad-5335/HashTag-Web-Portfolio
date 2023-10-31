import fst from "./f1.jpg"
import scnd from "./f2.jpg"
import thrd from "./f3.jpeg"
import frth from "./f4.jpg"
import fifth from "./f5.jpg"

function EnvShowCase() {
  return (
    <>
        <div  className="h-[600px] overflow-hidden flex items-center bg-[#F2F2F2] mt-8 mb-8">
            <div id="au_sc_scrollbar" className=" overflow-y-hidden overflow-x-visible flex items-center min-w-full justify-center gap-4">
                <img src= {fst} alt="" id="env_sc_img"/>
               <div className="flex flex-col gap-4 min-w-[251px]">
               <img src= {frth} alt="r u cmd" id="env_sc_img"/>
                <img src= {fifth} alt="r u cmd" id="env_sc_img"/>
               </div>
                <img src= {scnd} alt="" id="env_sc_img"/>
                <img src= {thrd} alt="" id="env_sc_img"/>
            </div>
        </div>
    </>
  )
}

export default EnvShowCase