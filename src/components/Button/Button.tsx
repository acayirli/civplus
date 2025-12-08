import type { HTMLAttributes } from "react";

import "./button.css";

export type ButtonProps = {
	variant?: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ variant, children, ...props }: Readonly<ButtonProps>) {
	return (
		<button
			className={`button ${variant === "secondary" ? "button--secondary" : ""}`}
			type={"button"}
			{...props}
		>
			{children}
		</button>
	);
}
