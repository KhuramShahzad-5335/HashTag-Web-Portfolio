import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesignServicePage from "./pages/Design Service Page/DesignServicePage";
import WebDevelopmentService from "./pages/WebDevelopmentService/WebDevelopmentService";
import MarkeetingServicePage from "./pages/Markeeting Service Page/MarkeetingServicePage";
import LandingPage from "./pages/Landing Page/LandingPage";
import EComServicePage from "./pages/Ecommerce Service Page/EComServicePage";
import ProcessPage from "./pages/Our Process Page/ProcessPage";
import EngagmentModal from "./pages/Engagementmodal Page/EngagmentModal";
import AboutUsPage from "./pages/About Us Page/AboutUsPage";
import Contactus from "./pages/Contactus page/Contactus";
import NotFoundPage from "./pages/Page Not Found/NotFoundPage";
import Blogs from "./sections/Blogs Section/Blogs";
import BlogPage from "./sections/Blogs Section/BlogPage";
import Careers from "./sections/Careers/Careers";
import JobDetails from "./sections/Careers/JobDetails";
import { Toaster } from "react-hot-toast";
import Header from "./sections/Header Section/Header";
import { useEffect } from "react";
function App() {

  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design-service" element={<DesignServicePage />} />
        <Route path="/web-development-service" element={<WebDevelopmentService />} />
        <Route path="/marketing-service" element={<MarkeetingServicePage />} />
        <Route path="/ecommerce-service" element={<EComServicePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/engagement-model" element={<EngagmentModal />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/job/frontend" element={<JobDetails />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
