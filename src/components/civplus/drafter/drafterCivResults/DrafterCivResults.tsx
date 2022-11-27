import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMemo } from "react";
import { CivModel, civs } from "../../../../civs";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Space } from "../../../meadow/space/Space";
import { Civ } from "../../civ/Civ";
import { CivCard } from "../../civCard/CivCard";
import { DrafterTimeline } from "../drafterTimeline/DrafterTimeline";
import { DrafterSettingsModel } from "../settings/Settings";

import "./drafterCivResults.css";

type PlayerResult = {
    name: string,
    civs: CivModel[]
}

function calculateDrafterResults(settings: DrafterSettingsModel, bans: string[]): PlayerResult[] {
    const playerResults = [];
    let unbannedRemainingCivs = Object.values(civs).filter(civ => !bans.includes(civ.id)).sort(() => 0.5 - Math.random());
    const civsPerPlayerForReal = settings.numberOfPlayers * settings.civsPerPlayer > unbannedRemainingCivs.length ? Math.floor(unbannedRemainingCivs.length / settings.numberOfPlayers) : settings.civsPerPlayer;

    for (let i = 0; i < settings.numberOfPlayers; i++) {
        const playerCivs = unbannedRemainingCivs.slice(0, civsPerPlayerForReal).sort((a, b) => a.leader.localeCompare(b.leader));

        playerResults.push(
            {
                name: "Player " + i,
                civs: playerCivs
            }
        );

        unbannedRemainingCivs = unbannedRemainingCivs.slice(civsPerPlayerForReal);
    }

    return playerResults;
}

export function DrafterCivResults({ settings, bans }: { settings: DrafterSettingsModel, bans: string[] }) {
    const results = useMemo(() => calculateDrafterResults(settings, bans), [settings, bans]);

    function getPlayerMarkup(playerResult: PlayerResult) {
        return (
            <>
                <h3>{playerResult.name}</h3>

                <ContentBox className="drafter-results__civs">
                    {
                        playerResult.civs.length > 0
                            ? playerResult.civs.map((civ) => <Civ key={civ.id} civ={civ} />)
                            : <div>There are no remaining leaders. Try banning fewer leaders.</div>
                    }
                </ContentBox>

                <Space spacing="lg" />
            </>
        );
    }

    return (
        <div className="drafter-results">
            <DrafterTimeline activeStep={3} />

            <Container justifyContent="space-between">
                <h2>Results</h2>

                <Button text="Share" icon={<FontAwesomeIcon icon={faShareNodes} />} onClick={function () { console.log("ASD") }} />
            </Container>

            {
                results.map((playerResult) => <React.Fragment key={playerResult.name}>{getPlayerMarkup(playerResult)}</React.Fragment>)
            }
        </div>
    );
}