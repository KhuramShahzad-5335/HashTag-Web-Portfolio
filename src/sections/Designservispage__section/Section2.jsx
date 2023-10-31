import "../../pages/Design Service Page/DesignServicePage.css";
export default function Section2() {
  return (
    <>
      <h1 id="section2_h1">Graphic Design Services</h1>
      <div id="section_icons">
        <div className="icon">
          <img
            src="/logodesign.png"
            alt="icon"
            className="section_2_icon_img"
          />
          <p className="section_pra">Logo Design</p>
        </div>
        <div className="icon">
          <img src="/ui&ux.png" alt="icon" className="section_2_icon_img" />
          <p className="section_pra">UI/UX Design</p>
        </div>
        <div className="icon">
          <img
            src="/Art_Illustration.png"
            alt="icon"
            className="section_2_icon_img"
          />
          <p className="section_pra">Art & Illustration</p>
        </div>
        <div className="icon">
          <img
            src="/business_card.png"
            alt="icon"
            className="section_2_icon_img"
          />
          <p className="section_pra">Business Card</p>
        </div>
      </div>
      <div id="section_icons2">
        <div className="icon2">
          <img src="/package.png" alt="icon" className="section_2_icon_img" />
          <p className="section_pra">Packaging & Label Design</p>
        </div>
        <div className="icon2">
          <img
            src="/stationery.png"
            alt="icon"
            className="section_2_icon_img"
          />
          <p className="section_pra">Stationery Design</p>
        </div>
        <div className="icon2">
          <img
            src="/poster.png"
            alt="icon"
            className="section_2_icon_img_poster"
          />
          <p className="section_pra">Poster Design</p>
        </div>
        <div className="icon2">
          <img src="/others.png" alt="icon" className="section_2_icon_img" />
          <p className="section_pra">Many More</p>
        </div>
      </div>
    </>
  );
}
