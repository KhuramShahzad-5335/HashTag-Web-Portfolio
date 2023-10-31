import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const webdevelopment = [
    { name: 'Frontend Development', to: "/web-development-service" },
    { name: 'Backend Development', to: "/web-development-service" },
    { name: 'Full Stack Development', to: "/web-development-service" },
]
const ecommerce = [
    { name: 'Amazon', to: "/ecommerce-service" },
    { name: 'Ebay', to: "/ecommerce-service" },
    { name: 'Shopify', to: "/ecommerce-service" },
]
const marketing = [
    { name: 'Instagram', to: "/marketing-service" },
    { name: 'Facebook', to: "/marketing-service" },
    { name: 'LinkedIn', to: "/marketing-service" },
    { name: 'Facebook', to: "/marketing-service" },
]
const designing = [
    { name: 'Logo Desigining', to: "/design-service" },
    { name: 'Poster Designing', to: "/design-service" },
    { name: 'Web Desigining', to: "/design-service" },
    { name: 'Brochure Designing', to: "/design-service" },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MobileHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
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
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 transltoate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl ">
                                <div className="p-4">
                                    {webdevelopment.map((item) => (
                                        <div 
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  ">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            {/* <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div> */}
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Company
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

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
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y">


                            <div className="space-y-2 mt-12 py-4">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg hover:py-1 pl-3 pr-3.5 text-base font-semibold leading-7 transition border-l-4 border-transparent hover:border-blue-500 duration-400 ease-in-out">
                                                Web Development
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>


                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {webdevelopment.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        as="a"
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* <hr /> */}
                            </div>


                            <div className="space-y-2 py-4">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg hover:py-1 pl-3 pr-3.5 text-base font-semibold leading-7 transition border-l-4 border-transparent hover:border-blue-500 duration-400 ease-in-out">
                                                E-Commerce
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>


                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {ecommerce.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        as="a"
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                            </div>


                            <div className="space-y-2 py-4">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg hover:py-1 pl-3 pr-3.5 text-base font-semibold leading-7 transition border-l-4 border-transparent hover:border-blue-500 duration-400 ease-in-out">
                                                Desigining
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>


                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {designing.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        as="a"
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                            </div>



                            <div className="space-y-2 py-4">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg hover:py-1 pl-3 pr-3.5 text-base font-semibold leading-7 transition border-l-4 border-transparent hover:border-blue-500 duration-400 ease-in-out">
                                                Marketing
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>


                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {marketing.map((item,index) => (
                                                    <Link
                                                        key={index}
                                                        as="a"
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                            </div>




                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
