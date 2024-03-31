import {DrafterSettings, DrafterSettingsType} from "../DrafterSettings/DrafterSettings";
import {
    Box, Heading
} from "@chakra-ui/react";
import React, {useState} from "react";
import {DrafterBans} from "../DrafterBans/DrafterBans";
import {DrafterResults} from "../DrafterResults/DrafterResults";
import {LeaderType} from "../../data/leaders";

export function Drafter()
{    
    const [settings, setSettings] = useState<DrafterSettingsType | undefined>();
    const [bans, setBans] = useState<LeaderType[] | undefined>();
    
    if(bans && settings)
    {
        return (
            <DrafterResults settings={settings} bans={bans} />
        );
    }
    else if(settings)
    {
        return (
            <DrafterBans onConfirm={setBans} />
        );
    }
    else
    {
        return (
            <Box sx={{ width: 512, margin: "0 auto" }}>                
                <DrafterSettings onConfirm={setSettings} />
            </Box>
        );
    }
}