import { Main } from "../../../meadow/main/Main";
import { DrafterCivResults } from "../civs/DrafterCivResults";

import hojoPortrait from "../../../../assets/images/portraits/Hojo.webp";
import gorgoPortrait from "../../../../assets/images/portraits/Gorgo.webp";
import gaulPortrait from "../../../../assets/images/portraits/Ambiorix.webp";
import amanitorePortrait from "../../../../assets/images/portraits/Amanitore.webp";
import cyrusPortrait from "../../../../assets/images/portraits/Cyrus.webp";

import "./drafterMain.css";
import { CivModel } from "../../civ/Civ";

const civs: { [leader: string]: CivModel } = {
    hojo: {
        portrait: <img src={hojoPortrait}></img>,
        leader: "Hojo Tokimune",
        nation: "Japan",
        strength: 3,
        difficulty: 1,
        labels: [ "Versatile", "Beginner-friendly", "Carry" ],
        strategies: [
            "Japan is very versatile. You will spawn on coast, so go for harbors. Use the traders from harbors in combination with Magnus. Then go for campus and theather square.",
            "Japan can played religiously, but it is far more challenging. Japan has bonus production towards holy sites, and their bonus helps them to have high holy site adjacency."
        ]
    },
    gorgo: {
        portrait: <img src={gorgoPortrait}></img>,
        leader: "Gorgo",
        nation: "Greece",
        strength: 3,
        difficulty: 2,
        labels: [ "Culture", "War", "Carry" ],
        strategies: [
            "Gorgo has a unique theather square. Build it first in every city. Afterwards continue like any other civs, but don't forget encampemnts to help your military."
        ]
    },
    ambiorix: {
        portrait: <img src={gaulPortrait}></img>,
        leader: "Ambiorix",
        nation: "Gaul",
        strength: 3,
        difficulty: 2,
        labels: [ "Production", "War", "Carry" ],
        strategies: [
            "Ambiorix has a unique industrial zone."
        ]
    },
    amanitore: {
        portrait: <img src={amanitorePortrait}></img>,
        leader: "Amanitore",
        nation: "Nubia",
        strength: 2,
        difficulty: 2,
        labels: [ "Versatile" ],
        strategies: [
            "Amanitore wants her unique improvement, the nubian pyramid, in every city adjacent to the city center. Try to build your districts around the pyramids, and place pyramids on tiles adjacent to multiple districts. You can go for a campus or commercial opener.",
            "You can play Amanitore religiously. Start with three holy sites and found your religion. One of the best beliefs for Amanitore is \"Jesuit Education\", since you will have passive faith income through your pyramids, without the need for more holy sites."
        ]
    },
    cyrus: {
        portrait: <img src={cyrusPortrait}></img>,
        leader: "Cyrus",
        nation: "Persia",
        strength: 3,
        difficulty: 1,
        labels: [ "Culture", "War", "Versatile" ],
        strategies: [
            "Play like any other standard land civ. Start with commercial hubs and use the traders in combination with Magnus."
        ]
    }
};

const playerResults = [
    [civs.hojo, civs.gorgo, civs.cyrus],
    [civs.gorgo, civs.ambiorix],
    [civs.gorgo, civs.amanitore],
]

export function DrafterMain() {
    return (
        <Main className="drafter">
            <DrafterCivResults results={playerResults} />
        </Main>
    );
}