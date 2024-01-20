import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar.jsx";
import "./Header.css";
import HeaderText from "./HeaderText.jsx";

export default function Header() {
    const [pos, setPos] = useState("top");
    useEffect (() => {
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 600){
           setPos("moved")
        } else {
           setPos("top")
        }
    })
    },[]);

    return (
    <div className="header" >
        <div className="header-nav" style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)" }}>
            <NavBar bgColor={pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)"}/>
        </div>
        <div className="header-bg"></div>
        <div className="header-bg-overlay"></div>
        <div className="headerFunctional">
            <HeaderText />
        </div>
    </div>
    );
}