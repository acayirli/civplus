/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import { Container } from "../Container/Container.tsx";
import { Stack } from "../Stack/Stack.tsx";
import { LeaderGrid } from "../LeaderGrid/LeaderGrid.tsx";
import { Border } from "../Border/Border.tsx";
import type { DrafterSettingsType } from "../DrafterSettings/DrafterSettings.types.ts";
import { leaders } from "../../data/leaders.tsx";
import type { PlayerResult } from "./DrafterResults.types.ts";
import { LeaderCard } from "../LeaderCard/LeaderCard.tsx";
import { Flex } from "../Flex/Flex.tsx";
import { Button } from "../Button/Button.tsx";

import "./drafterResults.css";
import {Fragment, useEffect, useMemo} from "react";
import {Heading} from "../Heading/Heading.tsx";

export type DrafterResultsProps = {
	settings?: DrafterSettingsType | null;
	bannedLeaders: string[];
	onCancel: () => void;
	overrideResults?: PlayerResult[] | null;
};

function calculateDrafterResults(
	settings: DrafterSettingsType,
	bans: string[],
): PlayerResult[] {
	const playerResults = [];
	const unbannedLeaders = Object.values(leaders)
		.filter((leader) => !bans.includes(leader.id))
		.sort(() => 0.5 - Math.random());
	const leadersPerPlayer = Math.min(
		settings.numberOfLeadersPerPlayer,
		Math.floor(unbannedLeaders.length / settings.playerNames.length),
	);

	for (let i = 0; i < settings.playerNames.length; i++) {
		const playerLeaders = unbannedLeaders
			.splice(0, leadersPerPlayer)
			.sort((a, b) => a.leader.localeCompare(b.leader));
		playerResults.push({
			name: settings.playerNames[i] || "Player " + (i + 1),
			leaders: playerLeaders,
		});
	}

	return playerResults;
}

function DrafterResults({
	settings,
	bannedLeaders,
	onCancel,
	overrideResults,
}: Readonly<DrafterResultsProps>) {
	const calculatedResults = useMemo(
		() =>
			overrideResults ||
			calculateDrafterResults(settings!, bannedLeaders || []),
		[settings, bannedLeaders, overrideResults],
	);

	// write results to url
	useEffect(() => {
		const reducedResults = calculatedResults.map((playerResult) => ({
			name: playerResult.name,
			leaders: playerResult.leaders.map((leader) => leader.id),
		}));
		const uriEncodedReults = encodeURIComponent(
			JSON.stringify({ draft: reducedResults, bans: bannedLeaders }),
		);
		history.replaceState(
			null,
			"",
			`${import.meta.env.BASE_URL}?drafterresults=${uriEncodedReults}`,
		);
	}, [bannedLeaders, calculatedResults]);

	function handleOnClickShare() {
		void navigator.clipboard.writeText(window.location.href);
	}

	return (
		<Container size={"xl"} style={{ padding: "20px 40px" }}>
			<Stack gap={"xl"}>
				<Flex justifyContent={"space-between"}>
					<Heading>
						Results
					</Heading>

					<Flex gap={"lg"} justifyContent={"flex-end"}>
						<Button onClick={handleOnClickShare}>Share</Button>

						<Button onClick={onCancel} variant={"secondary"}>
							Restart
						</Button>
					</Flex>
				</Flex>

				{calculatedResults.map((result) => (
					<Fragment key={result.name}>
						<Stack gap={"lg"}>
							<div className={"results_playername"}>{result.name}</div>

							<LeaderGrid>
								{result.leaders.map((leader) => (
									<LeaderCard key={leader.id} {...leader} />
								))}
							</LeaderGrid>
						</Stack>

						<Border />
					</Fragment>
				))}

				<Stack gap={"lg"}>
					<div className={"results_playername"}>Bans</div>

					{bannedLeaders.length > 0 ? (
						<LeaderGrid>
							{bannedLeaders.map((bannedLeaderId) => (
								<LeaderCard
									isBanned={true}
									key={bannedLeaderId}
									{...leaders[bannedLeaderId]}
								/>
							))}
						</LeaderGrid>
					) : (
						<div style={{ paddingLeft: 12 }}>No bans</div>
					)}
				</Stack>
			</Stack>
		</Container>
	);
}

export default DrafterResults;
