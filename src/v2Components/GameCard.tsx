import {Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {Game} from "../types/games.types";
import {DateTime} from "luxon";

export function GameCard({ game, highlightedPlayer }: { game: Game, highlightedPlayer: string })
{
    function getHeading()
    {
        if(game.placements.length == 2)
        {
            if(game.placements[0].length == 1 && game.placements[1].length == 1)
            {
                return "Duel";
            }
            else
            {
                return "Teamers " + game.placements[0].length + "v" + game.placements[1].length;
            }
        }
        else 
        {
            return "FFA " + game.placements.length;
        }            
    }
    
    return (
        <Card variant="outline" sx={{ flexShrink: 0 }}>
            <CardHeader paddingBottom="10px">
                <Flex justifyContent="space-between" gap="20px" alignItems="flex-start">
                    <Heading size="sm">
                        { getHeading() }
                    </Heading>
                    
                    <Text fontSize="xs">
                        { DateTime.fromISO(game.date).toFormat("dd.MM.yyyy hh:mm") }
                    </Text>
                </Flex>
            </CardHeader>
            
            <CardBody paddingTop="10px">
                {
                    game.placements.length == 2
                        ? (
                            <SimpleGrid columns={3}>
                                <Stack>
                                    <Heading size="sm">{game.hasVictory ? "Winners" : "Draw"}</Heading>
                                    {
                                        game.placements[0].map(player => (
                                            <Text key={player.player} noOfLines={1} sx={player.player == highlightedPlayer ? { color: "var(--chakra-colors-orange-400)" } : undefined}>
                                                {player.player}
                                            </Text>
                                        ))
                                    }
                                </Stack>

                                <Stack alignItems="center" justifyContent="center">
                                    <Text>vs</Text>
                                </Stack>

                                <Stack alignItems="flex-end">
                                    <Heading size="sm">{game.hasVictory ? "Losers" : "Draw"}</Heading>
                                    {
                                        game.placements[1].map((player) => (
                                            <Text key={player.player} noOfLines={1} sx={player.player == highlightedPlayer ? { color: "var(--chakra-colors-orange-400)" } : undefined}>
                                                {player.player}
                                            </Text>
                                        ))
                                    }
                                </Stack>
                            </SimpleGrid>
                        )
                        : (
                            <SimpleGrid columns={2} rowGap="10px" columnGap="20px">
                                {
                                    game.placements.map((p, index) => (
                                        <Text key={index} noOfLines={1} sx={p.some(x => x.player == highlightedPlayer) ? { color: "var(--chakra-colors-orange-400)" } : undefined}>
                                            {`${index+1}. ${p.map(x => x.player).join(", ")}`}
                                        </Text>
                                    ))
                                }
                            </SimpleGrid>
                        )
                }
            </CardBody>
        </Card>
    );
}