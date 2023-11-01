/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Disclosure} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
// import { IconButton, Collapse } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DrawIcon from '@mui/icons-material/Draw';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';

export default function MobileHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [accordion1State, setAccordion1State] = useState(true);
    const [accordion2State, setAccordion2State] = useState(false);

    function handleWWDAcc(){
        if(accordion1State == true){
            setAccordion1State(false);
        }
        if(accordion1State == false){
            setAccordion1State(true)
            setAccordion2State(false)
        }
    }

    function handleWWAAcc(){
        if(accordion2State == true){
            setAccordion2State(false);
        }
        if(accordion2State == false){
            setAccordion2State(true)
            setAccordion1State(false)
        }
    }


    return (
        // Header Section
        <header className="lg:hidden">
            <nav className="mx-aut flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="/hashtag-logo.png" alt="hashtag-logo" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/hashtag-logo.png"
                                alt="hashtag-logo"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    
                    
                    
                    {mobileMenuOpen && (
                      // accordions start HERE
                      <div className='flex flex-col justify-center items-center gap-10 w-[100%] bg-white mt-14 text-gray-700 text-[16px] font-[400] mx-auto'>
                             <div className='flex justify-between items-center w-[100%] border-b border-gray-300 pb-2'>
                                <Link to = "/process" className='flex justify-center gap-4' onClick={() => setMobileMenuOpen(false)}>
                                    <RunningWithErrorsIcon/>
                                    <h1>The Hashtag Web Way</h1>
                                </Link>
                            </div>                 
                                  
                            
                            <div className='flex flex-col justify-between items-center w-[100%]'>
                                <div className='flex justify-between items-center w-[100%] border-b border-gray-300 pb-2' onClick={handleWWDAcc}>
                                    <div className='flex justify-center gap-4'>
                                        <TaskAltIcon/>
                                        <h1>What We Do</h1>
                                    </div>
                                    {accordion1State &&(<ArrowDropUpIcon/>)}
                                    {(!accordion1State) &&(<ArrowDropDownIcon/>)}
                                </div>
                                
                                
                                
                                {accordion1State && (
                                        <div className='flex flex-col items-center justify-center gap-5 w-[76%] mt-5 mb-6'>
                                            <Link to = "/web-development-service" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <DrawIcon/>
                                                <h1>Design And UI / UX Services</h1>
                                            </Link>

                                            <Link to = "/web-development-service" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <WebIcon/>
                                                <h1>Website Development</h1>
                                            </Link>

                                            <Link to = "/marketing-service" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <CampaignIcon/>
                                                <h1>Marketing Solutions</h1>
                                            </Link>

                                            <Link to = "/ecommerce-service" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <ShoppingCartIcon/>
                                                <h1>Ecommerce Solutions</h1>
                                            </Link>
                                        </div>
                                    )}
                            </div>                   
                            

                            <div className='flex justify-between items-center w-[100%] border-b border-gray-300 pb-2'>
                                <Link to = "/engagement-model" className='flex justify-center gap-4' onClick={() => setMobileMenuOpen(false)}>
                                    <ConnectWithoutContactIcon/>
                                    <h1>How We Engage</h1>
                                </Link>
                            </div>                 
                            
                            <div className='flex flex-col items-center justify-between gap-2 w-[100%]'>
                                <div className='flex justify-between items-center w-[100%] border-b border-gray-300 pb-2' onClick={handleWWAAcc}>
                                    <div className='flex justify-center gap-4'>
                                        <LightbulbCircleIcon/>
                                        <h1>Who We Are</h1>
                                    </div>
                                    {accordion2State &&(<ArrowDropUpIcon/>)}
                                    {(!accordion2State) &&(<ArrowDropDownIcon/>)}
                                </div>
                                {accordion2State && (
                                        <div className='flex flex-col items-center justify-center gap-5 w-[76%] mt-5 mb-4'>
                                            <Link to = "/about-us" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <DrawIcon/>
                                                <h1>About Us</h1>
                                            </Link>

                                            <Link to = "/contact-us" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <WebIcon/>
                                                <h1>Contact Us</h1>
                                            </Link>

                                            <Link to = "/careers" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <CampaignIcon/>
                                                <h1>Careers</h1>
                                            </Link>

                                            <Link to = "/blogs" className='flex justify-start items-center gap-4 w-[100%]' onClick={() => setMobileMenuOpen(false)}>
                                                <ShoppingCartIcon/>
                                                <h1>Our Blogs</h1>
                                            </Link>
                                        </div>
                                    )}
                            </div>
                            <button className='absolute bottom-0 outline-none bg-blue-500 px-[100%] py-3 text-white font-bold text-[18px] transition-all ease-linear-[1sec] ' onClick={() => setMobileMenuOpen(false)}>Close</button>
                </div>
                //  accordions END
                )}
                </Dialog.Panel>
            </Dialog>
        </header>
        // Header Section Ends here
    )
}

