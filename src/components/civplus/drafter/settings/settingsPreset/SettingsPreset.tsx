import "./settingsPreset.css";

export function SettingsPreset({ text }: { text: string }) {
    return (
        <button className="settings-preset" type="button">
            { text }
        </button>
    );
}