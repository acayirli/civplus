import type { HTMLAttributes } from "react";

import "./container.css";

export type ContainerProps = {
	size: "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

export function Container({
	size,
	children,
	...props
}: Readonly<ContainerProps>) {
	return (
		<div className={`container container--${size}`} {...props}>
			{children}
		</div>
	);
}
