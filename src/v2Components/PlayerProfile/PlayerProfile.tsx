import {PlayerProfileModel} from "../../types/playerProfile.types";
import {Card, CardBody, CardHeader, Flex, Heading, Select, Stack} from "@chakra-ui/react";
import {PlayerMetadata} from "./PlayerMetadata";
import {PlayerMostPlayedLeaders} from "./PlayerMostPlayedLeaders";
import {PlayerRecentGames} from "../PlayerRecentGames/PlayerRecentGames";
import {PlayerTeammates} from "../PlayerTeammates/PlayerTeammates";

export function PlayerProfile({ player }: { player: PlayerProfileModel, onBack: () => void })
{
    return (
        <Stack>
            <Heading size="lg">{player.name}</Heading>
            
            <Card>
                <CardBody>
                    <PlayerMetadata player={player} />
                </CardBody>
            </Card>
            
            <Card sx={{
                overflowX: "auto",
            }}>
                <CardHeader paddingBottom="10px">
                    <Flex justifyContent="space-between">
                        <Heading size="md">Leaders</Heading>
                        
                        <Flex gap="20px">
                            <Select size="sm" defaultValue="recent" width="200px">
                                <option value="recent">Most played</option>
                                <option value="all time">Highest winrate</option>
                                <option value="all time">Lowest winrate</option>
                            </Select>
                            
                            <Select size="sm" defaultValue="recent" width="200px">
                                <option value="recent">Recent</option>
                                <option value="all time">All time</option>
                            </Select>
                        </Flex>
                    </Flex>                       
                </CardHeader>
                
                <CardBody paddingTop="10px">
                    <PlayerMostPlayedLeaders player={player} />
                </CardBody>
            </Card>
            
            <Card sx={{
                overflowX: "auto",
            }}>
                <CardHeader paddingBottom="10px">
                    <Heading size="md">Recent games</Heading>
                </CardHeader>
                
                <CardBody paddingTop="10px">
                    <PlayerRecentGames />
                </CardBody>
            </Card>

            <Card sx={{
                overflowX: "auto",
            }}>
                <CardHeader paddingBottom="10px">
                    <Flex justifyContent="space-between">
                        <Heading size="md">Teammates</Heading>

                        <Flex gap="20px">
                            <Select size="sm" defaultValue="recent" width="200px">
                                <option value="recent">Most played with</option>
                                <option value="all time">Highest winrate</option>
                                <option value="all time">Lowest winrate</option>
                            </Select>

                            <Select size="sm" defaultValue="recent" width="200px">
                                <option value="recent">Recent</option>
                                <option value="all time">All time</option>
                            </Select>
                        </Flex>
                    </Flex>
                </CardHeader>

                <CardBody paddingTop="10px">
                    <PlayerTeammates player={player} />
                </CardBody>
            </Card>
        </Stack>
    );
}