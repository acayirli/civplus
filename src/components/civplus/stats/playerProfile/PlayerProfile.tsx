import { civs as civEntries } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { CivStatsList } from "../civStatsList/CivStatsList";
import { CivProfileModel, PlayerProfileModel } from "../statsMain/StatsMain";

import "./playerProfile.css";

import civs from "../../../../../scripts/data/civs.json";
import { CivPortrait } from "../../civPortrait/CivPortrait";

export function PlayerProfile({ player }: { player: PlayerProfileModel }) {
    const civsAsCivProfiles = Object.values(player.civs)
        .sort((civA, civB) => {
            return civA.numberOfTimesPlayed - civB.numberOfTimesPlayed
        })
        .map((civ): CivProfileModel => ({
            bans: 0,
            draws: 0,
            gameIds: [],
            losses: 0,
            name: civ.civ,
            picks: civ.numberOfTimesPlayed,
            wins: 0
        }))

    return (
        <div className="player-profile">
            <h2>
                <CivPortrait civ={civEntries[Object.values(player.civs)[0].civ]} />
                {player.name}
            </h2>

            <div className="player-profile__dashboard">
                <div className="player-profile__widget player-profile__rating">
                    <h3>Rating</h3>

                    <ContentBox>
                        asd
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__most-played">
                    <h3>Most played leaders</h3>

                    <div>
                        <CivStatsList civList={civsAsCivProfiles} />
                    </div>
                </div>

                <div className="player-profile__widget player-profile__playstyle">
                    <h3>Playstyle</h3>

                    <ContentBox>
                        asd
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__stats">
                    <h3>Stats</h3>

                    <ContentBox>
                        asd
                    </ContentBox>
                </div>

                <div className="player-profile__widget player-profile__recent">
                    <h3>Recent games</h3>

                    <ContentBox>
                        asd
                    </ContentBox>
                </div>
            </div>
        </div>
    );
}