import {Flex, Stat, StatLabel, StatNumber} from "@chakra-ui/react";
import {getRating} from "../../helper/ratingHelper";
import {getNumberOfGames, getWinRate} from "../../helper/playerHelper";
import {PlayerProfileModel} from "../../types/playerProfile.types";

export function PlayerMetadata({ player }: { player: PlayerProfileModel })
{
    return (
        <Flex>
            <Stat>
                <StatLabel>Rating</StatLabel>
                <StatNumber>{getRating(player)}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Winrate</StatLabel>
                <StatNumber>{getWinRate(player)} %</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Wins</StatLabel>
                <StatNumber>{player.wins}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Losses</StatLabel>
                <StatNumber>{player.losses}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Number of Games</StatLabel>
                <StatNumber>{getNumberOfGames(player)}</StatNumber>
            </Stat>
        </Flex>
    );
}