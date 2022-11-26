import { DrafterSettingsModel } from "../Settings";
import "./settingsPreset.css";

export function SettingsPreset({ text, drafterSettings, onSelect }: { text: string, drafterSettings: DrafterSettingsModel, onSelect: (drafterSettings: DrafterSettingsModel) => void }) {
    function handleOnSelect() {
        onSelect(drafterSettings);
        console.log("asd");
    }

    return (
        <button className="settings-preset" type="button" onChange={handleOnSelect}>
            {text}
        </button>
    );
}