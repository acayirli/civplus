import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {PlayersStats} from "../PlayersStats/PlayersStats";

export function Stats()
{
    return (
        <Tabs>
            <TabList>
                <Tab>Players</Tab>
                
                <Tab>Leaders</Tab>
                
                <Tab>Games</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <PlayersStats />
                </TabPanel>
                
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}