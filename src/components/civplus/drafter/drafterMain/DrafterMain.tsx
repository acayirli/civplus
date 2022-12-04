import { useEffect, useState } from "react";
import { CivModel, civs } from "../../../../civs";
import { Main } from "../../../meadow/main/Main";
import { DrafterBans } from "../bans/DrafterBans";
import { DrafterCivResults } from "../drafterCivResults/DrafterCivResults";
import { DrafterSettings, DrafterSettingsModel } from "../settings/DrafterSettings";

import "./drafterMain.css";

type drafterState = "settings" | "bans" | "results";

export function DrafterMain() {
    const [drafterState, setDrafterState] = useState<drafterState>("settings");
    const [settings, setSettings] = useState<DrafterSettingsModel>();
    const [bans, setBans] = useState<string[]>();
    const [drafterResults, setDrafterResults] = useState();

    function handleSettingsConfirmed(drafterSettings: DrafterSettingsModel) {
        setSettings(drafterSettings);
        setDrafterState("bans");
        setDrafterResults(undefined);
    }

    function handleBansConfirmed(bans: string[]) {
        setBans(bans);
        setDrafterState("results");
    }

    function handleOnClickRestart() {
        history.replaceState(null, "", import.meta.env.BASE_URL);
        setDrafterState("settings");
        setDrafterResults(undefined);
    }

    // read results from url
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlDrafterResults = urlParams.get("drafterresults");
        
        if (urlDrafterResults) {
            const parsedDrafterResults = JSON.parse(urlDrafterResults);

            if (parsedDrafterResults) {
                const playerResults = parsedDrafterResults.map((result: { name: string, civs: string[] }) => ({ name: result.name, civs: result.civs.map((civ) => civs[civ]) }));
                setDrafterResults(playerResults);
                setDrafterState("results");
            }
        }
    }, []);

    switch (drafterState) {
        case "settings":
            return (
                <Main className="drafter">
                    <DrafterSettings onSettingsConfirmed={handleSettingsConfirmed} />
                </Main>
            );

        case "bans":
            return (
                <Main className="drafter">
                    <DrafterBans onConfirmed={handleBansConfirmed} />
                </Main>
            );

        case "results":
            return (
                <Main className="drafter">
                    <DrafterCivResults settings={settings!} bans={bans!} results={drafterResults} onRestart={handleOnClickRestart} />
                </Main>
            );

        default:
            return (
                <p>Unsupport drafter state {drafterState} reached.</p>
            );
    }
}