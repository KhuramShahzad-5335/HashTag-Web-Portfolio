import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const RecentProjectsSm = () => {
  const recentProjectsData = {
    projects: [
      {
        category: "Fintech",
        title:
          "Accelerate the pace of digital innovation in financial services",
        lastText: "Explore our solutions for Fintech",
        image: "/recentProject3.webp",
        services: [
          "E-payments & Digital Wallets",
          "Government-to-payee Transfers",
          "Micro Lending & Loan Management",
          "Digital Banking & Big Data",
          "Open Banking Softwares",
        ],
      },
      {
        title: "Improving lives with smarter digital healthcare",
        category: "HEALTHCARE",
        lastText: "Explore our solutions for Healthcare",
        image: "recentProject2.webp",
        services: [
          "Point of Care solutions",
          "Health information exchange",
          "Telehealth & telemedicine",
          "Medical Imaging",
          "Wellness platforms",
        ],
      },
      {
        title: "Build digital solutions for more liveable urban  cities",
        category: "ON-DEMAND SERVICES",
        lastText: "Explore our solutions for services",
        image: "recentProject1.webp",
        services: [
          "On-demand delivery",
          "Home & local services",
          "Health & beauty",
          "Repairs & maintenance",
          "Reservation & ticketing",
        ],
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font max-w-[100%] relative overflow-auto ">
      <div className="flex flex-col container md:px-5 md:py-16 mx-auto md:max-w-full max-w-[100vw]">
        <h2
          className={`mt-10 text-blue-600 mb-6 text-4xl text-center font-bold max-w-[100vw] `}
        >
          Recent Projects
        </h2>
        <hr className={` bg-blue-600 w-24 py-0.5 mx-auto mb-6 max-w-[100vw]`} />

        <div className="flex flex-wrap mx-auto justify-center max-w-[100vw] ">
          <section className="rounded-md text-center md:p-12 md:text-lef ">
            <div className="flex justify-center w-full max-w-[100vw]">
              <div className="md:max-w-5xl">
                <div
                  className={`md:m-8 block rounded-lg bg-white  p-6  max-w-[100vw]`}
                >
                  <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    showArrows={true}
                  >
                    {/* Recent Projects */}
                    {recentProjectsData.projects.map((project) => (
                      <div
                        className="md:flex h-[55rem] md:flex-row flex-col"
                        key={project.title}
                      >
                        <div className="md:w-1/3 w-full mx-auto md:mx-0 md:mb-0 mb-4">
                          <img
                            src={project?.image}
                            className="rounded-3xl shadow-md mt-4 md:ml-8 object-cover w-[100px] h-[200px] "
                            alt={project?.title}
                          />
                        </div>

                        <div className=" flex flex-col items-start justify-center  md:mt-0 text-center md:text-center md:w-2/3">
                          <p className="mb-4 w-[70%] rounded-xl font-semibold text-blue-600 py-2 bg-blue-200 flex items-center justify-center mx-auto">
                            {project.category}
                          </p>
                          <div className="flex flex-col gap-6 items-start justify-center w-[100%]">
                            <p className=" text-xl w-[100%] font-semibold text-blue-600 text-left">
                              {project.title}
                            </p>
                            <ul className="md:mb-1 text-sm text-left my-2 text-black dark:text-neutral-200">
                              {project.services.map((service, serviceIndex) => (
                                <div className="flex my-2" key={serviceIndex}>
                                  <li className="text-[16px] pb-2 font-semibold text-[#6d6d6d]">
                                    {service.replace(/^\s*\.\s*/, "")}
                                  </li>
                                </div>
                              ))}
                            </ul>

                            <p className="font-semibold dark:text-neutral-400">
                              {project.lastText}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSm;
