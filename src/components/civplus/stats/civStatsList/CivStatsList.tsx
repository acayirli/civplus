import { useState } from "react";
import { CivProfileModel } from "../statsMain/StatsMain";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { CivListEntry } from "./civListEntry/CivListEntry";
import { listStyles } from "../list.styles";

function getNumberOfGames(civ: CivProfileModel) {
    return civ.wins + civ.losses + civ.draws;
}

type CivSort = "picks" | "bans" | "wins" | "losses";

function getDisplayedStat(civ: CivProfileModel, sort: CivSort) {
    switch (sort) {
        case "picks":
            return <span>Picks <br /> <b>{civ.picks}</b></span>;
        case "bans":
            return <span>Wins <br /> <b>{civ.bans}</b></span>;
        case "wins":
            return <span>Wins <br /> <b>{civ.wins}</b></span>
        case "losses":
            return <span>Losses <br /> <b>{civ.losses}</b></span>
    }
}

function sortCivs(civs: CivProfileModel[], sort: CivSort) {
    return civs.sort((civA, civB) => {
        switch (sort) {
            case "picks":
                return civB.picks - civA.picks;
            case "bans":
                return civB.bans - civA.bans;
            case "wins":
                return civB.wins - civA.wins;
            case "losses":
                return civB.losses - civA.losses;
            default:
                return civB.name.localeCompare(civA.name);
        }
    });
}

export function CivStatsList({ civList, onClick }: { civList: { [civ: string]: CivProfileModel }, onClick?: (civ: CivProfileModel) => void }) {
    const [sort, setSort] = useState<CivSort>("picks");

    return (
        <div css={{ display: "flex", flexDirection: "column", }}>
            <div css={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <h3>Leaders</h3>

                <div css={{flexGrow: 1}}>
                    <select onChange={(e) => setSort(e.target.value as CivSort)} css={{width: "100%"}}>
                        <option value="picks">Picks</option>
                        <option value="bans">Bans</option>
                        <option value="wins">Wins</option>
                        <option value="losses">Losses</option>
                    </select>
                </div>
            </div>

            <ContentBox css={listStyles}>
                {
                    sortCivs(Object.values(civList), sort).map((civ, index) => <CivListEntry key={civ.name} civ={civ} position={index + 1} displayedStat={getDisplayedStat(civ, sort)} />)
                }
            </ContentBox>
        </div>
    );
}