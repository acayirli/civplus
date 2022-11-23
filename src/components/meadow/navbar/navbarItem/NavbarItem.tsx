import "./navbarItem.css";

export function NavbarItem({ text, icon, active = false }: { text: string, icon: string, active?: boolean }) {
    return (
        <button className={`navbar__item ${active ? "navbar__item--active" : null}`}>
            {icon} {text}
        </button>
    );
}