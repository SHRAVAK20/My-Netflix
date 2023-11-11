import React from 'react'
import Netflix_Logo from "../images/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="h-16 mx-2" src={Netflix_Logo} />
    </div>
  )
}

export default Header