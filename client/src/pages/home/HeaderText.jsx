import { Link } from "react-router-dom";
import Button from "../../components/Button.jsx";
import "./HeaderText.css"

export default function HeaderText() {
    return (
        <div className="header-text">
            <h5>LEASEPOSH WELCOMES YOU</h5>
            <p>Explore Our Premium Collection Of Posh Wear</p>
            <Link to={`/search`} style={{ textDecoration: "none",color: "white" }}><Button buttonName="Explore Now"/></Link>
        </div>
    );
}