import { TextInput } from "../TextInput/TextInput.tsx";

import "./drafterSettings.css";
import { Container } from "../Container/Container.tsx";
import { Stack } from "../Stack/Stack.tsx";
import { Button } from "../Button/Button.tsx";
import type { DrafterSettingsType } from "./DrafterSettings.types.ts";
import { useState } from "react";

export type DrafterSettingsProps = {
	onContinue?: (settings: DrafterSettingsType) => void;
};

export function DrafterSettings({
	onContinue,
}: Readonly<DrafterSettingsProps>) {
	const [playerNames, setPlayerNames] = useState<string>("");
	const [noOfLeadersPerPlayer, setNoOfLeadersPerPlayer] =
		useState<string>("10");

	function handleContinue() {
		const splitAndTrimmedPlayerNames = playerNames
			.split(",")
			.map((x) => x.trim());
		console.log(playerNames.trim());
		if (!playerNames.trim() || splitAndTrimmedPlayerNames.length < 1) {
			alert("Please specify one player.");
			return;
		}

		if (Number.isNaN(Number(noOfLeadersPerPlayer))) {
			alert("Please enter a valid number.");
			return;
		}

		onContinue?.({
			playerNames: splitAndTrimmedPlayerNames,
			numberOfLeadersPerPlayer: Number(noOfLeadersPerPlayer),
		});
	}

	return (
		<Container size={"md"}>
			<div>
				<div className={"title"}>Civilization 6 Drafter</div>
			</div>

			<Container size={"sm"}>
				<Stack gap={"lg"}>
					<div>
						<TextInput
							label={"Players / Teams"}
							value={playerNames}
							onChange={setPlayerNames}
							placeholder={"Player 1, Player 2, Player 3..."}
						/>
						<TextInput
							label={"Number of leaders per player"}
							value={noOfLeadersPerPlayer}
							onChange={setNoOfLeadersPerPlayer}
						/>
					</div>

					<Button onClick={handleContinue}>Continue</Button>
				</Stack>
			</Container>
		</Container>
	);
}
