import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/favicon.ico'
import profilePhoto from '../assets/img.png'

export default function Header() {

    const [token, setToken] = useState('');
    const [profilePayload, setProfilePayload] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        const jwtPayload = localStorage.getItem('jwtPayload');
        if (storedToken && jwtPayload) {
            setToken(storedToken);
            setProfilePayload(jwtPayload)
            // const imageOriginal = JSON.parse(JSON.parse(jwtPayload)['sub'])['imageOriginal']
            setProfileImage(profilePhoto)
        }
    }, []);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('jwtPayload');
        window.location.href = '/login';
    };

    return (<div >
        <nav className="bg-gray-800">
            {/*<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">*/}
            <div>
                <div className="relative flex h-16 items-center justify-between">
                    <div style={{marginLeft: '20px'}}>
                        <img className="block h-8 w-auto lg:hidden"
                             src={logo} style={{height: '100px'}}
                             alt="Your Company"/>
                        <img className="hidden h-8 w-auto lg:block" style={{marginLeft: '600px'}}
                             src={logo} style={{height: '100px'}}
                             alt="Your Company"/>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" style={{marginLeft: '600px'}}>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Dashboard
                                </Link>
                                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Teams
                                </Link>
                                <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" rel="noopener noreferrer">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        token ?
                            <div style={{marginRight: '20px'}}
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link to="/cart" rel="noopener noreferrer"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">View cart</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h2m2 2h10l3-8H6M2 7h2l3 10h10l3-10h2" />
                                    </svg>
                                </Link>
                                <Link to="/" target="_blank" rel="noopener noreferrer"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                    </svg>
                                </Link>
                                <div className="relative ml-3">
                                    <div style={{width: '55px', height: '55px'}}>
                                        <button type="button" onClick={toggleButton}
                                                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            {
                                                profilePayload ?
                                                    <img className="h-8 w-8 rounded-full" style={{width: "auto", height: "auto"}}
                                                         src={profileImage}
                                                         alt=""/> : null
                                            }
                                        </button>
                                    </div>
                                    {
                                        toggle ?
                                            <div
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                                tabIndex="-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                   tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                   tabIndex="-1" id="user-menu-item-1">Settings</a>
                                                <Link className="block px-4 py-2 text-sm text-gray-700" onClick={logout}>
                                                    Sign out
                                                </Link>
                                            </div>: null
                                    }
                                </div>
                            </div>:null
                    }
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                       aria-current="page">Dashboard</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>


    </div>
    );
}
