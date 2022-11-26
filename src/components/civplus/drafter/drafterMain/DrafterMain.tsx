import { useState } from "react";
import { civs } from "../../../../civs";
import { Main } from "../../../meadow/main/Main";
import { DrafterCivResults } from "../civs/DrafterCivResults";
import { DrafterSettings, DrafterSettingsModel } from "../settings/Settings";

import "./drafterMain.css";

type drafterState = "settings" | "bans" | "results";

export function DrafterMain() {
    const [drafterState, setDrafterState] = useState<drafterState>("settings");
    const [settings, setSettings] = useState<DrafterSettingsModel>();

    function handleSettingsConfirmed(drafterSettings: DrafterSettingsModel) {
        setDrafterState("bans");
        setSettings(drafterSettings);
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
                    { settings?.civsPerPlayer } { settings?.numberOfPlayers }
                </Main>
            );

        case "results":
            return (
                <Main className="drafter">
                    
                </Main>
            );

        default:
            return (
                <p>Unsupport drafter state {drafterState} reached.</p>
            );
    }
}