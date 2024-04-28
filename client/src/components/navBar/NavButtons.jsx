import "./NavButtons.css"
import NavButton from "./NavButton";
import { Link } from 'react-router-dom';


export default function NavButtons() {
    return (
        <div className="navButtonsChild">
            <Link to={"/"} style={{textDecoration:"none"}} onClick={location.reload}><NavButton buttonName="HOME"/></Link>
            <Link to={"/search?gender=men"} style={{textDecoration:"none"}} onClick={location.reload}><NavButton buttonName="MEN"/></Link>
            <Link to={"/search?gender=women"} style={{textDecoration:"none"}} onClick={location.reload}><NavButton buttonName="WOMEN"/></Link>
            <Link to={"/search?gender=kids"} style={{textDecoration:"none"}} onClick={location.reload}><NavButton buttonName="KIDS"/></Link>
        </div>
    );
}