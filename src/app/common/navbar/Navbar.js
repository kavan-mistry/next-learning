"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className="container">

                <nav className="navbar navbar-expand">

                    <div className="container-sm" id="nav-div">
                        <ul className="navbar-nav flex-row">
                            <a className="navbar-brand" href="">
                                <i className="bi-emoji-sunglasses content-center"></i>
                            </a>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href={'/dashboard'}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href={'./admin'}>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href={'./red'}>Redux</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar;
