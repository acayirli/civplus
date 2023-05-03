import { DateTime } from "luxon";
import { listEntryStyles } from "../list.styles";
import { Game } from "../statsMain/StatsMain";

export function GameEntry({ game }: { game: Game }) {

    function getGameMode(game: Game) {
        if (game.placements.length == 2) {
            if (game.placements.some((placement) => placement.length > 1)) {
                return `Teamers ${game.placements[0].length}v${game.placements[1].length}`;
            }
            else {
                return "Duel";
            }
        }
        else {
            return `FFA ${game.placements.length}`;
        }
    }

    return (
        <div css={listEntryStyles}>

            <div className="civ__title" css={{width: 140, flexShrink: 0}}>
                <div className="fancy_title" css={{ marginBottom: "5px" }}>
                    {getGameMode(game)}
                </div>

                <div className="civ__nation">
                    {DateTime.fromISO(game.date).toFormat("dd.MM.yyyy")}
                    &nbsp;&nbsp;
                    {DateTime.fromISO(game.date).toFormat("HH:mm")}
                </div>
            </div>

            <div css={{fontSize:11, display: "flex", gap: "5px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                {
                    getGameMode(game).startsWith("FFA") ?
                        <>
                            <span>
                                1st
                                <br />
                                <b>{game.placements[0].map((player) => player.player).join(" ")}</b>
                            </span>

                            <span>
                                2nd
                                <br />
                                <b>{game.placements[1].map((player) => player.player).join(" ")}</b>
                            </span>

                            <span>
                                3rd
                                <br />
                                <b>{game.placements[2].map((player) => player.player).join(" ")}</b>
                            </span>
                        </>
                        :
                        <span>
                            Winners
                            <br />
                            {game.hasVictory
                                ? <b>{game.placements[0].map((player) => player.player).join(" ")}</b>
                                : <i style={{}}>(draw)</i>}
                        </span>
                }
            </div>
        </div>
    );
}