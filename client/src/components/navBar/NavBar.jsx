import NavAccButtons from "./navAccButtons";
import NavButtons from "./NavButtons";
import "./navBar.css"
import { Link } from "react-router-dom";


export default function NavBar({loginPopupDisplay, bgColor= "black"}) {

    return (  
        <div className="navBarChild" style={{backgroundColor: bgColor}}>
            <NavButtons />
            <div className="spacer"></div>
            <Link to={"/"} style={{textDecoration:"none"}} onClick={location.reload}><h4>Lease Posh</h4></Link>
            <NavAccButtons loginPopupDisplay={loginPopupDisplay}/>
        </div>
    );
}