import { DrafterSettingsModel } from "../DrafterSettings";
import "./settingsPreset.css";

export function SettingsPreset({ text, drafterSettings, onSelect }: { text: string, drafterSettings: DrafterSettingsModel, onSelect: (drafterSettings: DrafterSettingsModel) => void }) {
    function handleOnSelect() {
        onSelect(drafterSettings);
        console.log("asd");
    }

    return (
        <button className="settings-preset" type="button" onClick={handleOnSelect}>
            {text}
        </button>
    );
}