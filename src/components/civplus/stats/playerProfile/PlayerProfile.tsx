import { civs as allCivs } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { CivStatsList } from "../civStatsList/CivStatsList";
import { CivProfileModel, PlayerProfileModel } from "../statsMain/StatsMain";

import { CivPortrait } from "../../civPortrait/CivPortrait";
import { PlaystyleRadar } from "./playstyleRadar/PlaystyleRadar";
import { CivLabelModel } from "../../../../labels";
import { Space } from "../../../meadow/space/Space";
import { Button } from "../../../meadow/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { LeagueIcon } from "../../leagueIcon/LeagueIcon";
import { getNumberOfGames, getRating, getWinRate } from "../playersList/PlayersList";
import { League } from "../../league/League";
import { Civ } from "../../civ/Civ";

import games from "../../../../../scripts/data/games.json";
import { GamesList } from "../gamesList/GamesList";

function getMostPlayedCiv(player: PlayerProfileModel) {
    return Object.values(player.civs).reduce((prev, current) => (prev.numberOfTimesPlayed > current.numberOfTimesPlayed) ? prev : current).civ;
}

export function PlayerProfile({ player, onClickBack }: { player: PlayerProfileModel, onClickBack: () => void }) {
    const mostPlayedLeaders = Object.values(player.civs)
        .sort((civA, civB) => {
            return civB.numberOfTimesPlayed - civA.numberOfTimesPlayed
        })

    const playstyleRadar: { [key: string]: { label: CivLabelModel, occurences: number } } = {};

    Object.values(player.civs).forEach((civ) => {
        const civDetails = allCivs[civ.civ];
        civDetails.labels.forEach((label) => {
            playstyleRadar[label] = playstyleRadar[label] || { label: label, occurences: 0 };
            playstyleRadar[label].occurences += civ.numberOfTimesPlayed;
        });
    });

    console.log(player.gameIds)

    return (
        <div css={{ maxWidth: 1150, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", flexGrow: 1 }}>
            <Button onClick={onClickBack} text="Back" icon={<FontAwesomeIcon icon={faCircleLeft} />} variant="free" />

            <Space spacing="lg" />

            <h2>{player.name}</h2>

            <div css={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", ".content_box": { margin: 0 }, flexGrow: 1 }}>
                <div css={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <ContentBox>
                        <div css={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <League rating={getRating(player)} />

                            <div className="civ__nation">
                                Rating {getRating(player)}
                            </div>
                        </div>
                    </ContentBox>

                    <ContentBox>
                        <div css={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
                            <span>Wins <br /> <b>{player.wins}</b></span>
                            <span>Losses <br /> <b>{player.losses}</b></span>
                            <span>Games <br /> <b>{getNumberOfGames(player)}</b></span>
                            <span>Winrate <br /> <b>{getWinRate(player)} %</b></span>
                        </div>
                    </ContentBox>

                    <ContentBox>
                        <h3>Playstyle</h3>
                        <PlaystyleRadar labels={Object.values(playstyleRadar)} />
                    </ContentBox>
                </div>

                <ContentBox css={{flexGrow: 1}}>
                    <h3>Most played leaders</h3>

                    <div css={{position: "relative", overflow: "auto"}}>
                        <div css={{position: "absolute", height: "100%"}}>
                            {
                                mostPlayedLeaders.map((leader) => <Civ civ={allCivs[leader.civ]} />)
                            }
                        </div>
                    </div>
                </ContentBox>

                <ContentBox>
                    <div css={{position: "relative"}}>
                        {/* <GamesList games={player.gameIds.map((gameId) => games[gameId])} /> */}
                    </div>
                </ContentBox>
            </div>
        </div>
    );

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