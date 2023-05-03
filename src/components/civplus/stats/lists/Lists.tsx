import { DateTime } from "luxon";
import { useState } from "react";
import { CivStatsList } from "../civStatsList/CivStatsList";
import { PlayerProfile } from "../playerProfile/PlayerProfile";
import { CivProfileModel, Game, PlayerProfileModel } from "../statsMain/StatsMain";
import { PlayersList } from "../playersList/PlayersList";

import "./lists.css";
import { GamesList } from "../gamesList/GamesList";

export function Lists({ players, civData, games }: { players: { [player: string]: PlayerProfileModel }, civData: { [civ: string]: CivProfileModel }, games: Game[] }) {
    const [selectedDetail, setSelectedDetail] = useState<PlayerProfileModel | CivProfileModel | Game>();

    function handleOnSelectPlayer(player: PlayerProfileModel) {
        //setSelectedDetail(player);
    }

    function isPlayer(entry: PlayerProfileModel | (CivProfileModel | Game)): entry is PlayerProfileModel {
        return (entry as PlayerProfileModel).rating !== undefined;
    }

    function isCiv(entry: CivProfileModel | Game): entry is CivProfileModel {
        return (entry as CivProfileModel).picks !== undefined;
    }

    if (selectedDetail) {
        if (isPlayer(selectedDetail)) {
            return <PlayerProfile player={selectedDetail} onClickBack={() => { setSelectedDetail(undefined) }} />;
        }
        else if (isCiv(selectedDetail)) {
            return <p>asd</p>;
        }
        else {
            return <p>asd</p>;
        }
    }
    else {
        return (
            <div className="stats">
                <h2>Stats</h2>

                <div className="stats-lists">
                    <PlayersList players={players} onSelect={handleOnSelectPlayer} />

                    <CivStatsList civList={civData} />

                    <GamesList games={games} />
                </div>
            </div>
        );
    }
}