import {PlayerProfileModel} from "../../types/playerProfile.types";
import {LeaderPortrait} from "../LeaderPortrait/LeaderPortrait";
import {leaders} from "../../data/leaders";
import {CustomBarChart} from "../CustomBarChart/CustomBarChart";

export function PlayerMostPlayedLeaders({ player }: { player: PlayerProfileModel })
{
    const mostPlayedLeaders = Object.values(player.civs)
        .sort((civA, civB) => civB.numberOfTimesPlayed - civA.numberOfTimesPlayed);
    
    return (
        <CustomBarChart data={mostPlayedLeaders.map(x => ({ text: x.civ, count: x.numberOfTimesPlayed, icon: <LeaderPortrait leader={leaders[x.civ]} /> }))} />
    );
}