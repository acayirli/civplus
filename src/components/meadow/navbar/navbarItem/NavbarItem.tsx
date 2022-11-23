import "./navbarItem.css";

export function NavbarItem({ text, icon }: { text: string, icon: string }) {
    return (
        <button className="navbar__item">
            {icon} {text}
        </button>
    );
}