import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar.jsx";
import "./Header.css";
import HeaderText from "./HeaderText.jsx";

export default function Header() {

    return (
    <div className="header" >
        <div className="header-bg"></div>
        <div className="header-bg-overlay"></div>
        <div className="headerFunctional">
            <HeaderText />
        </div>
    </div>
    );
}