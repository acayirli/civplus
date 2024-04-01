export type PlayerProfileModel = {
    name: string,
    rating: { mu: number, sigma: number },
    losses: number,
    wins: number,
    draws: number,
    gameIds: number[],
    civs: { [civ: string]: { civ: string, numberOfTimesPlayed: number } },
}