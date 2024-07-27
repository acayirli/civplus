import {
    Button, Card, CardBody, CardFooter, CardHeader, Flex,
    FormControl,
    FormHelperText,
    FormLabel, Heading,
    Input, NumberDecrementStepper, NumberIncrementStepper,
    NumberInput,
    NumberInputField, NumberInputStepper,
    Stack, useToast
} from "@chakra-ui/react";
import {useState} from "react";

export type DrafterSettingsType = {
    playerNames: string[],
    noOfLeadersPerPlayer: number,
}

export function DrafterSettings({ onConfirm }: { onConfirm: (settings: DrafterSettingsType) => void })
{
    const [playerNames, setPlayerNames] = useState<string>("");
    const [noOfLeaders, setNoOfLeaders] = useState<number>(0);
    const toast = useToast();
    
    function handleConfirm()
    {
        if(!noOfLeaders || !playerNames)
        {
            toast({
                title: "Please input player names and number of leaders per player.",
                status: "error",
                variant: "subtle",
                isClosable: true,
            });
            
            return;
        }
        
        onConfirm({
            noOfLeadersPerPlayer: noOfLeaders,
            playerNames: playerNames.split(",").map(p => p.trim()), 
        });
    }
    
    return (
        <Card>
            <CardHeader paddingBottom="10px">
                <Heading size="md">
                    Settings
                </Heading>
            </CardHeader>
            
            <CardBody paddingTop="10px">
                <Stack spacing="20px">
                    <FormControl>
                        <FormLabel>Players / Teams</FormLabel>
                        <Input value={playerNames} onChange={(e) => setPlayerNames(e.target.value)} />
                        <FormHelperText>Seperate player or team names by a comma</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Number of leaders per player</FormLabel>
                        <NumberInput min={0} max={20}>
                            <NumberInputField value={noOfLeaders} onChange={(e) => setNoOfLeaders(parseInt(e.target.value))} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </Stack>
            </CardBody>
            
            <CardFooter>
                <Flex justifyContent="flex-end" flexGrow={1}>
                    <Button onClick={handleConfirm}>
                        Continue
                    </Button>
                </Flex>
            </CardFooter>
        </Card>
    );
}