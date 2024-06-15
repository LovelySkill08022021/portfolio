'use client';

import Link from 'next/link';
import './NavBar.css';
import { useEffect, useState } from 'react';

export default function NavBar(){
    const [nav_margin, setNavMargin] = useState("100%");

    function toggleNavBar(){
        if(nav_margin == '25%'){
            setNavMargin("100%")
        } else {
            setNavMargin("25%")
        }
            
    }

    return (
        <>
            <div className='top-control flex sticky top-0 w-full justify-between sm:hidden'>
                <div className='p-5 nav-bar-logo'>
                    <span className='text-blue-500'>M</span>
                    <span className='text-rose-500'>J</span>
                    <span className='text-yellow-500'>C</span>
                </div>
                <div>
                    <button onClick={toggleNavBar} className='text-4xl bg-pink-500 text-white mt-5 me-5 px-5 py-2'>
                        {nav_margin == '100%' ? (<>&equiv;</>) : (<>&times;</>)}
                    </button>
                </div>
            </div>

            <div className="phone-nav-bar bg-white fixed h-full w-full block sm:hidden lg:px-40" style={{
                marginLeft: nav_margin
            }}>
                <div className='w-full p-4'>
                    <Link className='block w-full' href='/'>
                        <button onClick={toggleNavBar} className="active:bg-pink-500 w-full text-left py-5 px-6 font-bold">Home</button>
                    </Link>
                    <Link className='block w-full' href='/projects'>
                        <button onClick={toggleNavBar} className="active:bg-pink-500 w-full text-left py-5 px-6 font-bold">Projects</button>
                    </Link>
                    <Link className='block w-full' href='/tools'>
                        <button onClick={toggleNavBar} className="active:bg-pink-500 w-full text-left py-5 px-6 font-bold">Tools</button>
                    </Link>
                </div>
            </div>

            <div className="nav-bar px-10 hidden sm:block lg:px-40">
                <div className='nav-bar-logo'>
                    <span className='text-blue-500'>M</span>
                    <span className='text-rose-500'>J</span>
                    <span className='text-yellow-500'>C</span>
                </div>
                <div className='nav-bar-button-container'>
                    <Link className='nav-bar-button-link' href='/'>
                        <button className="nav-bar-button">Home</button>
                    </Link>
                    <Link className='nav-bar-button-link' href='/projects'>
                        <button className="nav-bar-button">Projects</button>
                    </Link>
                    <Link className='nav-bar-button-link' href='/tools'>
                        <button className="nav-bar-button">Tools</button>
                    </Link>
                </div>
            </div>
        </>
    );
} 