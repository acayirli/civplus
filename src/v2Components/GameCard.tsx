import {Card, CardBody, CardHeader, Flex, Heading, Text} from "@chakra-ui/react";

export function GameCard()
{
    return (
        <Card variant="outline">
            <CardHeader>
                <Flex justifyContent="space-between" gap="20px" alignItems="flex-end">
                    <Heading size="md">Teamers 4v5</Heading>
                    
                    <Text>
                        12.01.2023 15:50
                    </Text>
                </Flex>
            </CardHeader>
            
            <CardBody>
                
            </CardBody>
        </Card>
    );
}