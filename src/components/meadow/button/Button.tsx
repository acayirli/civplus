import "./button.css";

export function Button({ text, icon, onClick, variant = "primary" }: { text: string, icon: React.ReactNode, onClick: () => void, variant?: "primary" | "secondary" }) {
    return (
        <button className={`button button--${variant}`} type="button" onClick={onClick}>
            {icon} {text}
        </button>
    );
}