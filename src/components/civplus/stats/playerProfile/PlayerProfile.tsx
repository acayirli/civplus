import { civs as allCivs } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { CivStatsList } from "../civStatsList/CivStatsList";
import { CivProfileModel, PlayerProfileModel } from "../statsMain/StatsMain";

import "./playerProfile.css";

import civs from "../../../../../scripts/data/civs.json";
import { CivPortrait } from "../../civPortrait/CivPortrait";
import { PlaystyleRadar } from "./playstyleRadar/PlaystyleRadar";
import { CivLabelModel } from "../../../../labels";
import { Space } from "../../../meadow/space/Space";
import { Button } from "../../../meadow/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

function getMostPlayedCiv(player: PlayerProfileModel) {
    return Object.values(player.civs).reduce((prev, current) => (prev.numberOfTimesPlayed > current.numberOfTimesPlayed) ? prev : current).civ;
}

export function PlayerProfile({ player, onClickBack }: { player: PlayerProfileModel, onClickBack: () => void }) {
    const civsAsCivProfiles = Object.values(player.civs)
        .sort((civA, civB) => {
            return civB.numberOfTimesPlayed - civA.numberOfTimesPlayed
        })
        .map((civ): CivProfileModel => ({
            bans: 0,
            draws: 0,
            gameIds: [],
            losses: 0,
            name: civ.civ,
            picks: civ.numberOfTimesPlayed,
            wins: 0
        }));

    const playstyleRadar: { [key: string]: { label: CivLabelModel, occurences: number } } = {};

    Object.values(player.civs).forEach((civ) => {
        const civDetails = allCivs[civ.civ];
        civDetails.labels.forEach((label) => {
            playstyleRadar[label] = playstyleRadar[label] || { label: label, occurences: 0 };
            playstyleRadar[label].occurences += civ.numberOfTimesPlayed;
        });
    });

    return (
        <div className="player-profile">
            <Button onClick={onClickBack} text="Back" icon={<FontAwesomeIcon icon={faCircleLeft} />} variant="free" />

            <Space spacing="lg" />

            <h2>
                {player.name}
            </h2>

            <div className="player-profile__dashboard">
                <div className="player-profile__widget player-profile__rating">
                    <ContentBox>
                    <h3>Rating</h3>
                        Coming soon...
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__most-played">
                    <ContentBox>
                    <h3>Most played leaders</h3>
                        
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__playstyle">
                    <ContentBox>
                    <h3>Playstyle</h3>
                        <PlaystyleRadar labels={Object.values(playstyleRadar)} />
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__stats">
                    <ContentBox>
                    <h3>Stats</h3>
                        Coming soon...
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__recent">
                    <ContentBox>
                        <h3>Recent games</h3>
                        Coming soon...
                    </ContentBox>
                </div>
            </div>
        </div>
    );
}