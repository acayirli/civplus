import "./textInput.css";
import { type HTMLAttributes, useRef } from "react";

export type TextInputProps = {
	label?: string;
	value?: string;
	onChange?: (v: string) => void;
	inline?: boolean;
	placeholder?: string;
} & Omit<HTMLAttributes<HTMLLabelElement>, "onChange">;

export function TextInput({
	label,
	value,
	onChange,
	inline,
	placeholder,
	...props
}: Readonly<TextInputProps>) {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<label
			className={`textInput_root ${inline ? "textInput_root--inline" : ""}`}
			{...props}
		>
			{label && <span className={"textInput_label"}>{label}</span>}

			<input
				className={"textInput_input"}
				value={value}
				onChange={onChange && ((e) => onChange(e.target.value))}
				placeholder={placeholder}
				ref={ref}
			/>
		</label>
	);
}
