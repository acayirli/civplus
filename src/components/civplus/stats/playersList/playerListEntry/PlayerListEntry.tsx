import { civs } from "../../../../../civs";
import { CivPortrait } from "../../../civPortrait/CivPortrait";
import { listEntryStyles } from "../../list.styles";
import { PlayerProfileModel } from "../../statsMain/StatsMain";
import { getRating } from "../PlayersList";

function getMostPlayedCiv(player: PlayerProfileModel) {
    return Object.values(player.civs).reduce((prev, current) => (prev.numberOfTimesPlayed > current.numberOfTimesPlayed) ? prev : current).civ;
}

export function PlayerListEntry({ player, position, displayedStat, onClick }: { player: PlayerProfileModel, position: number, displayedStat: React.ReactNode, onClick?: () => void }) {
    return (
        <div css={listEntryStyles} onClick={onClick}>
            <div>{position}.</div>

            <div css={{ display: "flex", flexGrow: 1 }}>
                <CivPortrait civ={civs[getMostPlayedCiv(player)]} />

                <div className="civ__title">
                    <div className="fancy_title" css={{marginBottom: "5px"}}>
                        {player.name}
                    </div>

                    <div className="civ__nation">
                        Rating { getRating(player) }
                    </div>
                </div>
            </div>

            <div>
                {displayedStat}
            </div>
        </div>
    );
}