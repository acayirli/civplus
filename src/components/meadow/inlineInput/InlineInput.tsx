import { Input } from "../input/Input";

import "./inlineInput.css";

export function InlineInput({ label, type = "text", width }: { label: string, type?: "text" | "number", width?: number }) {
    return (
        <div className="input_inline">
            <label>{label}</label>
            <Input type={type} width={width} />
        </div>
    );
}