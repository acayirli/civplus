import {Flex} from "@chakra-ui/react";
import {GameCard} from "../GameCard";
import {PlayerProfileModel} from "../../types/playerProfile.types";

import games from "../../../scripts/data/games.json";

export function PlayerRecentGames({ player }: { player: PlayerProfileModel })
{
    return (
        <Flex gap="10px">
            {
                player.gameIds.sort((a, b) => games[b].date.localeCompare(games[a].date)).map(gId => (
                    <GameCard key={gId} game={games[gId]} highlightedPlayer={player.name} />
                ))
            }
        </Flex>            
    );
}