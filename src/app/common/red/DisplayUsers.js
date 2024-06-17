'use client'

import { removeUser } from "@/app/redux/slice"
import { useDispatch, useSelector } from "react-redux"

export default function DisplayUsers() {

    const userData = useSelector((data) => data.users)
    const dispatch = useDispatch()
    console.log(userData)
    return (
        <div className="container-fluid">
            <h1>
                Users List
            </h1>
            {
                userData.map((items) => (
                    <div className="p-2">
                        <span>
                            👉🏽 {items.name}
                        </span>
                        <button 
                        className="btn btn-outline-danger btn-sm ms-4"
                        onClick={()=>dispatch(removeUser(items.id))}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}