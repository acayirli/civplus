import { useState } from "react";
import { Main } from "../../../meadow/main/Main";
import { Lists } from "../lists/Lists";

import games from "../../../../../scripts/data/games.json";
import players from "../../../../../scripts/data/players.json";
import civs from "../../../../../scripts/data/civs.json";

type statsState = "list" | "playerDetail" | "civDetail" | "gameDetail";

export type Game = {
    date: string,
    placements: PlayerInGame[][],
    hasVictory: boolean,
    bans: string[]
}

export type CivProfileModel = {
    name: string,
    picks: number,
    bans: number
}

export type PlayerProfileModel = {
    name: string,
    rating: number,
    losses: number,
    wins: number,
    draws: number,
    gameIds: number[],
    civs: { [civ: string]: { civ: string, numberOfTimesPlayed: number } },
    civsSortedByNumberOfTimesPlayed: string[]
}

export type PlayerInGame = {
    player: string,
    civ: string
}

export function StatsMain() {
    const [statsState, setStatsState] = useState<statsState>("list");

    switch (statsState) {
        case "list":
            return (
                <Main>
                    <Lists players={players} civData={civs} games={games} />
                </Main>
            );

        case "playerDetail":
            return (
                <Main>

                </Main>
            );

        case "civDetail":
            return (
                <Main>

                </Main>
            );

        case "gameDetail":
            return (
                <Main>

                </Main>
            );

        default:
            return (
                <p>Unsupported stats state {statsState} reached.</p>
            );
    }
}