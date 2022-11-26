import { useState } from "react";
import { CivModel, civs } from "../../../../civs";
import { Main } from "../../../meadow/main/Main";
import { DrafterBans } from "../bans/DrafterBans";
import { DrafterCivResults } from "../drafterCivResults/DrafterCivResults";
import { DrafterSettings, DrafterSettingsModel } from "../settings/Settings";

import "./drafterMain.css";

type drafterState = "settings" | "bans" | "results";

export function DrafterMain() {
    const [drafterState, setDrafterState] = useState<drafterState>("settings");
    const [settings, setSettings] = useState<DrafterSettingsModel>();
    const [bans, setBans] = useState<string[]>();

    function handleSettingsConfirmed(drafterSettings: DrafterSettingsModel) {
        setSettings(drafterSettings);
        setDrafterState("bans");
    }

    function handleBansConfirmed(bans: string[]) {
        setBans(bans);
        setDrafterState("results");
    }

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
                    <DrafterCivResults settings={settings!} bans={bans!} />
                </Main>
            );

        default:
            return (
                <p>Unsupport drafter state {drafterState} reached.</p>
            );
    }
}