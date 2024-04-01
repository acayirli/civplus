import {CustomBarChart} from "../CustomBarChart/CustomBarChart";
import {PlayerProfileModel} from "../../types/playerProfile.types";

import games from "../../../scripts/data/games.json";
import {Game} from "../../types/games.types";
import {Text, Tooltip} from "@chakra-ui/react";

export function PlayerTeammates({ player }: { player: PlayerProfileModel })
{
    const teammates: Record<string, {
        name: string,
        countGames: number,
        countWins: number,
        countLosses: number,
    }> = {};
    
    player.gameIds.forEach(gId => {
        const game: Game = games[gId];
        
        if(game.placements.length != 2)
        {
            return;
        }
        
        const playerTeam = game.placements.filter(placement => placement.some(placementPlayer => placementPlayer.player == player.name))[0];
        const isVictory = game.placements.indexOf(playerTeam) == 0;
        
        playerTeam.forEach(teammate => {
            if(teammate.player == player.name)
            {
                return;
            }
            
            if(!teammates[teammate.player])
            {
                teammates[teammate.player] = {
                    name: teammate.player,
                    countWins: 0,
                    countGames: 0,
                    countLosses: 0,
                };
            }

            teammates[teammate.player].countGames += 1;
            
            if(isVictory)
            {
                teammates[teammate.player].countWins += 1;
            }
            else
            {
                teammates[teammate.player].countLosses += 1;
            }            
        });
    });
    
    return (
        <CustomBarChart 
            data={Object.values(teammates)
                .sort((a, b) => b.countGames - a.countGames)
                .map(t => ({ 
                    text: t.name,
                    count: t.countGames, 
                    icon: <Tooltip label={t.name}><Text noOfLines={1} fontWeight="bold" sx={{ marginTop: "5px", writingMode: "vertical-lr", textOrientation: "mixed" }} color="black">{t.name}</Text></Tooltip>
                }))
            } />
    );
}