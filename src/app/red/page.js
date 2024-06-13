import React from 'react'
import AddUsers from '../common/red/AddUsers'
import DisplayUsers from '../common/red/DisplayUsers'

const page = () => {
  return (
    <div className='container-fluid'>
      <AddUsers />
      <DisplayUsers />
    </div>
  )
}

export default page
