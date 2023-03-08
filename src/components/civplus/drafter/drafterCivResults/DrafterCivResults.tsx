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
import { Tag } from "../../../meadow/tag/Tag";
import { Civ } from "../../civ/Civ";
import { CivCard } from "../../civCard/CivCard";
import { CivLabel } from "../../civLabel/CivLabel";
import { CivLabelFilters } from "../../CivLabelFilters/CivLabelFilters";
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

export function DrafterCivResults({ settings, bans, results, onRestart }: { settings: DrafterSettingsModel, bans: string[], results?: PlayerResult[], onRestart: () => void }) {
    const [hoveredCiv, setHoveredCiv] = useState<CivModel | null>();
    const [activeLabels, setActiveLabels] = useState<CivLabelModel[]>([]);
    const [activePlayerTags, setActivePlayerTags] = useState<string[]>([]);

    const calculatedResults = results ? results : useMemo(() => calculateDrafterResults(settings, bans), [settings, bans]);
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
        history.replaceState(null, "", import.meta.env.BASE_URL + "?drafterresults=" + uriEncodedReults);
    }, [settings, bans, results]);

    function handleOnMouseEnterCiv(e: any, civ: CivModel) {
        setHoveredCiv(civ);
    }

    function handleOnClickShare() {
        navigator.clipboard.writeText(window.location.href);
    }

    function handleOnChangeLabelFilters(labels: CivLabelModel[]) {
        setActiveLabels(labels);
    }

    function handleOnChangeActivePlayerTags(tag: string) {
        let newPlayerTags;

        if (activePlayerTags.includes(tag)) {
            newPlayerTags = activePlayerTags.filter((item) => item != tag);
            setActivePlayerTags(newPlayerTags);
        }
        else {
            newPlayerTags = activePlayerTags.concat(tag);
            setActivePlayerTags(newPlayerTags);
        }
    }

    function getPlayerMarkup(playerResult: PlayerResult) {
        return (
            <>
                <ContentBox>
                    <h3>{playerResult.name}</h3>

                    <div className="drafter-results__civs">
                        {
                            playerResult.civs.length > 0
                                ? playerResult.civs.map((civ) =>
                                    <Civ key={civ.id}
                                        className={activeLabels.length > 0 && !activeLabels.some(label => civ.labels.includes(label)) ? "drafter-results__disabled_civ" : ""}
                                        civ={civ}
                                        onMouseEnter={e => handleOnMouseEnterCiv(e, civ)} />)
                                : <p>There are no remaining leaders. Try banning fewer leaders or reducing the number of players.</p>
                        }
                    </div>
                </ContentBox>

                <Space spacing="md" />
            </>
        );
    }

    return (
        <Container className="drafter-results" gap="40px">
            <div style={{ flexGrow: 1, overflow: "hidden" }}>
                <Container className="drafter-results__header" justifyContent="space-between">
                    <h2>Results</h2>

                    <Container gap="20px">
                        <Button text="Share" icon={<FontAwesomeIcon icon={faShareNodes} />} onClick={handleOnClickShare} />
                        <Button text="Restart" icon={<FontAwesomeIcon icon={faSync} />} onClick={onRestart} variant="secondary" />
                    </Container>
                </Container>

                Tags

                <Space spacing="xs" />

                <CivLabelFilters labels={labels} onChange={handleOnChangeLabelFilters} />

                <Space spacing="md" />

                Players

                <Space spacing="xs" />

                <Container>
                    {calculatedResults.length > 0 && calculatedResults.map((playerResult) => <Tag key={playerResult.name} label={playerResult.name} onClick={handleOnChangeActivePlayerTags}></Tag>)}
                </Container>

                <Space spacing="md" />

                {
                    calculatedResults.length > 0
                        ? calculatedResults.map((playerResult) => (activePlayerTags.length == 0 || activePlayerTags.includes(playerResult.name)) &&
                            <React.Fragment key={playerResult.name}>{getPlayerMarkup(playerResult)}</React.Fragment>)
                        : <ContentBox>No players were added or your input was invalid.</ContentBox>
                }
            </div>

            {
                calculatedResults.length > 0 && hoveredCiv
                    ? <CivCard civ={hoveredCiv} />
                    : <ContentBox className="drafter-results__card_placeholder"><Container justifyContent="center" alignItems="center" fill>Hover over leaders to learn about them.</Container></ContentBox>
            }
        </Container>
    );
}