import "./navButton.css"

export default function NavButton({buttonName = "Button"}) {
    return (
        <div className="navButtonChild" role="button">
            {buttonName}
        </div>
    );
}