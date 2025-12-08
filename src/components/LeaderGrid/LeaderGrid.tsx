import type { HTMLAttributes } from "react";

import "./leaderGrid.css";

export function LeaderGrid({
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div className={"leaderGrid"} {...props}>
			{children}
		</div>
	);
}
