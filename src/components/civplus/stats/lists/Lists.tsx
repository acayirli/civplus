import { civs } from "../../../../civs";
import { Space } from "../../../meadow/space/Space";
import { Civ } from "../../civ/Civ";
import { CivPortrait } from "../../civPortrait/CivPortrait";
import { CivStatsList } from "../civStatsList/CivStatsList";
import { CivProfileModel, Game, PlayerProfileModel } from "../statsMain/StatsMain";

import "./lists.css";

function getNumberOfGames(player: PlayerProfileModel) {
    return player.wins + player.losses + player.draws;
}

function getWinRate(player: PlayerProfileModel) {
    return Math.floor(player.wins / getNumberOfGames(player) * 100);
}

export function Lists({ players, civData, games }: { players: { [player: string]: PlayerProfileModel }, civData: { [civ: string]: CivProfileModel }, games: Game[] }) {
    return (
        <div className="stats">
            <h2>Stats</h2>

            <div className="stats-lists">
                <div className="stats-lists__list">
                    <h3>Players</h3>

                    {
                        Object.values(players)
                            .sort((playerA, playerB) => {
                                const playerANoOfGames = getNumberOfGames(playerA);
                                const playerBNoOfGames = getNumberOfGames(playerB);

                                if (playerANoOfGames != playerBNoOfGames) {
                                    return playerBNoOfGames - playerANoOfGames;
                                }
                                else if (playerA.wins != playerB.wins) {
                                    return playerB.wins - playerA.wins;
                                }
                                else {
                                    return playerA.name.localeCompare(playerB.name);
                                }
                            })
                            .map((player) =>
                                <div key={player.name} className="stats-lists__entry stats-lists__entry--player">
                                    <CivPortrait civ={civs[player.civsSortedByNumberOfTimesPlayed[0]]} />

                                    <div className="fancy_title">
                                        {player.name}
                                    </div>

                                    <div className="stats-lists__extra-stats">
                                        <span>Wins <br /> <b>{player.wins}</b></span>

                                        <span>Losses <br /> <b>{player.losses}</b></span>

                                        <span>Draws <br /> <b>{player.draws}</b></span>

                                        <span>Winrate <br /> <b>{getWinRate(player)} %</b></span>
                                    </div>
                                </div>)
                    }
                </div>

                <div>
                    <div className="stats-lists__list">
                        <h3>Most picked leaders</h3>

                        {
                            <CivStatsList civList={Object.values(civData)
                                .sort((civA, civB) => {
                                    return civB.picks - civA.picks;
                                })
                                .slice(0, 5)} />
                        }
                    </div>

                    <div className="stats-lists__list" style={{ marginTop: "64px" }}>
                        <h3>Most banned leaders</h3>

                        <CivStatsList civList={Object.values(civData)
                            .sort((civA, civB) => {
                                return civB.bans - civA.bans;
                            })
                            .slice(0, 5)} />
                    </div>
                </div>

                <div className="stats-lists__list">
                    <h3>Recent games</h3>

                    {
                        games.map((game, index) =>
                            <div key={index} className="stats-lists__entry stats-lists__entry--game">
                                {game.date}
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}