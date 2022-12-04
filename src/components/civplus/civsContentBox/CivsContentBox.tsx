import { ContentBox } from "../../meadow/contentBox/ContentBox";

import "./civsContentBox.css";

export function CivsContentBox({ children }: { children: React.ReactNode }) {
    return (
        <ContentBox className="civs_content_box">
            {children}
        </ContentBox>
    );
}