import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { newsLetterSubscribe } from "../../redux/actions/newsletter";
import toast from "react-hot-toast";

function ContactUsComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()
  const { message } = useSelector(state => state.contact)

  const formSubmit = async (e) => {
    e.preventDefault()

    await dispatch(newsLetterSubscribe(email))

    setEmail("")
  }

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({ type: "clearMessage" })
    }
  }, [dispatch, message])


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const contactUs = document.getElementById("ecom_cus_wrapper");
      const contactUsTop = contactUs.offsetTop;
      const contactUsHeight = contactUs.offsetHeight;

      if (
        currentScrollPos >= contactUsTop - window.innerHeight + contactUsHeight / 2
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="ecom_cus_wrapper"
      className={`flex flex-col gap-4 items-center justify-center pt-8 pb-8 bg-[#0074FF] `}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <h3 id="ecom_cus_mainheading" className="font-bold text-[#AFD4FF] text-[1.2rem]">
        FEEL FREE TO CONTACT US
      </h3>
      <h1 className="font-bold text-white xl:text-[3.2rem] lg:text-[3.2rem] md:text-[3rem] sm:text-[28px] text-[28px] flex mx-auto justify-center items-center text-center">
        We Make Things Look Good
      </h1>
      <div className="xl:w-[50vw] lg:w-[53vw] md:w-[100%] sm:w-[100%] w-[100%] flex items-center justify-center">
        <form
          onSubmit={formSubmit}
          id="ecom_cus_form_group"
          className="flex gap-6 xl:w-[52vw] lg:w-[52vw] md:w-[52vw] sm:w-[100%] w-[100%] xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email Address"
            className="xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[330px] w-[330px] h-[60px] bg-[#3390FF] placeholder:text-[#99C8FF] text-white text-lg font-semibold outline-none placeholder:text-[17px] placeholder:font-semibold placeholder-[#0074FF] rounded-xl pl-4"
            required
          />
          <button type="submit" className="xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[330px] w-[330px] text-blue-500 font-semibold text-[17px] bg-[#F2F2F2] h-[60px] rounded-lg">
            Get Started
          </button>
        </form>
      </div>
      <div
        id="ecom_cus_ajeeb"
        className="flex items-center justify-between mt-2 w-[52%]"
      >
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0074FF"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="#0074FF"
                strokeWidth={1.5}
              />
            </svg>
          </div>

          <h1 id="ecom_cus_placeh_txt">RELIABLE</h1>
        </div>
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0074FF"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="#0074FF"
                strokeWidth={1.5}
              />
            </svg>
          </div>
          <h1 id="ecom_cus_placeh_txt">INNOVATIVE</h1>
        </div>
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0074FF"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="#0074FF"
                strokeWidth={1.5}
              />
            </svg>
          </div>
          <h1 id="ecom_cus_placeh_txt" className="w-56">CUSTOMER SATISFACTION</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUsComponent;