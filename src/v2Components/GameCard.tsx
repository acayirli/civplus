import {Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";

export function GameCard()
{
    return (
        <Card variant="outline" sx={{ flexShrink: 0 }}>
            <CardHeader paddingBottom="10px">
                <Flex justifyContent="space-between" gap="20px" alignItems="flex-start">
                    <Heading size="sm">Teamers 4v5</Heading>
                    
                    <Text fontSize="xs">
                        12.01.2023 15:50
                    </Text>
                </Flex>
            </CardHeader>
            
            <CardBody paddingTop="10px">
                <SimpleGrid columns={3}>
                    <Stack>
                        <Heading size="sm">Winners</Heading>
                        <Text noOfLines={1}>Selim</Text>
                        <Text noOfLines={1}>Luca</Text>
                        <Text noOfLines={1}>Mirko</Text>
                        <Text noOfLines={1} color="#F6AD55">Abdul</Text>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center">
                        <Text>vs</Text>
                    </Stack>

                    <Stack alignItems="flex-end">
                        <Heading size="sm">Losers</Heading>
                        <Text noOfLines={1}>Lukas</Text>
                        <Text noOfLines={1}>Tim</Text>
                        <Text noOfLines={1}>Maxim</Text>
                        <Text noOfLines={1}>Jacob</Text>
                    </Stack>
                </SimpleGrid>
            </CardBody>
        </Card>
    );
}