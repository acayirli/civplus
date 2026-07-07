import type { HTMLAttributes } from "react";

import "./flex.css";

export type FlexProps = {
	alignItems?: "center"
	justifyContent?: "flex-start" | "center" | "space-between" | "flex-end";
	gap?: "none" | "xs" | "sm" | "md" | "lg";
} & HTMLAttributes<HTMLDivElement>;

export function Flex({
	justifyContent,
	alignItems,
	children,
	gap,
	className,
	...props
}: Readonly<FlexProps>) {
	return (
		<div
			className={`flex ${gap ? `flex--gap-${gap}` : ""} ${className ? className : ""}`}
			style={{ justifyContent: justifyContent, alignItems: alignItems, }}
			{...props}
		>
			{children}
		</div>
	);
}
