import {Flex, Text, Select, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Heading} from "@chakra-ui/react";
import {getRating} from "../../helper/ratingHelper";
import {getNumberOfGames, getWinRate} from "../../helper/playerHelper";
import {PlayerProfileModel} from "../../types/playerProfile.types";
import players from "../../../scripts/data/players.json";
import {useState} from "react";
import {LeaderPortrait} from "../LeaderPortrait/LeaderPortrait";
import {leaders} from "../../data/leaders";

type PlayerSort = "wins" | "losses" | "winrate" | "rating" | "noOfGames" | "name";

function sortPlayers(players: { [player: string]: PlayerProfileModel }, playerSort: PlayerSort) {
    return Object.values(players).sort((playerA, playerB) => {
        switch (playerSort) {
        case "wins":
            return playerB.wins - playerA.wins;
        case "losses":
            return playerB.losses - playerA.losses;
        case "rating":
            return getRating(playerB) - getRating(playerA);
        case "noOfGames":
            return getNumberOfGames(playerB) - getNumberOfGames(playerA);
        case "winrate":
            return getWinRate(playerB) - getWinRate(playerA);
        default:
            return playerA.name.localeCompare(playerB.name);
        }
    });
}

function getMostPlayedCiv(player: PlayerProfileModel) {
    return Object.values(player.civs).reduce((prev, current) => (prev.numberOfTimesPlayed > current.numberOfTimesPlayed) ? prev : current).civ;
}

export function PlayersStatsTable({ onSelectPlayer }: { onSelectPlayer: (player: PlayerProfileModel) => void })
{
    const [sort, setSort] = useState<PlayerSort>("rating");
    
    const playersJs: { [player: string]: PlayerProfileModel } = players;
    
    return (
        <Stack sx={{ maxWidth: "1280px", margin: "0 auto" }}>
            <Flex justifyContent="space-between">
                <Heading size="md" color="#90CDF4">Players</Heading>
                
                <Flex alignItems="center" gap="10px">
                    <Text>Sort by</Text>
                    
                    <Select width="200px" value={sort} onChange={(e) => setSort(e.target.value as PlayerSort)}>
                        <option value={"name"}>Name</option>
                        <option value={"rating"}>Rating</option>
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
                            <Th isNumeric>Rating</Th>
                            <Th isNumeric>Winrate</Th>
                            <Th isNumeric>Wins</Th>
                            <Th isNumeric>Losses</Th>
                            <Th isNumeric>Number of games</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {
                            sortPlayers(playersJs, sort).map(player => (
                                <Tr key={player.name} onClick={() => onSelectPlayer(player)} sx={{ transition: "background-color .2s", cursor: "pointer", ":hover": { backgroundColor: "#2D3748" }}}>
                                    <Td>
                                        <Flex gap={"20px"} alignItems={"center"}>
                                            <LeaderPortrait leader={leaders[getMostPlayedCiv(player)]} />
                                            { player.name }
                                        </Flex>
                                    </Td>

                                    <Td isNumeric>
                                        { getRating(player) }
                                    </Td>

                                    <Td isNumeric>
                                        { getWinRate(player) } %
                                    </Td>

                                    <Td isNumeric>
                                        { player.wins }
                                    </Td>

                                    <Td isNumeric>
                                        { player.losses }
                                    </Td>

                                    <Td isNumeric>
                                        { getNumberOfGames(player) }
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
}