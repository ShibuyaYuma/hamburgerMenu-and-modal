import React, { useState } from "react";
import Logo from '../img/Logo.jpg';
import Nav from './Nav';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const clickBtn = () => {
        setIsActive(!isActive);
    }

    return(
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className={`btn ${isActive ? 'isActive' : ''}`} onClick={clickBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Nav isActive={isActive}/>
        </header>
    );
};

export default Header;