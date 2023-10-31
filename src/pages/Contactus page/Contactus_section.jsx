import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/contact";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { color } from "framer-motion";
function Contactus_section() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [business, setBusiness] = useState("");

  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.contact);

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  const formSubmit = async (e) => {
    e.preventDefault();

    await dispatch(contactUs(name, email, phoneNo, business, content, subject));

    setName("");
    setEmail("");
    setPhoneNo("");
    setBusiness("");
    setContent("");
    setSubject("");
  };

  return (
    <>
      <div id="cont_row">
        <div id="cont_col1">
          <h1 id="cont_col1_h1">
            To Make Requests For Further Information, Contact Us Via Our Social
            Channels.
          </h1>
          <p id="cont_col1_p">
            We Just Need A Couple Of Hours! No More Than 2 Working Days Since
            Receiving Your Enquiry.
          </p>
        </div>
        <form onSubmit={formSubmit} id="cont_col2">
          <div className="form">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="col2_input"
            />
            <input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              type="number"
              placeholder="Phone"
              className="col2_input"
            />
          </div>
          <div className="form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="col2_input"
            />
            <input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              type="text"
              placeholder="Select Business"
              className="col2_input"
            />
          </div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Subject"
            className="col2_input_lg"
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Please describe what you need?"
            className="col2_input_lg"
          />
          <div id="btn">
            <button type="submit" id="cont_col2_btn">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div id="cont_row">
        <div id="cont_col1">
          <div className="flex-colm-cont">
            <div id="pakistan">
              {/* <img src="/pakistan dp.png" alt="" id="pakistan-dp" /> */}
              <h1 id="cont_col1_h2">Pakistan</h1>
            </div>
            <div className="contact-link-div">
              <LocationOnIcon />
              <a
                href={
                  "https://www.google.com/maps/place/Down+Town+Commercial/@30.2515836,71.5580282,20.76z/data=!4m6!3m5!1s0x393b352e60d0b75f:0x5bf014a03f19c380!8m2!3d30.2516248!4d71.5581244!16s%2Fg%2F11k40h8mgb?entry=ttu"
                }
                id="contact_link"
              >
                3rd Floor,Main Building,Royal Orchard,Multan
              </a>
            </div>

            <div className="contact-link-div">
              <AlternateEmailIcon />
              <a href={""} id="contact_link">
                contact@hash.dev
              </a>
            </div>
            <div className="contact-link-div">
              <WhatsAppIcon />
              <a href={""} id="contact_link">
                +92 305 316 5555
              </a>
            </div>
          </div>
        </div>
        <div id="cont_col2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.2619441326417!2d71.55705521467155!3d30.25164107648303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b352e60d0b75f%3A0x5bf014a03f19c380!2sDown%20Town%20Commercial!5e0!3m2!1sen!2sus!4v1696508838928!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="iframe_map"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contactus_section;
