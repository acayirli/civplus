/** biome-ignore-all lint/a11y/noStaticElementInteractions: Kein Bock */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Kein Bock */
import "./leaderCard.css";

import type { LeaderType } from "../../data/leaders.tsx";
import { type HTMLAttributes, useState } from "react";

export type LeaderCardProps = LeaderType & {
	isBanned?: boolean;
	onToggleBan?: (leaderId: string, banned: boolean) => void;
	isMostBanned?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function LeaderCard({
	id,
	leader,
	nation,
	portrait,
	isBanned,
	onToggleBan,
	isMostBanned,
	...props
}: Readonly<LeaderCardProps>) {
	const [internalBanned, setInternalBanned] = useState<boolean>(false);

	return (
		<div
			className={`leaderCard${isBanned || internalBanned ? " leaderCard--banned" : ""}`}
			onClick={() =>
				onToggleBan?.(
					id,
					isBanned !== undefined ? !isBanned : internalBanned,
				) ?? setInternalBanned(!internalBanned)
			}
			{...props}
		>
			<div className={"leaderCard__avatar"}>
				<img src={portrait} alt={"suleiman"} />
			</div>

			<div className={"leaderCard__text"}>
				<div
					className={`leaderCard__name${isMostBanned ? " leaderCard__name--mostBanned" : ""}`}
					title={leader}
				>
					{leader}
				</div>

				<div className={"leaderCard__civ"}>
					{isBanned || internalBanned ? "Banned" : nation}
				</div>
			</div>
		</div>
	);
}
