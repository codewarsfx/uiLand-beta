import React, { useContext } from 'react'
import { UserContext } from '../context/authContext'


export default function Profile() {

  const user = useContext(UserContext)
   

  return (
    <>
      
     {user && (<><div >profile</div>
      <img src={user.photoURL} alt="rrr" /></>)}
    </>
  )
}
