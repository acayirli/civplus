import {Flex} from "@chakra-ui/react";
import {GameCard} from "../GameCard";

export function PlayerRecentGames()
{
    return (
        <Flex gap="10px">
            <GameCard />
            <GameCard />
            <GameCard />
        </Flex>            
    );
}