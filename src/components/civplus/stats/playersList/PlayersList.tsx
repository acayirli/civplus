import { useState } from "react";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { PlayerProfileModel } from "../statsMain/StatsMain";
import { ordinal } from "openskill";
import { PlayerListEntry } from "./playerListEntry/PlayerListEntry";
import { listStyles } from "../list.styles";
import { LeagueIcon } from "../../leagueIcon/LeagueIcon";

type PlayerSort = "wins" | "losses" | "winrate" | "rating" | "noOfGames";

export function getNumberOfGames(player: PlayerProfileModel) {
    return player.wins + player.losses + player.draws;
}

export function getWinRate(player: PlayerProfileModel) {
    return Math.floor(player.wins / getNumberOfGames(player) * 100);
}

export function getRating(player: PlayerProfileModel) {
    return Math.floor(1500 + (ordinal(player.rating) * 10));
}

function getDisplayedStat(player: PlayerProfileModel, playerSort: PlayerSort) {
    switch (playerSort) {
        case "wins":
            return <span>Wins <br /> <b>{player.wins}</b></span>
        case "losses":
            return <span>Losses <br /> <b>{player.losses}</b></span>
        case "rating":
            return <span><LeagueIcon rating={getRating(player)} /></span>
        case "noOfGames":
            return <span>Games <br /> <b>{getNumberOfGames(player)}</b></span>
        case "winrate":
        default:
            return <span>Winrate <br /> <b>{getWinRate(player)} %</b></span>
    }
}

function sortPlayers(players: { [player: string]: PlayerProfileModel }, playerSort: PlayerSort) {
    return Object.values(players).sort((playerA, playerB) => {
        switch (playerSort) {
            case "wins":
                return playerB.wins - playerA.wins;
            case "losses":
                return playerB.losses - playerA.losses;
            case "rating":
                return getRating(playerB) - getRating(playerA);
            case "noOfGames":
                return getNumberOfGames(playerB) - getNumberOfGames(playerA);
            case "winrate":
                return getWinRate(playerB) - getWinRate(playerA);
            default:
                return playerB.name.localeCompare(playerA.name);
        }
    });
}

export function PlayersList({ players, onSelect }: { players: { [player: string]: PlayerProfileModel }, onSelect: (player: PlayerProfileModel) => void }) {
    const [playerSort, setPlayerSort] = useState<PlayerSort>("wins");

    function handleClickEntry(player: PlayerProfileModel) {
        onSelect(player);
    }

    return (
        <div css={{ display: "flex", flexDirection: "column", }}>
            <div css={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <h3>Players</h3>

                <div css={{ flexGrow: 1 }}>
                    <select onChange={(e) => setPlayerSort(e.target.value as PlayerSort)} css={{ width: "100%" }}>
                        <option value="wins">Wins</option>
                        <option value="losses">Losses</option>
                        <option value="winrate">Winrate</option>
                        <option value="noOfGames">Number of games</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <ContentBox css={listStyles}>
                {
                    sortPlayers(players, playerSort)
                        .map((player, index) => <PlayerListEntry
                            key={player.name}
                            player={player}
                            position={index + 1}
                            displayedStat={getDisplayedStat(player, playerSort)}
                            onClick={() => { handleClickEntry(player); }} />)
                }
            </ContentBox>
        </div>
    );
}