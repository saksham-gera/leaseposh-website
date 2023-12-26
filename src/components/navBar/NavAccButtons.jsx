import NavButton from "./NavButton";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchIcon from '@mui/icons-material/Search';
import "./navAccButtons.css";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export default function NavAccButtons() {
    return (
        <div className="navAccButtonsChild"> 
            <NavButton id="search" buttonName={<SearchIcon />} />
            <NavButton buttonName= {<ShoppingCartRoundedIcon />} />
            <Popup trigger={<div><NavButton buttonName = {<PersonIcon />}/></div> } position="left top">
                <div className="ab">lorem50</div>
                <div className="sdcsd">sdvcfs</div>
                <div className="ab">csfs</div>
                <div className="sdcsd">sdvcfs</div>
            </Popup>
            
        </div>
    );
}