import Logo from "../../components/Header Components/Logo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      id="footer__container"
      className="flex flex-col items-center justify-around bg-black text-gray-300"
    >
      <div id="top" className="flex items-center justify-evenly px-7">
        <div id="companyinfo" className="pt-10">
          <Logo />
          <p id="brand explanation" className="pt-5 text-sm text-gray">
            At Hashtag Web, we provide dedicated Graphic Design, Development &
            Marketing packages and we believe that the best are made with a
            personal touch. We take your ideas and make them come to life.
          </p>
        </div>

        <div className="flex xl-flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-start justify-between w-[50%]">
          <div id="trustedby" className="flex flex-col">
            <h1 id="item__heading">Trusted By</h1>
            <Link id="f__link">Startups</Link>
            <Link id="f__link">Enterprises</Link>
            <Link to="/process" id="f__link">
              Our Process
            </Link>
            <Link to="/engagement-model" id="f__link">
              Engagement Model
            </Link>
          </div>
          <div id="Services">
            <h1 id="item__heading">Services</h1>
            <Link to="/marketing-service" id="f__link">
              Markeeting{" "}
            </Link>
            <Link to="/ecommerce-service" id="f__link">
              E-Commerce
            </Link>
            <Link to="/design-service" id="f__link">
              Design Service
            </Link>
            <Link to="/web-development-service" id="f__link">
              Web Development
            </Link>
          </div>
          <div id="company">
            <h1 id="item__heading">Company</h1>
            <Link to="/blogs" id="f__link">
              Blogs
            </Link>
            <Link to="/careers" id="f__link">
              Careers
            </Link>
            <Link to="/about-us" id="f__link">
              About us
            </Link>
            <Link to="/contact-us" id="f__link">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="flex py-5" id="copyrights">
        <h1 id="stmnt">Copyright © 2023 Hashtag Web | Rights reserved </h1>
        <div id="s-icons">
          <div id="icon_circles"><LinkedInIcon sx={{ color: "white"}}/></div>
          <div id="icon_circles"><InstagramIcon sx={{ color: "white"}} /></div>
          <div id="icon_circles"><FacebookRoundedIcon sx={{ color: "white"}}/></div>
          <div id="icon_circles"><TwitterIcon sx={{ color: "white" }} /></div>
          <div id="icon_circles"><WhatsAppIcon sx={{ color: "white" }}/></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
