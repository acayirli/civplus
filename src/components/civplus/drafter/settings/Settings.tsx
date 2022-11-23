import { ContentBox } from "../../../meadow/contentBox/ContentBox"

export function Settings() {
    return (
        <div className="drafter-settings">
            <h2>Settings</h2>

            <h3>Vorlagen</h3>

            <ContentBox>
                Hallo
            </ContentBox>

            <h3>Benutzerdefiniert</h3>

            <ContentBox>
                Hallo
            </ContentBox>
        </div>
    );
}