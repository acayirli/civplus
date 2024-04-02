import {PlayerProfileModel} from "../../types/playerProfile.types";
import {
    Breadcrumb, BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Select,
    Stack,
} from "@chakra-ui/react";
import {PlayerMetadata} from "./PlayerMetadata";
import {PlayerMostPlayedLeaders} from "./PlayerMostPlayedLeaders";
import {PlayerRecentGames} from "../PlayerRecentGames/PlayerRecentGames";
import {PlayerTeammates} from "../PlayerTeammates/PlayerTeammates";

export function PlayerProfile({ player, onBack }: { player: PlayerProfileModel, onBack: () => void })
{
    return (
        <Stack sx={{ maxWidth: "1280px", margin: "0 auto" }} gap="20px">            
            <Breadcrumb>
                <BreadcrumbItem>
                    <Heading size="md" onClick={onBack} sx={{ cursor: "pointer", transition: "color .2s", ":hover": { color: "#A0AEC0" } }}>
                        Players
                    </Heading>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Heading size="md" color="#90CDF4">
                        {player.name}
                    </Heading>
                </BreadcrumbItem>
            </Breadcrumb>
            
            <Card>
                <CardBody>
                    <PlayerMetadata player={player} />
                </CardBody>
            </Card>

            <PlayerMostPlayedLeaders player={player} />
            
            <Card sx={{
                overflowX: "auto",
            }}>
                <CardHeader paddingBottom="10px">
                    <Heading size="md">Recent games</Heading>
                </CardHeader>
                
                <CardBody paddingTop="10px">
                    <PlayerRecentGames player={player} />
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