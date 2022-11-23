export type CivModel = {
    id: string,
    country: string,
    leader: string,
    portrait: string,
    strength: CivStrength,
    difficulty: CivDifficulty,
}

export type CivStrength = 1 | 2 | 3;
export type CivDifficulty = 1 | 2 | 3;