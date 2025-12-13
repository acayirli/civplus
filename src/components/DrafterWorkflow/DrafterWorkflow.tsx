import { useEffect, useState } from "react";
import { DrafterSettings } from "../DrafterSettings/DrafterSettings.tsx";
import { DrafterBans } from "../DrafterBans/DrafterBans.tsx";
import type { DrafterSettingsType } from "../DrafterSettings/DrafterSettings.types.ts";
import DrafterResults from "../DrafterResults/DrafterResults.tsx";
import { leaders } from "../../data/leaders.tsx";
import type { PlayerResult } from "../DrafterResults/DrafterResults.types.ts";

type DrafterStateType = "settings" | "bans" | "results";

export function DrafterWorkflow() {
	const [drafterState, setDrafterState] =
		useState<DrafterStateType>("settings");
	const [settings, setSettings] = useState<DrafterSettingsType | null>(null);
	const [bannedLeaders, setBannedLeaders] = useState<string[]>([]);
	const [overrideResults, setOverrideResults] = useState<PlayerResult[] | null>(
		null,
	);
	const [overridePostBans, setOverridePostBans] = useState<string[] | null>(
		null,
	);

	// read results from url & localStorage
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const urlDrafterResults = urlParams.get("drafterresults");

		if (urlDrafterResults) {
			const parsedDrafterResults = JSON.parse(urlDrafterResults);

			if (parsedDrafterResults) {
				const playerResults = parsedDrafterResults.draft.map(
					(result: { name: string; leaders: string[] }) => ({
						name: result.name,
						leaders: result.leaders.map((leader) => leaders[leader]),
					}),
				);
				setOverrideResults(playerResults);
				setBannedLeaders(parsedDrafterResults.bans);
				setDrafterState("results");
				setOverridePostBans(parsedDrafterResults.postBans);
			}
		}
	}, []);

	function handleSettingsContinue(newSettings: DrafterSettingsType) {
		setSettings(newSettings);
		setDrafterState("bans");
	}

	function handleCancel() {
		setSettings(null);
		setBannedLeaders([]);
		setDrafterState("settings");
		setOverrideResults(null);
		history.replaceState(null, "", import.meta.env.BASE_URL);
	}

	function handleBansContinue(newBannedLeaders: string[]) {
		setBannedLeaders(newBannedLeaders);
		setDrafterState("results");
	}

	if (drafterState === "settings") {
		return <DrafterSettings onContinue={handleSettingsContinue} />;
	} else if (drafterState === "bans") {
		return (
			<DrafterBans onCancel={handleCancel} onContinue={handleBansContinue} />
		);
	} else if (drafterState === "results") {
		return (
			<DrafterResults
				settings={settings}
				bannedLeaders={bannedLeaders}
				onCancel={handleCancel}
				overrideResults={overrideResults}
				overridePostBans={overridePostBans}
			/>
		);
	} else {
		return <div>Unknown error.</div>;
	}
}
