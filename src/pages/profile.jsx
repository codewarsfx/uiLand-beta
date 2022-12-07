import React, { useContext } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../context/authContext'


export default function Profile() {

  const user = useContext(UserContext)
   useEffect(()=>{
    console.log(user)
   })

  return (
    <>
      
     {user && (<><div >profile</div>
     <h1>{user.displayName}</h1>
      <img src={user.photoURL} alt="rrr" referrerpolicy="no-referrer" /></>)}
    </>
  )
}
