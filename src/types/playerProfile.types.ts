export type PlayerCivsModel = {
    civ: string,
    numberOfTimesPlayed: number,
    wins: number,
    losses: number,
}

export type PlayerProfileModel = {
    name: string,
    rating: { mu: number, sigma: number },
    losses: number,
    wins: number,
    draws: number,
    gameIds: number[],
    civs: { [civ: string]: PlayerCivsModel },
}