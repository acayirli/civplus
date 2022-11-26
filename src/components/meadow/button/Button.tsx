import "./button.css";

export function Button({ text, icon, onClick }: { text: string, icon: React.ReactNode, onClick: () => void }) {
    return (
        <button className="button" type="button" onClick={onClick}>
            {icon} {text}
        </button>
    );
}