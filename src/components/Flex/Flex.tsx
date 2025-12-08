import type { HTMLAttributes } from "react";

import "./flex.css";

export type FlexProps = {
	justifyContent?: "flex-start" | "center" | "space-between" | "flex-end";
	gap?: "none" | "xs" | "sm" | "md" | "lg";
} & HTMLAttributes<HTMLDivElement>;

export function Flex({
	justifyContent,
	children,
	gap,
	...props
}: Readonly<FlexProps>) {
	return (
		<div
			className={`flex ${gap ? `flex--gap-${gap}` : ""}`}
			style={{ justifyContent: justifyContent }}
			{...props}
		>
			{children}
		</div>
	);
}
