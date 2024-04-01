import {PlayerProfileModel} from "../types/playerProfile.types";

export function getNumberOfGames(player: PlayerProfileModel) {
    return player.wins + player.losses + player.draws;
}

export function getWinRate(player: PlayerProfileModel) {
    return Math.floor(player.wins / getNumberOfGames(player) * 100);
}