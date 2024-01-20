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


export default function NavAccButtons() {
    const [SearchVisibility, setSearchVisibility] = useState("hidden");
    return (
        <div className="navAccButtonsChild">
            <div className="search-input" style={{visibility: SearchVisibility}}>
                <input className="form-control rounded-20"  placeholder="Search"></input>
            </div>
            <div className="search-button" onClick={() => {setSearchVisibility(SearchVisibility == "hidden" ? "visible" : "hidden")}}>
                <NavButton id="search" buttonName={<SearchIcon />} />
            </div>
            
            <NavButton buttonName= {<ShoppingCartRoundedIcon />} />
            <NavButton buttonName={<FavoriteIcon />} />
            <Popup trigger={<div><NavButton buttonName = {<PersonIcon />}/></div> } position="left top">
                <div className="ab">lorem50</div>
                <div className="sdcsd">sdvcfs</div>
                <div className="ab">csfs</div>
                <div className="sdcsd">sdvcfs</div>
            </Popup>
            
        </div>
    );
}