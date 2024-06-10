"use client"

import React from 'react'
import Link from 'next/link'
// import { promises as fs } from 'fs';
import { useEffect, useState } from 'react';

const page = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const file = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
                const jsondata = await file.json();
                setData(jsondata);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        }, []);
        
    return (
        <>
            <div class="container">

                <h3>
                    From JSON using map
                </h3>
                {/* <div>
                        <p>Name : {data[0].name}</p>
                        <p>language : {data[0].language}</p>
                        <p>id : {data[0].id}</p>
                        <p>bio : {data[0].bio}</p>
                        <p>version : {data[0].version}</p>
                    </div> */}

                <div className='container'>
                    {
                        data.map((item) => (

                            <ul>
                                <hr />
                                <p>Name : {item.name}</p>
                                <p>language : {item.language}</p>
                                <p>id : {item.id}</p>
                                <p>bio : {item.bio}</p>
                                <p>version : {item.version}</p>
                                <hr />
                            </ul>
                        ))
                    }
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
                integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
                crossorigin="anonymous"></script>

        </>
    )
}

export default page
