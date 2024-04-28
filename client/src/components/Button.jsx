import "./Button.css";

export default function Button({buttonName}) {
    return (
        <div className="button">
            <div className="innerText" >
                {buttonName}
            </div>
        </div>
    );
}