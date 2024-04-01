import {PlayerProfileModel} from "../../types/playerProfile.types";
import {Card, CardBody, CardHeader, Flex, Heading, Select, Stack} from "@chakra-ui/react";
import {PlayerMetadata} from "./PlayerMetadata";
import {PlayerMostPlayedLeaders} from "./PlayerMostPlayedLeaders";
import {PlayerRecentGames} from "../PlayerRecentGames/PlayerRecentGames";

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
                        <Heading size="md">Most player leaders</Heading>
                        
                        <div>
                            <Select size="sm">
                                <option value="recent" selected>Recent</option>
                                <option value="all time">All time</option>
                            </Select>
                        </div>
                    </Flex>                       
                </CardHeader>
                
                <CardBody paddingTop="10px">
                    <PlayerMostPlayedLeaders player={player} />
                </CardBody>
            </Card>
            
            <Card>
                <CardHeader paddingBottom="10px">
                    <Heading size="md">Recent games</Heading>
                </CardHeader>
                
                <CardBody paddingTop="10px">
                    <PlayerRecentGames />
                </CardBody>
            </Card>
        </Stack>
    );
}