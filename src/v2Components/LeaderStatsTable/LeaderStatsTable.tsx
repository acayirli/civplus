import {Flex, Heading, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {useState} from "react";
import civs from "../../../scripts/data/civs.json";
import {leaders} from "../../data/leaders";
import {Leader} from "../Leader/Leader";
import {LeaderProfileModel} from "../../types/leaders.types";

type LeaderSort = "wins" | "losses" | "winrate" | "noOfGames" | "name";

export function LeaderStatsTable()
{
    const [sort, setSort] = useState<LeaderSort>("winrate");
    
    function sortLeaders(a: LeaderProfileModel, b: LeaderProfileModel)
    {
        switch(sort)
        {
        case "name":
            return a.name.localeCompare(b.name);
            
        case "losses":
            return b.losses - a.losses;
                
        case "wins":
            return b.wins - a.wins;
                
        case "noOfGames":
            return b.picks - a.picks;
            
        case "winrate":
        default:
            return b.wins / b.picks - a.wins / a.picks;
        }
    }
    
    return (
        <Stack sx={{ maxWidth: "1280px", margin: "0 auto" }}>
            <Flex justifyContent="space-between">
                <Heading size="md" color="#90CDF4">Leaders</Heading>

                <Flex alignItems="center" gap="10px">
                    <Text>Sort by</Text>

                    <Select width="200px" value={sort} onChange={(e) => setSort(e.target.value as LeaderSort)}>
                        <option value={"name"}>Name</option>
                        <option value={"winrate"}>Winrate</option>
                        <option value={"wins"}>Wins</option>
                        <option value={"losses"}>Losses</option>
                        <option value={"noOfGames"}>Number of games</option>
                    </Select>
                </Flex>
            </Flex>

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
                            Object.values(civs).sort(sortLeaders).map(leader => {
                                if(!leaders[leader.name]) 
                                {
                                    console.error("Invalid leader: " + leader.name);
                                    return null;
                                }
                                
                                return (
                                    (
                                        <Tr key={leader.name} onClick={() => console.log("todo")} sx={{ transition: "background-color .2s", cursor: "pointer", ":hover": { backgroundColor: "#2D3748" }}}>
                                            <Td>
                                                <Leader leader={leaders[leader.name]} />
                                            </Td>

                                            <Td isNumeric>
                                                { Math.round(leader.wins / leader.picks * 100) } %
                                            </Td>

                                            <Td isNumeric>
                                                { leader.wins }
                                            </Td>

                                            <Td isNumeric>
                                                { leader.losses }
                                            </Td>

                                            <Td isNumeric>
                                                { leader.gameIds.length }
                                            </Td>
                                        </Tr>
                                    )
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
}