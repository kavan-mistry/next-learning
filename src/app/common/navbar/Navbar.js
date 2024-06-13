"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div class="container">

                <nav class="navbar navbar-expand">

                    <div class="container-sm" id="nav-div">
                        <ul class="navbar-nav flex-row">
                            <a class="navbar-brand" href="">
                                <i class="bi-emoji-sunglasses content-center"></i>
                            </a>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" href={'/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" href={'/dashboard'}>Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" href={'./admin'}>Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" href={'./red'}>Redux</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar;
