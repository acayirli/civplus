import cityPatronGoddess from "./assets/images/pantheons/City Patron Goddess.png";
import danceOfTheAurora from "./assets/images/pantheons/Dance of the Aurora.png";
import desertFolklore from "./assets/images/pantheons/Desert Folklore.png";
import divineSpark from "./assets/images/pantheons/Divine Spark.png";
import earthGoddess from "./assets/images/pantheons/Earth Goddess.png";
import fertilityRites from "./assets/images/pantheons/Fertility Rties.png";
import fireGoddess from "./assets/images/pantheons/Fire Goddess.png";
import godOfCraftsmen from "./assets/images/pantheons/God of Craftsmen.png";
import godOfHealing from "./assets/images/pantheons/God of Healing.png";
import godOfTheForge from "./assets/images/pantheons/God of the Forge.png";
import godOfTheOpenSky from "./assets/images/pantheons/God of the Open Sky.png";
import godOfTheSea from "./assets/images/pantheons/God of the Sea.png";
import godOfWarAndPlunder from "./assets/images/pantheons/God of War and Plunder.png";
import goddessOfFestivals from "./assets/images/pantheons/Goddess of Festivals.png";
import goddessOfTheHunt from "./assets/images/pantheons/Goddess of the Hunt.png";
import initiationRites from "./assets/images/pantheons/Initiation Rites.png";
import ladyOfTheReedsAndMarshes from "./assets/images/pantheons/Lady of the Reeds and Marshes.png";
import monumentToTheGods from "./assets/images/pantheons/Monument to the Gods.png";
import religiousIdols from "./assets/images/pantheons/Religious Idols.png";
import religiousSettlements from "./assets/images/pantheons/Religious Settlements.png";
import riverGoddess from "./assets/images/pantheons/River Goddess.png";
import sacredPath from "./assets/images/pantheons/Sacred Path.png";
import stoneCircles from "./assets/images/pantheons/Stone Circles.png";

export type PantheonModel = {
    image: string
}

export const pantheons: { [pantheon: string]: PantheonModel } = {
    cityPatronGoddess: {
        image: cityPatronGoddess
    },
    danceOfTheAurora: {
        image: danceOfTheAurora
    },
    desertFolklore: {
        image: desertFolklore
    },
    divineSpark: {
        image: divineSpark
    },
    earthGoddess: {
        image: earthGoddess
    },
    fertilityRites: {
        image: fertilityRites
    },
    fireGoddess: {
        image: fireGoddess
    },
    godOfCraftsmen: {
        image: godOfCraftsmen
    },
    godOfHealing: {
        image: godOfHealing
    },
    godOfTheForge: {
        image: godOfTheForge
    },
    godOfTheOpenSky: {
        image: godOfTheOpenSky
    },
    godOfTheSea: {
        image: godOfTheSea
    },
    godOfWarAndPlunder: {
        image: godOfWarAndPlunder
    },
    goddessOfFestivals: {
        image: goddessOfFestivals
    },
    goddessOfTheHunt: {
        image: goddessOfTheHunt
    },
    initiationRites: {
        image: initiationRites
    },
    ladyOfTheReedsAndMarshes: {
        image: ladyOfTheReedsAndMarshes
    },
    monumentOfTheGods: {
        image: monumentToTheGods
    },
    religiousIdols: {
        image: religiousIdols
    },
    riverGoddess: {
        image: riverGoddess
    },
    religiousSettlements: {
        image: religiousSettlements
    },
    sacredPath: {
        image: sacredPath
    },
    stoneCircles: {
        image: stoneCircles
    },
}

export const genericPantheons = [
    pantheons.cityPatronGoddess,
    pantheons.godOfCraftsmen,
    pantheons.religiousSettlements,
    pantheons.fertilityRites,
    pantheons.stoneCircles,
    pantheons.ladyOfTheReedsAndMarshes,
    pantheons.goddessOfTheHunt,
    pantheons.godOfTheOpenSky,
    pantheons.goddessOfFestivals,
    pantheons.divineSpark
]