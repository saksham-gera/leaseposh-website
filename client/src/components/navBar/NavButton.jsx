import "./NavButton.css"

export default function NavButton({buttonName = "Button"}) {
    return (
        <div className="navButtonChild" role="button">
            {buttonName}
        </div>
    );
}