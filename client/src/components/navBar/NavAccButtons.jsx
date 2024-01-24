import NavButton from "./NavButton";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchIcon from '@mui/icons-material/Search';
import "./navAccButtons.css";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";


export default function NavAccButtons() {
    const [SearchVisibility, setSearchVisibility] = useState(false);
    return (
        <div className="navAccButtonsChild">
            <div className="search-input" style={{visibility: SearchVisibility ? "visible" : "hidden"}}>
                <input id="search" className="form-control rounded-20"  placeholder="Search"></input>
            </div>
            <div className="search-button" onClick={() => {setSearchVisibility(!SearchVisibility)}}>
                <NavButton id="search" buttonName={<SearchIcon />} />
            </div>
            <Link to={"/cart"} style={{textDecoration:"none"}}><NavButton buttonName= {<ShoppingCartRoundedIcon />} /></Link>
            <Link to={"/wishlist"} style={{textDecoration:"none"}}><NavButton buttonName={<FavoriteIcon />} /></Link>
            <Link to={"/profile"} style={{textDecoration:"none"}}><NavButton buttonName={<PersonIcon />} /></Link>
        </div>
    );
}