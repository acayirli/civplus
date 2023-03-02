export {};
/* import { civs } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Main } from "../../../meadow/main/Main";
import { Space } from "../../../meadow/space/Space";
import { Civ } from "../../civ/Civ";

export function PlayerProfile() {
    let playersBarebones: { [ playerName: string]: PlayerProfileModel };

    games.forEach(
        (game: Game) => {
            game.placements.forEach(
                (placement: PlayerInGame[], placementIndex: number) => {
                    placement.forEach(
                        (playerInGame: PlayerInGame) => {
                            if(playersBarebones[playerInGame.player])
                            {
                                const player = playersBarebones[playerInGame.player];
                                const isWin = placementIndex <= (game.placements.length / 2) - 1;

                                player.gameIds.push(game.id);

                                if(isWin)
                                {
                                    player.wins += 1;
                                }
                                else
                                {
                                    player.losses += 1;
                                }

                                // todo rating
                            }
                            else
                            {
                                playersBarebones[playerInGame.player] = {
                                    name: playerInGame.player,
                                    rating: 1000,
                                    losses: 0,
                                    wins: 0,
                                    gameIds: []
                                }
                            }
                        }
                    )
                }
            );
        }
    );


    return (
        <Main className="player-profiles-main">
            <h2>Abdul</h2>

            <div className="player-profile__container">
                <div className="player-profile__left">
                    <h3>Rating</h3>

                    <ContentBox>
                        <div>
                            [] Diamond
                        </div>

                        <div>
                            MMR 1200
                        </div>
                    </ContentBox>

                    <Space spacing="md" />

                    <h3>Stats</h3>

                    <ContentBox>
                        <div>Games: 10</div>
                        <div>Wins: 7</div>
                        <div>Losses: 3</div>
                        <div>Winrate: 70 %</div>
                    </ContentBox>
                </div>

                <div className="player-profile__right">
                    <h3>Most played civs</h3>

                    <ContentBox>
                        <div>
                            <Civ civ={civs.ambiorix}></Civ>
                            <span>Winrate: 56 %</span>
                        </div>
                    </ContentBox>
                </div>
            </div>
        </Main>
    );
} */