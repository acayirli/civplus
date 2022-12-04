import "./navbarItem.css";

export function NavbarItem({ text, icon, active = false, disabled = false, onClick }: { text: string, icon: React.ReactNode, active?: boolean, disabled?: boolean, onClick?: () => void }) {
    return (
        <button className={`navbar__item ${active ? "navbar__item--active" : null} ${disabled ? "navbar__item--disabled" : null}`} onClick={onClick}>
            <span className="navbar__item_icon">
                {icon} 
            </span>

            <span>
                {text}
            </span>
        </button>
    );
}