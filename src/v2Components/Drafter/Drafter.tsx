import {DrafterSettings, DrafterSettingsType} from "../DrafterSettings/DrafterSettings";
import {
    Box
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {DrafterBans} from "../DrafterBans/DrafterBans";
import {DrafterResults, PlayerResult} from "../DrafterResults/DrafterResults";
import {leaders} from "../../data/leaders";

export function Drafter()
{    
    const [overrideResults, setOverrideResults] = useState<PlayerResult[] | undefined>();
    const [settings, setSettings] = useState<DrafterSettingsType | undefined>();
    const [bans, setBans] = useState<string[] | undefined>();

    // read results from url
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlDrafterResults = urlParams.get("drafterresults");

        if (urlDrafterResults) {
            const parsedDrafterResults = JSON.parse(urlDrafterResults);

            if (parsedDrafterResults) {
                const playerResults = parsedDrafterResults.draft.map((result: { name: string, leaders: string[] }) => 
                    ({ name: result.name, leaders: result.leaders.map((leader) => leaders[leader]) }));
                setOverrideResults(playerResults);
                setBans(parsedDrafterResults.bans);
            }
        }
    }, []);

    function handleOnClickRestart() 
    {
        history.replaceState(null, "", import.meta.env.BASE_URL);
        setOverrideResults(undefined);
        setSettings(undefined);
        setBans(undefined);
    }
    
    if((bans && settings) || overrideResults)
    {
        return (
            <DrafterResults settings={settings} bans={bans} overrideResults={overrideResults} onRestart={handleOnClickRestart} />
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