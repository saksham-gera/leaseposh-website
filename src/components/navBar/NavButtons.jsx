import "./navButtons.css"
import NavButton from "./NavButton";

export default function NavButtons() {
    return (
        <div className="navButtonsChild">
            <NavButton buttonName="HOME"/>
            <NavButton buttonName="SHOP"/>
            <NavButton buttonName="ABOUT"/>
            <NavButton buttonName="CONTACT"/>
        </div>
    );
}