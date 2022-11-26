import { ChangeEvent } from "react";
import "./input.css";

export function Input({ type = "text", width, onChange }: { type?: "text" | "number", width?: number, onChange?: (event: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input className="input" type={type} style={{ width: width ? width + "px" : "auto" }} min="0" max="100" onChange={onChange} />
    );
}