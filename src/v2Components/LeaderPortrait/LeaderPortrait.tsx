import {Box} from "@chakra-ui/react";
import {LeaderType} from "../../data/leaders";

export function LeaderPortrait({ leader }: { leader: LeaderType })
{
    return (
        <Box sx={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            flexShrink: 0,
        }}>
            <img src={leader.portrait} alt={`${leader.leader} portrait`}></img>
        </Box>
    );
}