import "./Button.css";

export default function Button({buttonName,onClick}) {
    return (
        <div className="button">
            <div className="innerText" onClick={onClick}>
                {buttonName}
            </div>
        </div>
    );
}