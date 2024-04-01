export type Game = {
    date: string,
    placements: PlayerInGame[][],
    hasVictory: boolean,
    bans: string[]
}

export type PlayerInGame = {
    player: string,
    civ: string
}