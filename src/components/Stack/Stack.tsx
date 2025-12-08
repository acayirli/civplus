import type { HTMLAttributes } from "react";

import "./stack.css";

export type StackProps = {
	gap: "none" | "xs" | "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

export function Stack({ gap, children, ...props }: Readonly<StackProps>) {
	return (
		<div className={`stack stack--gap-${gap}`} {...props}>
			{children}
		</div>
	);
}
