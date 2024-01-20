import "./navButtons.css"
import NavButton from "./NavButton";
import { Link } from 'react-router-dom';


export default function NavButtons() {
    return (
        <div className="navButtonsChild">
            <Link to={"/"} style={{textDecoration:"none"}}><NavButton buttonName="HOME"/></Link>
            <Link to={"/men"} style={{textDecoration:"none"}}><NavButton buttonName="MEN"/></Link>
            <Link to={"/women"} style={{textDecoration:"none"}}><NavButton buttonName="WOMEN"/></Link>
            <Link to={"/kids"} style={{textDecoration:"none"}}><NavButton buttonName="KIDS"/></Link>
        </div>
    );
}