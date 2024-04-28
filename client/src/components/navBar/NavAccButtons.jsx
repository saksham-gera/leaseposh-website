import NavButton from "./NavButton";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchIcon from '@mui/icons-material/Search';
import "./NavAccButtons.css";
import 'reactjs-popup/dist/index.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { useState} from "react";
import AccDropDown from "./accDropDown/AccDropDown";



export default function NavAccButtons({loginPopupDisplay}) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    const [SearchVisibility, setSearchVisibility] = useState(false);
    return (
        <div className="navAccButtonsChild">
            <div className="search-input" style={{ visibility: SearchVisibility ? "visible" : "hidden" }}>
                <input id="search" className="form-control rounded-20" placeholder="Search"></input>
            </div>
            <div className="search-button" onClick={() => { setSearchVisibility(!SearchVisibility) }}>
                <NavButton id="search" buttonName={<SearchIcon />} />
            </div>
            <Link to={"/cart"} style={{ textDecoration: "none" }}><NavButton buttonName={<ShoppingCartRoundedIcon />} /></Link>
            <Link to={"/wishlist"} style={{ textDecoration: "none" }}><NavButton buttonName={<FavoriteIcon />} /></Link>
            <div className="acc-menu" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <NavButton buttonName={<PersonIcon />} />
                {isDropdownVisible && <AccDropDown loginPopupDisplay={loginPopupDisplay}/>}
            </div>
        </div>
    );
}