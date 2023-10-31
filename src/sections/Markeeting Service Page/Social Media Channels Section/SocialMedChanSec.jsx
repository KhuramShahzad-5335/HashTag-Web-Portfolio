import "./SocialMedChanSec.css";
import fb from "./fb.webp";
import gads from "./gads.webp";
import ig from "./ig.webp";
import pt from "./pt.webp";
import snap from "./snap.webp";
import tuk from "./tuk.webp";
import xt from "./xt.webp";
import yt from "./yt.webp";

function SocialMedChanSec() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20 mb-20">
      <h1 id="smsp_smcs_main_heading" className="text-[#0078FF] text-[26px] text-center font-extrabold">
        Social Media Channels
      </h1>
      <div id="smsp_smcs_sec_ico_cont" className="grid grid-cols-4 gap-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={fb} alt="" id="smsp_ss_img" />
          <p className="font-bold">FACEBOOK</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={tuk} alt="" id="smsp_ss_img" />
          <p className="font-bold">TIKTOK</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={ig} alt="" id="smsp_ss_img" />
          <p className="font-bold">INSTAGRAM</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={pt} alt="" id="smsp_ss_img" />
          <p className="font-bold">PINTEREST</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={yt} alt="" id="smsp_ss_img" />
          <p className="font-bold">YOUTUBE</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={snap} alt="" id="smsp_ss_img" />
          <p className="font-bold">SNAPCHAT</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={xt} alt="" id="smsp_ss_img" />
          <p className="font-bold">X</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={gads} alt="" id="smsp_ss_img" />
          <p className="font-bold">GOOGLE ADS</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedChanSec;
