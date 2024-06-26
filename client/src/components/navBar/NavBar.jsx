import NavAccButtons from "./NavAccButtons";
import NavButtons from "./NavButtons";
import "./NavBar.css"
import { Link } from "react-router-dom";


export default function NavBar({loginPopupDisplay, bgColor= "black"}) {

    return (  
        <div className="navBarChild" style={{backgroundColor: bgColor}}>
            <NavButtons />
            <div className="spacer"></div>
            <Link to={"/"} style={{textDecoration:"none"}} onClick={location.reload}><img src="/LogoOnlyWhite.png"></img></Link>
            <NavAccButtons loginPopupDisplay={loginPopupDisplay}/>
        </div>
    );
}