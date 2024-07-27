import {leaders, LeaderType} from "../../data/leaders";
import {DrafterSettingsType} from "../DrafterSettings/DrafterSettings";
import {useEffect, useMemo} from "react";
import {Button, Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Stack, useToast} from "@chakra-ui/react";
import {Leader} from "../Leader/Leader";

export type PlayerResult = {
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

export function DrafterResults({ settings, bans, overrideResults, onRestart }: { settings?: DrafterSettingsType, bans?: string[], overrideResults?: PlayerResult[], onRestart: () => void })  
{
    const calculatedResults = useMemo(() => overrideResults ||
        calculateDrafterResults(settings!, bans || []),
    [settings, bans, overrideResults]);

    // write results to url
    useEffect(() => {
        const reducedResults = calculatedResults.map((playerResult) =>
            ({
                name: playerResult.name, leaders: playerResult.leaders.map((leader) => leader.id)
            }));
        const uriEncodedReults = encodeURIComponent(JSON.stringify({ draft: reducedResults, bans: bans }));
        history.replaceState(null, "", import.meta.env.BASE_URL + "?drafterresults=" + uriEncodedReults);
    }, [settings, bans, overrideResults]);

    const toast = useToast();
    
    function handleOnClickShare()
    {
        navigator.clipboard.writeText(window.location.href);
        toast({
            title: "Copied URL to clipboard.",
            status: "success"
        });
    }
    
    return (
        <Stack gap="20px">
            <Flex justifyContent="space-between">
                <Heading size="lg">
                    Results
                </Heading>

                <Flex gap="20px">
                    <Button onClick={handleOnClickShare}>
                        Share
                    </Button>

                    <Button variant="outline" onClick={() => toast({ title: "Not implemented.", status: "error" })}>
                        Report
                    </Button>

                    <Button variant="ghost" onClick={onRestart}>
                        Restart
                    </Button>
                </Flex>
            </Flex>
            
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

            <Heading size="md">Bans</Heading>

            <Flex gap={"40px"}>
                {
                    bans && bans.map(leaderId => <Leader key={leaderId} leader={leaders[leaderId]} />)
                }
            </Flex>
        </Stack>
    );
}