import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/")
    }

    return (
        <div className="app-header">
            <div className="logo">
                <h1 onClick={navigateHome}>Namaste Food</h1>
            </div>
            <div className="header-links">
                <ul>
                    <li className="link-items"><NavLink activeClassName="active" to="/cart">Cart</NavLink> </li>
                    <li className="link-items"><NavLink activeClassName="active" to="/profile">Profile</NavLink> </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;