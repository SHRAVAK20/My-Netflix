import Netflix_Logo from "../images/Netflix_Logo_PMS.png"
import userIcon from "../images/userIcon.png"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() =>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}))
        
        // ...
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
        
      }
    });
    // When component unmounts
    return () => unsubscribe();

  }, [])

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="h-16 mx-2" src={Netflix_Logo} />
        {user && (<div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={userIcon} />
          <button onClick={handleSignout} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>)}
      </div>
    </>
  )
}

export default Header
