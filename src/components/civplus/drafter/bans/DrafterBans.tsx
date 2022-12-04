import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CivModel, civs } from "../../../../civs";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { CivButton } from "../../civButton/CivButton";

import "./drafterBans.css";

export function DrafterBans({ onConfirmed }: { onConfirmed: (bans: string[]) => void }) {
    const [bans, setBans] = useState<string[]>([]);

    function handleBanClick(civ: CivModel) {
        if (bans.includes(civ.id)) {
            setBans(bans.filter(x => x != civ.id));

        }
        else {
            setBans([...bans, civ.id]);
        }
    }

    function handleContinueClick() {
        onConfirmed(bans);
    }

    return (
        <div className="drafter-bans">
            <Container justifyContent="space-between">
                <h2>Bans</h2>

                <Button text="Continue" icon={<FontAwesomeIcon icon={faCircleRight} />} onClick={handleContinueClick} />
            </Container>

            <p>Select which leaders to ban from the draft (or continue without bans).</p>

            <ContentBox className="drafter-bans__civs">
                {
                    Object.values(civs).map((civ) => <CivButton key={civ.id} civ={civ} className={bans.includes(civ.id) ? "drafter-bans__banned_civ" : ""} onClick={handleBanClick} />)
                }
            </ContentBox>
        </div>
    );
}