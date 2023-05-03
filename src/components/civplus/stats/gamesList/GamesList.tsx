import { DateTime } from "luxon";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { listStyles } from "../list.styles";
import { Game } from "../statsMain/StatsMain";
import { GameEntry } from "./GameEntry";

export function GamesList({ games }: { games: Game[]}) {
    return (
        <div css={{ display: "flex", flexDirection: "column", }}>
            <div css={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <h3>Recent Games</h3>

                <div css={{ flexGrow: 1 }}>
                </div>
            </div>

            <ContentBox css={listStyles}>
                {
                    games
                    .sort((a, b) => DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis())
                    .map((game, index) => <GameEntry key={index} game={game} />)
                }
            </ContentBox>
        </div>
    );
}