import {Button, Card, CardBody, CardHeader, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import {leaders} from "../../data/leaders";
import {LeaderBanButton} from "./LeaderBanButton";
import {useState} from "react";

export function DrafterBans({ onConfirm }: { onConfirm: (bannedLeaders: string[]) => void })
{
    const [bannedLeaders, setBannedLeaders] = useState<string[]>([]);
    
    function handleBanLeader(leaderId: string)
    {
        if(bannedLeaders.includes(leaderId))
        {
            setBannedLeaders(bannedLeaders.filter(l => l != leaderId));
        }
        else
        {
            setBannedLeaders([...bannedLeaders, leaderId]);
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
                            <LeaderBanButton key={leaderId} leader={leader} isBanned={bannedLeaders.includes(leader.id)} onClick={() => handleBanLeader(leader.id)} />
                        ))
                    }
                </SimpleGrid>
            </CardBody>
        </Card>
    );
}