import {PlayerProfileModel} from "../../types/playerProfile.types";
import {Box, Flex, Stack, Text} from "@chakra-ui/react";
import {LeaderPortrait} from "../LeaderPortrait/LeaderPortrait";
import {leaders} from "../../data/leaders";

export function PlayerMostPlayedLeaders({ player }: { player: PlayerProfileModel })
{
    const mostPlayedLeaders = Object.values(player.civs)
        .sort((civA, civB) => civB.numberOfTimesPlayed - civA.numberOfTimesPlayed);
    
    const hundretPercent = mostPlayedLeaders[0].numberOfTimesPlayed;
    
    return (
        <Flex gap="10px" alignItems="flex-end" sx={{
            height: "200px",
        }}>
            {
                mostPlayedLeaders.map(l => l.numberOfTimesPlayed > 1 && (
                    <Stack key={l.civ}
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            backgroundColor: "#F7FAFC",
                            borderTopRightRadius: "50px",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "5px",
                            borderBottomRightRadius: "5px",
                        }} style={{
                            height: (l.numberOfTimesPlayed / hundretPercent * 100) + "%",
                        }}>
                        <LeaderPortrait leader={leaders[l.civ]} />
                        {
                            l.numberOfTimesPlayed > 2 &&
                                <Text color="black">{l.numberOfTimesPlayed}</Text>
                        }
                    </Stack>
                ))
            }
        </Flex>
    );
}