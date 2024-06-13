'use client'

import { useSelector } from "react-redux"

export default function DisplayUsers() {

    const userData = useSelector((data) => data.users)
    console.log(userData)
    return (
        <div className="container-fluid">
            <h1>
                Users List
            </h1>
            {
                userData.map((items) => (
                    <li>
                        {items.name}
                    </li>
                ))
            }
        </div>
    )
}