import { civs } from "../../../../civs";
import { Civ } from "../../civ/Civ";
import { CivProfileModel } from "../statsMain/StatsMain";

import "./civStatsList.css";

function getNumberOfGames(civ: CivProfileModel) {
    return civ.wins + civ.losses + civ.draws;
}

function getWinRate(civ: CivProfileModel) {
    const winRate = Math.floor(civ.wins / getNumberOfGames(civ) * 100);
    return isNaN(winRate) ? "-" : winRate + " %";
}

export function CivStatsList({ civList }: { civList: CivProfileModel[] }) {
    return (
        <>
            {
                civList.map((civ, index) =>
                    <div key={index} className="stats-lists__entry stats-lists__entry--civ">
                        <Civ civ={civs[civ.name]} />

                        <div className="stats-lists__extra-stats">
                            <span>Picked <br /> <b>{civ.picks}</b></span>
                            <span>Wins <br /> <b>{civ.wins}</b></span>
                            <span>Draws <br /> <b>{civ.draws}</b></span>
                            <span>Banned <br /> <b>{civ.bans}</b></span>
                            <span>Losses <br /> <b>{civ.losses}</b></span>
                            <span>Winrate <br /> <b>{getWinRate(civ)}</b></span>
                        </div>
                    </div>)
            }
        </>
    );
}