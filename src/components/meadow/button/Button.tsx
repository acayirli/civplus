import "./button.css";

export function Button({ text, icon, onClick, variant = "primary", disabled }: { text: string, icon: React.ReactNode, onClick: () => void, variant?: "primary" | "secondary", disabled?: boolean }) {
    return (
        <button className={`button button--${variant}`} type="button" onClick={onClick} disabled={disabled}>
            {icon} {text}
        </button>
    );
}