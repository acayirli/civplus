import {PlayerProfileModel} from "../../types/playerProfile.types";
import {useState} from "react";
import {PlayersStatsTable} from "../PlayersStatsTable/PlayersStatsTable";
import {PlayerProfile} from "../PlayerProfile/PlayerProfile";





export function PlayersStats()
{
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerProfileModel | undefined>();
    
    if(selectedPlayer)
    {
        return <PlayerProfile player={selectedPlayer} onBack={() => setSelectedPlayer(undefined)} />;
    }
    else
    {
        return <PlayersStatsTable onSelectPlayer={setSelectedPlayer} />;
    }
}