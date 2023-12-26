import Button from "../../components/Button.jsx";
import "./headerText.css"

export default function HeaderText() {
    return (
        <div className="header-text">
            <h5>LEASEPOSH WELCOMES YOU</h5>
            <p>Explore Our Premium Collection Of Posh Wear</p>
            <Button buttonName="Explore Now"/>
        </div>
    );
}