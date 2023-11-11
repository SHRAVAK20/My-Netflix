import React from 'react'
import Netflix_Logo from "../images/Netflix_Logo_PMS.png"
import userIcon from "../images/userIcon.png"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
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
