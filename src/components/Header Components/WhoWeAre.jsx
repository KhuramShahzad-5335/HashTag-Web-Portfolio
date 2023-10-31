/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function WhoWeAre(props) {

    const handleLinkClick = (tab) => {
        props.updateActiveTab(tab);
      };

  return (
    <div className="wwa text-gray-900" onMouseLeave={ () => handleLinkClick('')} onClick={() => handleLinkClick('')}>
        <div className="flex justify-center items-start gap-10 w-[100%] mt-10"> 
        {/* <h1 className='text-blue-500'>Solutions We Provide</h1> */}
            <div className="flex flex-col gap-10 justify-center items-center mt-4">
                <Link to="/web-development-service" className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 px-1 py-2 w-[400px]" id='nav_cards'>
                    <AppShortcutIcon sx={{width: "50px", height : "50px"}}/>
                    <div className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Cross Platform App Development</h1>
                        <span style={{fontSize : "14px"}} className='text-gray-600'>Craft seamless cross-platform mobile apps with our expertise.</span>
                    </div>
                </Link>

                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 py-2 px-1 w-[400px]" id='nav_cards'>
                    <WebIcon sx={{width: "50px", height : "50px"}}/>
                    <Link to="/web-development-service" className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}>Website Development</h1>
                        <span style={{fontSize : "14px"}} className='text-gray-600'>Elevate your online presence with our expert web development service.</span>
                    </Link>
                </div>

            </div>
            
        <div className="flex flex-col gap-10 items-center justify-center mt-4">
            <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 px-1 py-2 w-[400px]" id='nav_cards'>
                    <CampaignIcon sx={{width: "50px", height : "50px"}}/>
                    <Link to="/marketing-service" className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Powerful Marketing Solutions</h1>
                        <span style={{fontSize : "14px"}} className='text-gray-600'>Maximize your brand's impact with our results-driven marketing strategies!</span>
                    </Link>
                </div>

                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 py-2 px-1 w-[400px]" id='nav_cards'>
                    <ShoppingCartIcon sx={{width: "50px", height : "50px"}}/>
                    <Link to="/ecommerce-service" className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}>Unlock Ecommerce Success</h1>
                        <span style={{fontSize : "14px"}} className='text-gray-600'>Empower your online business with our e-commerce solutions.</span>
                    </Link>
                </div>

            </div>
        <div className='flex flex-col justify-start items-start gap-4'>
            <h1 className='text-blue-600 text-[18px] text-center w-[100%]'>Lets Get Started <ArrowForwardIcon className='text-blue-500 ml-4' sx={{fontSize : "16px"}}/></h1>

                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm hover:shadow-blue-500 py-4 px-4 w-[250px]" id='nav_cards_l'>
                    {/* <ShoppingCartIcon sx={{width: "15px", height : "5px"}}/> */}
                    <Link to="/process" className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}>Process</h1>
                        <span style={{fontSize : "14px"}}>Unlocking Success: Our Proven Process for Outstanding Results.</span>
                    </Link>
                </div>

                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg py-4 px-4 w-[250px] h-1/2  bg-[#3B82F6] text-white shadow-blue-100 hover:shadow-sm hover:shadow-blue-500" id='nav_cards_l'>
                    {/* <ShoppingCartIcon sx={{width: "50px", height : "50px"}}/> */}
                    <Link to="/contact-us" className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}>Contact Us</h1>
                        <span style={{fontSize : "14px"}}>Ready to Begin? Get in Touch and Kickstart Our Collaboration.</span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WhoWeAre