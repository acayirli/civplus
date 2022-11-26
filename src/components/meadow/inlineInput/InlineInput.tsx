import { ChangeEvent } from "react";
import { Input } from "../input/Input";

import "./inlineInput.css";

export function InlineInput({ label, type = "text", width, onChange }: { label: string, type?: "text" | "number", width?: number, onChange?: (event: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="input_inline">
            <label>{label}</label>
            <Input type={type} width={width} onChange={onChange} />
        </div>
    );
}