import NavAccButtons from "./navAccButtons";
import NavButtons from "./NavButtons";
import "./navBar.css"
import { useState, useEffect } from "react";


export default function NavBar() {
    const [pos, setPos] = useState("top");
  useEffect (()=>{
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
        <div className="navBarChild" style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)" }}>
            <NavButtons />
            <h4>Lease Posh</h4>
            <div className="spacer"></div>
            <NavAccButtons />
        </div>
    );
}