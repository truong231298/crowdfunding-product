import React from 'react';
import { Disclosure } from '@headlessui/react';
import iconMenu from "/images/icon-hamburger.svg";
import closeMenu from "/images/icon-close-menu.svg";
import logo from "/images/logo.svg";

const Navbar = () => {
    const navigation = [
        { name: 'About', href: '#', current: false },
        { name: 'Discover', href: '#', current: false },
        { name: 'Get Started', href: '#', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-between sm:items-stretch">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Disclosure.Button className="sm:hidden">
                                    <img
                                        src={open ? closeMenu : iconMenu}
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                        alt="Menu"
                                    />
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-white rounded-lg mx-4">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    <Disclosure.Button
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                    {/* Add <hr> if it's not the last item */}
                                    {index < navigation.length - 1 && <hr className="border-gray-200" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
