import gamesData from "./data/games.json" assert { type: "json" };
import fs from "fs";

let players = {};
let civs = {};

function isWin(index, placements) {
    return index <= placements.length / 2 - 1;
}

gamesData.forEach((game, gameIndex) => {
    game.bans.forEach((ban) => {
        if (civs.hasOwnProperty(ban)) {
            const civObject = civs[ban];

            civObject.bans += 1;

            if (!civObject.gameIds.includes(gameIndex)) {
                civObject.gameIds.push(gameIndex);
            }
        }
        else {
            civs[ban] = { name: ban, picks: 0, bans: 1, wins: 0, losses: 0, draws: 0, gameIds: [gameIndex] };
        }
    });

    game.placements.forEach((placement, placementIndex) => {
        const hasVictory = game.hasVictory;
        const istWin = isWin(placementIndex, game.placements);

        placement.forEach((playerData) => {
            if (players.hasOwnProperty(playerData.player)) {
                const playerObject = players[playerData.player];

                if (hasVictory && istWin) {
                    playerObject.wins += 1;
                }
                else if (hasVictory && !istWin) {
                    playerObject.losses += 1;
                }
                else {
                    playerObject.draws += 1;
                }

                if (playerObject.civs.hasOwnProperty(playerData.civ)) {
                    playerObject.civs[playerData.civ].numberOfTimesPlayed += 1;
                }
                else {
                    playerObject.civs[playerData.civ] = { civ: playerData.civ, numberOfTimesPlayed: 1 };
                }

                playerObject.gameIds.push(gameIndex);
            }
            else {
                const playedCivs = {};
                playedCivs[playerData.civ] = { civ: playerData.civ, numberOfTimesPlayed: 1 };

                players[playerData.player] = {
                    name: playerData.player,
                    wins: hasVictory && istWin ? 1 : 0,
                    losses: hasVictory && !istWin ? 1 : 0,
                    draws: !hasVictory ? 1 : 0,
                    gameIds: [gameIndex],
                    rating: 1000,
                    civs: playedCivs
                };
            }

            if (civs.hasOwnProperty(playerData.civ)) {
                const civObject = civs[playerData.civ];

                civObject.picks += 1;

                if (hasVictory && istWin) {
                    civObject.wins += 1;
                }
                else if (hasVictory && !istWin) {
                    civObject.losses += 1;
                }
                else {
                    civObject.draws += 1;
                }

                if (!civObject.gameIds.includes(gameIndex)) {
                    civObject.gameIds.push(gameIndex);
                }
            }
            else {
                civs[playerData.civ] = {
                    name: playerData.civ,
                    picks: 1,
                    bans: 0,
                    wins: hasVictory && istWin ? 1 : 0,
                    losses: hasVictory && !istWin ? 1 : 0,
                    draws: !hasVictory ? 1 : 0,
                    gameIds: [gameIndex]
                };
            }
        });
    });
});

const playersJsonString = JSON.stringify(players);
const civsJsonString = JSON.stringify(civs);

fs.writeFile('data/players.json', playersJsonString, function (err) {
    if (err) throw err;
    console.log('Players saved!');
});

fs.writeFile('data/civs.json', civsJsonString, function (err) {
    if (err) throw err;
    console.log('Civs saved!');
});