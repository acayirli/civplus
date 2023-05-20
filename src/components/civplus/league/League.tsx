import { LeagueIcon } from "../leagueIcon/LeagueIcon";
import { getLeague } from "./legauehelper";

export function League({ rating }: { rating: number }) {
    return (
        <div css={{display: "flex", gap: "10px", alignItems: "center"}}>
            <LeagueIcon rating={rating} />

            <div className="fancy_title">
                {
                    getLeague(rating) + " league"
                }
            </div>
        </div>
    );
}