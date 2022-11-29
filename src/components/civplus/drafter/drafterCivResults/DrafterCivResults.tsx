import { faShareNodes, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useMemo, MouseEvent } from "react";
import { CivModel, civs } from "../../../../civs";
import { CivLabelModel } from "../../../../labels";
import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Space } from "../../../meadow/space/Space";
import { Civ } from "../../civ/Civ";
import { CivCard } from "../../civCard/CivCard";
import { CivLabel } from "../../civLabel/CivLabel";
import { DrafterTimeline } from "../drafterTimeline/DrafterTimeline";
import { DrafterSettingsModel } from "../settings/DrafterSettings";

import "./drafterCivResults.css";

type PlayerResult = {
    name: string,
    civs: CivModel[]
}

function calculateDrafterResults(settings: DrafterSettingsModel, bans: string[]): PlayerResult[] {
    if (settings.numberOfPlayers > Object.keys(civs).length) {
        return [];
    }

    const playerResults = [];
    let unbannedRemainingCivs = Object.values(civs).filter(civ => !bans.includes(civ.id)).sort(() => 0.5 - Math.random());
    const civsPerPlayerForReal = settings.numberOfPlayers * settings.civsPerPlayer > unbannedRemainingCivs.length ? Math.floor(unbannedRemainingCivs.length / settings.numberOfPlayers) : settings.civsPerPlayer;

    for (let i = 0; i < settings.numberOfPlayers; i++) {
        const playerCivs = unbannedRemainingCivs.slice(0, civsPerPlayerForReal).sort((a, b) => a.leader.localeCompare(b.leader));

        playerResults.push(
            {
                name: settings.playerNames[i] ? settings.playerNames[i] : "Player " + (i + 1),
                civs: playerCivs
            }
        );

        unbannedRemainingCivs = unbannedRemainingCivs.slice(civsPerPlayerForReal);
    }

    return playerResults;
}

export function DrafterCivResults({ settings, bans, results }: { settings: DrafterSettingsModel, bans: string[], results?: PlayerResult[] }) {
    const [hoveredCiv, setHoveredCiv] = useState<CivModel | null>(null);
    const [activeLabels, setActiveLabels] = useState<CivLabelModel[]>([]);

    const calculatedResults = results ? results : useMemo(() => calculateDrafterResults(settings, bans), [settings, bans, results]);
    const labels = useMemo(() => {
        const allDraftedCivs = calculatedResults.reduce((accumulator: CivModel[], currentValue) => { return accumulator.concat(currentValue.civs) }, []);
        const allLabels = allDraftedCivs.reduce((accumulator: CivLabelModel[], currentValue) => { return accumulator.concat(currentValue.labels) }, []);
        return [...new Set(allLabels)];
    }, [settings, bans, results]);

    // write results to url
    useEffect(() => {
        const reducedResults = calculatedResults.map((playerResult) =>
        ({
            name: playerResult.name, civs: playerResult.civs.map((civ) => civ.id)
        }));
        const uriEncodedReults = encodeURIComponent(JSON.stringify(reducedResults));
        history.replaceState(null, "", "?drafterresults=" + uriEncodedReults);
    }, [settings, bans, results]);

    function handleOnMouseEnterCiv(e: any, civ: CivModel) {
        setHoveredCiv(civ);
    }

    function handleOnMouseLeaveCiv() {
        setHoveredCiv(null);
    }

    function handleOnClickShare() {
        navigator.clipboard.writeText(window.location.href);
    }

    function handleOnClickRestart() {
        window.location.href = "/";
    }

    function handleOnClickActiveLabels(label: CivLabelModel) {
        if (activeLabels.includes(label)) {
            setActiveLabels(activeLabels.filter((item) => item != label));
        }
        else {
            setActiveLabels(activeLabels.concat(label));
        }
    }

    function getPlayerMarkup(playerResult: PlayerResult) {
        return (
            <>
                <h3>{playerResult.name}</h3>

                <ContentBox className="drafter-results__civs">
                    {
                        playerResult.civs.length > 0
                            ? playerResult.civs.map((civ) =>
                                <Civ key={civ.id}
                                    className={activeLabels.length > 0 && !activeLabels.some(label => civ.labels.includes(label)) ? "drafter-results__disabled_civ" : ""}
                                    civ={civ}
                                    onMouseEnter={e => handleOnMouseEnterCiv(e, civ)}
                                    onMouseLeave={handleOnMouseLeaveCiv} />)
                            : <p>There are no remaining leaders. Try banning fewer leaders or reducing the number of players.</p>
                    }
                </ContentBox>

                <Space spacing="lg" />
            </>
        );
    }

    return (
        <Container className="drafter-results" gap="40px">
            {/* <DrafterTimeline activeStep={3} /> */}

            <div style={{ flexGrow: 1, overflow: "hidden" }}>
                <Container className="drafter-results__header" justifyContent="space-between">
                    <h2>Results</h2>

                    <Container gap="20px">
                        <Button text="Share" icon={<FontAwesomeIcon icon={faShareNodes} />} onClick={handleOnClickShare} />
                        <Button text="Restart" icon={<FontAwesomeIcon icon={faSync} />} onClick={handleOnClickRestart} variant="secondary" />
                    </Container>
                </Container>

                <Container wrap="wrap">
                    {
                        labels.sort((a, b) => a.localeCompare(b)).map((label) => <CivLabel key={label} label={label} onClick={handleOnClickActiveLabels} />)
                    }
                </Container>

                <Space spacing="md" />

                {
                    calculatedResults.length > 0
                        ? calculatedResults.map((playerResult) => <React.Fragment key={playerResult.name}>{getPlayerMarkup(playerResult)}</React.Fragment>)
                        : <ContentBox>No players were added or your input was invalid.</ContentBox>
                }
            </div>

            {
                calculatedResults.length > 0 &&
                (hoveredCiv
                    ? <CivCard civ={hoveredCiv} />
                    : <ContentBox className="drafter-results__card_placeholder"><Container justifyContent="center" alignItems="center" fill>Hover over leaders to learn about them.</Container></ContentBox>)
            }
        </Container>
    );
}