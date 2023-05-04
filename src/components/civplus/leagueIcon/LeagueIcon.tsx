import horse from "../../../assets/images/ranks/horse.webp";
import iron from "../../../assets/images/ranks/iron.webp";
import niter from "../../../assets/images/ranks/niter.webp";
import coal from "../../../assets/images/ranks/coal.webp";
import oil from "../../../assets/images/ranks/oil.webp";
import aluminium from "../../../assets/images/ranks/aluminium.webp";
import uranium from "../../../assets/images/ranks/uranium.webp";

import ratingThresholds from "../../../../scripts/data/ratings.json";

export function LeagueIcon({ rating }: { rating: number }) {
    const ratings: { highestRating: number, lowestRating: number } = ratingThresholds;
    const percentage = (rating - ratings.lowestRating) / (ratings.highestRating - ratings.lowestRating);

    let leagueIcon;

    switch (true) {
        case (percentage >= .90):
            leagueIcon = uranium;
            break;
        case (percentage >= .75):
            leagueIcon = aluminium;
            break;
        case (percentage >= .60):
            leagueIcon = oil;
            break;
        case (percentage >= .45):
            leagueIcon = coal;
            break;
        case (percentage >= .30):
            leagueIcon = niter;
            break;
        case (percentage >= .15):
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