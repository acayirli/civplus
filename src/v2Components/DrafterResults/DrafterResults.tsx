import {leaders, LeaderType} from "../../data/leaders";
import {DrafterSettingsType} from "../DrafterSettings/DrafterSettings";
import {useMemo} from "react";
import {Card, CardBody, CardHeader, Heading, SimpleGrid, Stack} from "@chakra-ui/react";
import {Leader} from "../Leader/Leader";

type PlayerResult = {
    name: string,
    leaders: LeaderType[]
}

function calculateDrafterResults(settings: DrafterSettingsType, bans: string[]): PlayerResult[]
{
    const playerResults = [];
    const unbannedLeaders = Object.values(leaders).filter(leader => !bans.includes(leader.id)).sort(() => 0.5 - Math.random());
    const leadersPerPlayer = Math.min(settings.noOfLeadersPerPlayer, Math.floor(unbannedLeaders.length / settings.playerNames.length));

    for (let i = 0; i < settings.playerNames.length; i++) {
        const playerLeaders = unbannedLeaders.splice(0, leadersPerPlayer).sort((a, b) => a.leader.localeCompare(b.leader));
        playerResults.push({
            name: settings.playerNames[i] || "Player " + (i + 1),
            leaders: playerLeaders
        });
    }

    return playerResults;
}

export function DrafterResults({ settings, bans }: { settings: DrafterSettingsType, bans: LeaderType[] })  
{
    const calculatedResults = useMemo(() => 
        calculateDrafterResults(settings, bans.map(ban => ban.id)),
    [settings, bans]);
    
    return (
        <Stack>
            {
                calculatedResults.map(result => (
                    <Card key={result.name}>
                        <CardHeader paddingBottom="10px">
                            <Heading size="md">{result.name}</Heading>
                        </CardHeader>
                        
                        <CardBody paddingTop="10px">
                            <SimpleGrid minChildWidth="200px" gap="10px">
                                {
                                    result.leaders.map(leader => (
                                        <Leader key={leader.id} leader={leader} />
                                    ))
                                }
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                ))
            }
        </Stack>
    );
}