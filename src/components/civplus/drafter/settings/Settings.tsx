import { ContentBox } from "../../../meadow/contentBox/ContentBox"
import { SettingsPreset } from "./settingsPreset/SettingsPreset";

import "./settings.css";
import { Space } from "../../../meadow/space/Space";
import { InlineInput } from "../../../meadow/inlineInput/InlineInput";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

export type DrafterSettingsModel = {
    numberOfPlayers: number,
    civsPerPlayer: number,
    playerNames: string[]
}

const presets = [
    { civsPerPlayer: 5, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "1 v 1" },
    { civsPerPlayer: 8, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "2 v 2" },
    { civsPerPlayer: 12, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "3 v 3" },
    { civsPerPlayer: 15, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "4 v 4" },
    { civsPerPlayer: 17, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "5 v 5" },
    { civsPerPlayer: 20, numberOfPlayers: 2, playerNames: ["Team 1", "Team 2"], text: "6 v 6" },
]

export function DrafterSettings({ onSettingsConfirmed }: { onSettingsConfirmed: (drafterSettings: DrafterSettingsModel) => void }) {
    const [numberOfPlayers, setNumberOfPlayers] = useState<number>(0);
    const [civsPerPlayer, setCivsPerPlayer] = useState<number>(0);

    function handleSettingsPresetOnChange(drafterSettings: DrafterSettingsModel) {
        onSettingsConfirmed(drafterSettings);
    }

    function handleOnChangeNumberOfPlayer(event: ChangeEvent<HTMLInputElement>) {
        setNumberOfPlayers(parseInt(event.currentTarget.value));
    }

    function handleOnChangeCivsPerPlayer(event: ChangeEvent<HTMLInputElement>) {
        setCivsPerPlayer(parseInt(event.currentTarget.value));
    }

    function handleClickContinueCustomSettings() {
        onSettingsConfirmed({
            civsPerPlayer: civsPerPlayer,
            numberOfPlayers: numberOfPlayers,
            playerNames: []
        });
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
                <InlineInput type="number" label="Players" width={143} onChange={handleOnChangeNumberOfPlayer} />

                <Space spacing="sm" />

                <InlineInput type="number" label="Civs per Player" width={143} onChange={handleOnChangeCivsPerPlayer} />

                <Space spacing="sm" />

                <Container justifyContent="flex-end">
                    <Button text="Continue" icon={<FontAwesomeIcon icon={faCircleRight} />} onClick={handleClickContinueCustomSettings} />
                </Container>
            </ContentBox>
        </div>
    );
}