import "./button.css";

export function Button({ text }: { text: string }) {
    return (
        <button className="button" type="button">
            { text }
        </button>
    );
}