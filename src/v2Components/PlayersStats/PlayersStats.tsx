import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export function PlayersStats()
{
    return (
        <TableContainer>
            <Table variant='simple' size='sm'>                
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
                    <Tr>
                        <Td>inches</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>inches</Td>
                        <Td isNumeric>5</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}