import {Button, Card, CardBody, CardHeader, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import {leaders, LeaderType} from "../../data/leaders";
import {LeaderBanButton} from "./LeaderBanButton";
import {useState} from "react";

export function DrafterBans({ onConfirm }: { onConfirm: (bannedLeaders: LeaderType[]) => void })
{
    const [bannedLeaders, setBannedLeaders] = useState<LeaderType[]>([]);
    
    function handleBanLeader(leader: LeaderType)
    {
        if(bannedLeaders.includes(leader))
        {
            setBannedLeaders(bannedLeaders.filter(l => l != leader));
        }
        else
        {
            setBannedLeaders([...bannedLeaders, leader]);
        }
    }
    
    return (
        <Card>
            <CardHeader paddingBottom="10px">
                <Flex justifyContent="space-between">
                    <Heading size="md">
                        Bans
                    </Heading>

                    <Button onClick={() => onConfirm(bannedLeaders)}>
                        Continue
                    </Button>
                </Flex>
            </CardHeader>
            
            <CardBody paddingTop="10px">
                <SimpleGrid minChildWidth="200px">
                    {
                        Object.entries(leaders).map(([leaderId, leader]) => (
                            <LeaderBanButton key={leaderId} leader={leader} isBanned={bannedLeaders.includes(leader)} onClick={() => handleBanLeader(leader)} />
                        ))
                    }
                </SimpleGrid>
            </CardBody>
        </Card>
    );
}