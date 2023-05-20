export type Leagues = "Horse" | "Iron" | "Niter" | "Coal" | "Oil" | "Aluminium" | "Uranium";

import ratingThresholds from "../../../../scripts/data/ratings.json";

export function getLeague(rating: number): Leagues {
    const ratings: { highestRating: number, lowestRating: number } = ratingThresholds;
    const percentage = (rating - ratings.lowestRating) / (ratings.highestRating - ratings.lowestRating);

    let league: Leagues;

    switch (true) {
        case (percentage >= .90):
            league = "Uranium";
            break;
        case (percentage >= .75):
            league = "Aluminium";
            break;
        case (percentage >= .60):
            league = "Oil";
            break;
        case (percentage >= .45):
            league = "Coal";
            break;
        case (percentage >= .30):
            league = "Niter";
            break;
        case (percentage >= .15):
            league = "Iron";
            break;
        default:
            league = "Horse";
            break;
    }

    return league;
}