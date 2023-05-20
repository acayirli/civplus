import horse from "../../../assets/images/ranks/horse.webp";
import iron from "../../../assets/images/ranks/iron.webp";
import niter from "../../../assets/images/ranks/niter.webp";
import coal from "../../../assets/images/ranks/coal.webp";
import oil from "../../../assets/images/ranks/oil.webp";
import aluminium from "../../../assets/images/ranks/aluminium.webp";
import uranium from "../../../assets/images/ranks/uranium.webp";

import { getLeague } from "../league/legauehelper";

export function LeagueIcon({ rating }: { rating: number }) {
    const league = getLeague(rating);

    let leagueIcon;

    switch (league) {
        case "Uranium":
            leagueIcon = uranium;
            break;
        case "Aluminium":
            leagueIcon = aluminium;
            break;
        case "Oil":
            leagueIcon = oil;
            break;
        case "Coal":
            leagueIcon = coal;
            break;
        case "Niter":
            leagueIcon = niter;
            break;
        case "Iron":
            leagueIcon = iron;
            break;
        default:
            leagueIcon = horse;
            break;
    }

    return (
        <img css={{ width: 39 }} src={leagueIcon} />
    );
}