import React from 'react';
import Logo from '../Images/logo512.png';

function Header() {
  return (
    <div className="pt-3 pl-2">
        <img src={Logo} alt="" style={{height: "35px", verticalAlign: "top"}}/>{" "}
        <span className="h2 pt-4 text-white-50">React Course - TravelOpedia</span>
    </div>
  )
}

export default Header;