import {PlayerProfileModel} from "../types/playerProfile.types";
import {ordinal} from "openskill";

export function getRating(player: PlayerProfileModel) {
    return Math.floor(1500 + (ordinal(player.rating) * 10));
}