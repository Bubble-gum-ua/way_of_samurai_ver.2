import React from "react";
import Logo from "../../Assets/Logo.png"
import "./Header.css"
const Header = ()=> {
    return <div className="header">
    <img src={Logo} alt="logo"/>
    </div>
}

export default Header;