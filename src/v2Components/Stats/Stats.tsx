import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {PlayersStats} from "../PlayersStats/PlayersStats";
import {LeaderStats} from "../LeaderStats/LeaderStats";

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
                <TabPanel paddingLeft={0} paddingTop={10}>
                    <PlayersStats />
                </TabPanel>
                
                <TabPanel paddingLeft={0} paddingTop={10}>
                    <LeaderStats />
                </TabPanel>
                
                <TabPanel paddingLeft={0} paddingTop={10}>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}