import {Box} from "@chakra-ui/react";
import {LeaderType} from "../../data/leaders";
import {Leader} from "../Leader/Leader";

export function LeaderBanButton({ leader, isBanned, onClick }: { leader: LeaderType, isBanned: boolean, onClick: () => void })
{
    return (
        <Box onClick={onClick} 
            padding="10px" 
            borderRadius="md"
            sx={{
                transition: "background-color .2s",
                cursor: "pointer",
                ":hover": {
                    backgroundColor: "#4A5568"
                },
                ":active": {
                    backgroundColor: "#1A202C",
                },
                opacity: isBanned ? .3 : 1,
            }}>
            <Leader leader={leader} />
        </Box>
    );
}