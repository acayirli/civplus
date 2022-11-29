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
    const [numberOfPlayers, setNumberOfPlayers] = useState<number | null>(null);
    const [civsPerPlayer, setCivsPerPlayer] = useState<number | null>(null);
    const [playerNames, setPlayerNames] = useState<string[]>([]);
    const [teamNames, setTeamNames] = useState<string[]>([]);

    function handleSettingsPresetOnChange(drafterSettings: DrafterSettingsModel) {
        onSettingsConfirmed({
            civsPerPlayer: drafterSettings.civsPerPlayer,
            numberOfPlayers: drafterSettings.numberOfPlayers,
            playerNames: teamNames.length == 2 ? teamNames : drafterSettings.playerNames
        });
    }

    function handleOnChangeNumberOfPlayer(event: ChangeEvent<HTMLInputElement>) {
        setNumberOfPlayers(parseInt(event.currentTarget.value));
    }

    function handleOnChangeCivsPerPlayer(event: ChangeEvent<HTMLInputElement>) {
        setCivsPerPlayer(parseInt(event.currentTarget.value));
    }

    function handleOnChangePlayerNames(event: ChangeEvent<HTMLInputElement>) {
        const splitNames = event.currentTarget.value.split(",");
        setPlayerNames(splitNames.map((name) => name.trim()));
    }

    function handleOnChangeTeamNames(event: ChangeEvent<HTMLInputElement>) {
        const splitNames = event.currentTarget.value.split(",");
        setTeamNames(splitNames.map((name) => name.trim()));
    }

    function handleClickContinueCustomSettings() {
        onSettingsConfirmed({
            civsPerPlayer: civsPerPlayer!,
            numberOfPlayers: numberOfPlayers!,
            playerNames: playerNames
        });
    }

    return (
        <div className="drafter-settings">
            {/* <DrafterTimeline activeStep={1} /> */}

            <h2>Settings</h2>

            <p>
                Start the drafting process by either selecting a preset or inputting custom values below. Team and player names are optional. Seperate names with a comma.
            </p>

            <Space spacing="md" />

            <h3>Presets</h3>

            <ContentBox className="">
                <InlineInput type="text" label="Team names" width={310} onChange={handleOnChangeTeamNames} placeholder="Comma seperated team names..." />

                <Space spacing="sm" />

                <div className="settings__presets">
                    {
                        presets.map((preset) => <SettingsPreset key={preset.text} text={preset.text} drafterSettings={preset} onSelect={handleSettingsPresetOnChange} />)
                    }
                </div>
            </ContentBox>

            <Space spacing="md" />

            <h3>Custom</h3>

            <ContentBox>
                <InlineInput type="number" label="Number of players *" width={143} onChange={handleOnChangeNumberOfPlayer} />

                <Space spacing="sm" />

                <InlineInput type="number" label="Civs per Player *" width={143} onChange={handleOnChangeCivsPerPlayer} />

                <Space spacing="sm" />

                <InlineInput type="text" label="Player names" width={310} onChange={handleOnChangePlayerNames} placeholder="Comma seperated player names..." />

                <Space spacing="sm" />

                <Container justifyContent="space-between">
                    <p>* required</p>
                    <Button text="Continue" icon={<FontAwesomeIcon icon={faCircleRight} />} onClick={handleClickContinueCustomSettings} disabled={!civsPerPlayer || !numberOfPlayers} />
                </Container>
            </ContentBox>
        </div>
    );
}