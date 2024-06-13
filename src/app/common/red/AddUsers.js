'use client'

import { addUser } from "@/app/redux/slice"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function AddUsers() {

    const[name, setName] = useState("")

    const dispatch = useDispatch()

    const userDispatch = () => {
        dispatch(addUser(name))
    }

    return (
        <div className="container-fluid">
            <h1>
                Add Users
            </h1>
            <div class="m-3">
                <label class="form-label">User Name</label>
                <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} />
                <button class="btn btn-primary mt-2" onClick={userDispatch}>Submit</button>
            </div>
        </div>
    )
}