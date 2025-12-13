import type { HTMLAttributes } from "react";

import "./heading.css";

export type HeadingProps = HTMLAttributes<HTMLDivElement>;

export function Heading({ children, ...props }: Readonly<HeadingProps>) {
	return (
		<div className={"heading"} {...props}>
			{children}
		</div>
	);
}
