import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { civs } from "../../../../civs";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { DrafterTimeline } from "../drafterTimeline/DrafterTimeline";
import { CivBanButton } from "./civBanButton/CivBanButton";

import "./drafterBans.css";

export function DrafterBans({ onConfirmed }: { onConfirmed: (bans: string[]) => void }) {
    const [bans, setBans] = useState<string[]>([]);

    function handleBanClick(civName: string) {
        if (bans.includes(civName)) {
            setBans(bans.filter(x => x != civName));

        }
        else {
            setBans([...bans, civName]);
        }
    }

    function handleContinueClick() {
        onConfirmed(bans);
    }

    return (
        <div className="drafter-bans">
            {/* <DrafterTimeline activeStep={2} /> */}

            <Container justifyContent="space-between">
                <h2>Bans</h2>

                <Button text="Continue" icon={<FontAwesomeIcon icon={faCircleRight} />} onClick={handleContinueClick} />
            </Container>

            <p>Select which leaders to ban from the draft (or continue without bans).</p>

            <ContentBox className="drafter-bans__civs">
                {
                    Object.values(civs).map((civ) => <CivBanButton key={civ.id} civ={civ} banned={bans.includes(civ.id)} onClick={handleBanClick} />)
                }
            </ContentBox>
        </div>
    );
}