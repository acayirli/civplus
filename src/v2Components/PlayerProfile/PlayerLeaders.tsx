import {PlayerCivsModel, PlayerProfileModel} from "../../types/playerProfile.types";
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td, Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useState} from "react";
import {Leader} from "../Leader/Leader";
import {leaders} from "../../data/leaders";

type CategoryType = "mostplayed" | "highestwinrate" | "lowestwinrate";
 
export function PlayerLeaders({ player }: { player: PlayerProfileModel })
{
    const [category, setCategory] = useState<CategoryType>("mostplayed");

    function sortPlayedCivs(a: PlayerCivsModel, b: PlayerCivsModel)
    {
        switch(category)
        {
        case "highestwinrate":
            return b.wins / b.numberOfTimesPlayed - a.wins / a.numberOfTimesPlayed;
        case "lowestwinrate":
            return b.losses / b.numberOfTimesPlayed - a.losses / a.numberOfTimesPlayed;
        case "mostplayed":
        default:
            return b.numberOfTimesPlayed - a.numberOfTimesPlayed;
        }
    }
    
    return (
        <Card>
            <CardHeader borderBottom="1px solid var(--chakra-colors-gray-600)">
                <Flex justifyContent="space-between">
                    <Heading size="md">Leaders</Heading>

                    <Flex gap="10px" alignItems="center">
                        <Text>Sort by</Text>
                        
                        <Select size="sm" width="200px" value={category} onChange={(e) => setCategory(e.target.value as CategoryType)}>
                            <option value="mostplayed">Number of games</option>
                            <option value="highestwinrate">Highest winrate</option>
                            <option value="lowestwinrate">Lowest winrate</option>
                        </Select>
                    </Flex>
                </Flex>
            </CardHeader>

            <CardBody padding="0" sx={{ maxHeight: "400px", overflow: "auto", ".css-12t8qlj, .css-1gal4zc": { borderColor: "var(--chakra-colors-gray-600)" }}}>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th isNumeric>Winrate</Th>
                                <Th isNumeric>Wins</Th>
                                <Th isNumeric>Losses</Th>
                                <Th isNumeric>Number of games</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                Object.values(player.civs).sort(sortPlayedCivs).map(playedCiv => (
                                    <Tr key={playedCiv.civ} onClick={() => console.log("Todo")} sx={{ transition: "background-color .2s", cursor: "pointer", ":hover": { backgroundColor: "#2D3748" }}}>
                                        <Td>
                                            <Box sx={{ maxWidth: "250px", overflow: "hidden", }}>
                                                <Leader leader={leaders[playedCiv.civ]} />
                                            </Box>
                                        </Td>

                                        <Td isNumeric>
                                            { Math.round(playedCiv.wins / playedCiv.numberOfTimesPlayed * 100) } %
                                        </Td>

                                        <Td isNumeric>
                                            { playedCiv.wins }
                                        </Td>

                                        <Td isNumeric>
                                            { playedCiv.losses }
                                        </Td>

                                        <Td isNumeric>
                                            { playedCiv.numberOfTimesPlayed }
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
}