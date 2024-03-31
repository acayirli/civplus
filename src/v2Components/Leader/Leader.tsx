import {LeaderType} from "../../data/leaders";
import {Box, Flex, Text, Tooltip} from "@chakra-ui/react";
import {LeaderPortrait} from "../LeaderPortrait/LeaderPortrait";

export function Leader({ leader }: { leader: LeaderType })
{
    return (
        <Flex gap="10px" alignItems="center">
            <LeaderPortrait leader={leader} />

            <div>
                <Box>
                    <Tooltip label={leader.leader}>
                        <Text noOfLines={1} fontFamily="Baskerville-Bold" letterSpacing="2px" fontSize="14px" >
                            {leader.leader}
                        </Text>
                    </Tooltip>
                </Box>
                
                <Box>
                    <Text noOfLines={1} fontSize="13px" color="#ccc">
                        {leader.nation}
                    </Text>
                </Box>
            </div>
        </Flex>
    );
}