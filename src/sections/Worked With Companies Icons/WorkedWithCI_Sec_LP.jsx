import image1 from "./wi.png";
import image2 from "./wi2.png";
import image4 from "./wi3.png";
import image5 from "./wi4.png";
import image6 from "./wi5.svg";
import image7 from "./wi6.png";
import image8 from "./wi7.svg";
import image9 from "./wi8.png";
import image10 from "./wi9.png";
import image11 from "./ww1.webp";
import image12 from "./ww2.webp";
import image13 from "./wi13.png";

const imageNames = [
  image1,
  image2,
  image4,
  image5,
  image9,
  image6,
  image7,
  image13,
  image8,
  image10,
  image11,
  image12,
];
function WorkedWithCI_Sec_LP() {
  return (
    <div id="wwcis_wrapper"
      className="flex items-center justify-center gap-44 overflow-x-scroll my-[100px]"
    >
      {imageNames.map((image, index) => (
        <img
          id="wwcls_imgs"
          src={image}
          alt={`image${index + 1}`}
          key={`image${index + 1}`}
          style={{width : "100%", height : "48px"}}
        />
      ))}
    </div>
  );
}

export default WorkedWithCI_Sec_LP;
