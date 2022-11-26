import { ContentBox } from "../../../meadow/contentBox/ContentBox"
import { SettingsPreset } from "./settingsPreset/SettingsPreset";

import "./settings.css";
import { Space } from "../../../meadow/space/Space";
import { InlineInput } from "../../../meadow/inlineInput/InlineInput";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";

export type DrafterSettingsModel = {
    numberOfPlayers: number,
    civsPerPlayer: number,
    playerNames: string[]
}

const presets = [
    { civsPerPlayer: 4, numberOfPlayers: 2, playerNames: [], text: "1 v 1" },
    { civsPerPlayer: 6, numberOfPlayers: 2, playerNames: [], text: "2 v 2" },
    { civsPerPlayer: 8, numberOfPlayers: 2, playerNames: [], text: "3 v 3" },
    { civsPerPlayer: 10, numberOfPlayers: 2, playerNames: [], text: "4 v 4" },
    { civsPerPlayer: 12, numberOfPlayers: 2, playerNames: [], text: "5 v 5" },
    { civsPerPlayer: 14, numberOfPlayers: 2, playerNames: [], text: "6 v 6" },
]

export function DrafterSettings({ onSettingsConfirmed }: { onSettingsConfirmed: (drafterSettings: DrafterSettingsModel) => void }) {
    function handleSettingsPresetOnChange(drafterSettings: DrafterSettingsModel) {
        onSettingsConfirmed(drafterSettings);
    }

    return (
        <div className="drafter-settings">
            <h2>Settings</h2>

            <h3>Presets</h3>

            <ContentBox className="settings__presets">
                {
                    presets.map((preset) => <SettingsPreset key={preset.text} text={preset.text} drafterSettings={preset} onSelect={handleSettingsPresetOnChange} />)
                }
            </ContentBox>

            <Space spacing="md" />

            <h3>Custom</h3>

            <ContentBox>
                <InlineInput type="number" label="Players" width={122} />
                <Space spacing="sm" />
                <InlineInput type="number" label="Civs per Player" width={122} />
                <Space spacing="sm" />
                <Container justifyContent="flex-end"><Button text="Continue" /></Container>
            </ContentBox>
        </div>
    );
}