import { ContentBox } from "../../../meadow/contentBox/ContentBox"
import { SettingsPreset } from "./settingsPreset/SettingsPreset";

import "./settings.css";
import { Space } from "../../../meadow/space/Space";
import { InlineInput } from "../../../meadow/inlineInput/InlineInput";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";

export function Settings() {
    return (
        <div className="drafter-settings">
            <h2>Settings</h2>

            <h3>Presets</h3>

            <ContentBox className="settings__presets">
                todo: team namen
                <SettingsPreset text={"1 v 1"} />
                <SettingsPreset text={"2 v 2"} />
                <SettingsPreset text={"3 v 3"} />
                <SettingsPreset text={"4 v 4"} />
                <SettingsPreset text={"5 v 5"} />
                <SettingsPreset text={"6 v 6"} />
            </ContentBox>

            <Space spacing="md" />

            <h3>Custom</h3>

            <ContentBox>
                todo: player namen
                <InlineInput type="number" label="Players" width={122} />
                <Space spacing="sm" />
                <InlineInput type="number" label="Civs per Player" width={122} />
                <Space spacing="sm" />
                <Container justifyContent="flex-end"><Button text="Continue" /></Container>
            </ContentBox>
        </div>
    );
}