import NavAccButtons from "./navAccButtons";
import NavButtons from "./NavButtons";
import "./navBar.css"
import { useState, useEffect } from "react";


export default function NavBar({ bgColor= "black"}) {


    return (  
        <div className="navBarChild" style={{backgroundColor: bgColor}}>
            <NavButtons />
            <div className="spacer"></div>
            <h4>Lease Posh</h4>
            <NavAccButtons />
        </div>
    );
}