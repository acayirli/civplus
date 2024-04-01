import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {getRating} from "../../helper/ratingHelper";
import {getNumberOfGames, getWinRate} from "../../helper/playerHelper";
import {PlayerProfileModel} from "../../types/playerProfile.types";
import players from "../../../scripts/data/players.json";

type PlayerSort = "wins" | "losses" | "winrate" | "rating" | "noOfGames";

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
            return playerB.name.localeCompare(playerA.name);
        }
    });
}

export function PlayersStatsTable({ onSelectPlayer }: { onSelectPlayer: (player: PlayerProfileModel) => void })
{
    const playersJs: { [player: string]: PlayerProfileModel } = players;
    
    return (
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
                        sortPlayers(playersJs, "rating").map(player => (
                            <Tr key={player.name} onClick={() => onSelectPlayer(player)}>
                                <Td>
                                    { player.name }
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
    );
}