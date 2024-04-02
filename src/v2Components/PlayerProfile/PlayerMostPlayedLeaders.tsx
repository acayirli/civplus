import {PlayerCivsModel, PlayerProfileModel} from "../../types/playerProfile.types";
import {LeaderPortrait} from "../LeaderPortrait/LeaderPortrait";
import {leaders} from "../../data/leaders";
import {CustomBarChart} from "../CustomBarChart/CustomBarChart";
import {Card, CardBody, CardHeader, Flex, Heading, Select} from "@chakra-ui/react";
import {useState} from "react";

// type CategoryType = "mostplayed" | "highestwinrate" | "lowestwinrate";
// type TimeframeType = "last month" | "last year" | "all time";

function sortByMostPlayed(a: { civ: string, numberOfTimesPlayed: number }, b: { civ: string, numberOfTimesPlayed: number })
{
    return b.numberOfTimesPlayed - a.numberOfTimesPlayed;
}
 
export function PlayerMostPlayedLeaders({ player }: { player: PlayerProfileModel })
{
    //const [category, setCategory] = useState<CategoryType>("mostplayed");
    //const [timeframe, setTimeframe] = useState<TimeframeType>("last month");
    
    const mostPlayedLeaders = Object.values(player.civs)
        .sort(sortByMostPlayed);
    
    return (
        <Card sx={{
            overflowX: "auto",
        }}>
            <CardHeader paddingBottom="10px">
                <Flex justifyContent="space-between">
                    <Heading size="md">Leaders</Heading>

                    <Flex gap="20px">
                        {/*<Select size="sm" width="200px" value={category} onChange={(e) => setCategory(e.target.value as CategoryType)}>
                            <option value="mostplayed">Most played</option>
                            <option value="highestwinrate">Highest winrate</option>
                            <option value="lowestwinrate">Lowest winrate</option>
                        </Select>*/}

                        {/*<Select size="sm" width="200px" value={timeframe} onChange={(e) => setTimeframe(e.target.value as TimeframeType)}>
                            <option value="last month">Last month</option>
                            <option value="last year">Last year</option>
                            <option value="all time">All time</option>
                        </Select>*/}
                    </Flex>
                </Flex>
            </CardHeader>

            <CardBody paddingTop="10px">
                <CustomBarChart data={mostPlayedLeaders.map(x => ({ text: x.civ, count: x.numberOfTimesPlayed, icon: <LeaderPortrait leader={leaders[x.civ]} /> }))} />
            </CardBody>
        </Card>
    );
}