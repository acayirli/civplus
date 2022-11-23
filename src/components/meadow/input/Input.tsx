import "./input.css";

export function Input({ type = "text", width }: { type?: "text" | "number", width?: number }) {
    return (
        <input className="input" type={type} style={{ width: width ? width + "px" : "auto" }} min="0" max="100" />
    );
}