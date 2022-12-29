import { CivLabelModel } from "./labels"
import { PantheonModel, pantheons } from "./pantheons";

import abraham from "./assets/images/portraits/abraham.webp";
import alexander from "./assets/images/portraits/alexander.webp";
import amanitore from "./assets/images/portraits/Amanitore.webp";
import ambiorix from "./assets/images/portraits/Ambiorix.webp";
import basil from "./assets/images/portraits/Basil.webp";
import batrieu from "./assets/images/portraits/batrieu.webp";
import catherineBq from "./assets/images/portraits/catherineBq.webp";
import catherineMagnificence from "./assets/images/portraits/catherineMagnificence.webp";
import chandragupta from "./assets/images/portraits/Chandragupta.webp";
import cleopatra from "./assets/images/portraits/Cleopatra.webp";
import cyrus from "./assets/images/portraits/cyrus.webp";
import dido from "./assets/images/portraits/Dido.webp";
import eleanor from "./assets/images/portraits/eleanor.webp";
import eleanorFrance from "./assets/images/portraits/eleanorFrance.webp";
import frederick from "./assets/images/portraits/frederick.webp";
import gandhi from "./assets/images/portraits/Gandhi.webp";
import genghis from "./assets/images/portraits/genghis.webp";
import gilgamesh from "./assets/images/portraits/Gilgamesh.webp";
import gitarja from "./assets/images/portraits/Gitarja.webp";
import gorgo from "./assets/images/portraits/Gorgo.webp";
import hammurabi from "./assets/images/portraits/Hammurabi.webp";
import harald from "./assets/images/portraits/harald.webp";
import hojo from "./assets/images/portraits/hojo.webp";
import jadwiga from "./assets/images/portraits/Jadwiga.webp";
import jayavarman from "./assets/images/portraits/Jayavarman.webp";
import joao from "./assets/images/portraits/Joao.webp";
import johnCurtin from "./assets/images/portraits/johnCurtin.webp";
import caesar from "./assets/images/portraits/caesar.webp";
import kristina from "./assets/images/portraits/Kristina.webp";
import kublai from "./assets/images/portraits/kublai.webp";
import kublaiMongolia from "./assets/images/portraits/kublaiMongolia.webp";
import kupe from "./assets/images/portraits/Kupe.webp";
import ladySixSky from "./assets/images/portraits/ladySixSky.webp";
import lautaro from "./assets/images/portraits/Lautaro.webp";
import mansamusa from "./assets/images/portraits/mansamusa.webp";
import matthias from "./assets/images/portraits/matthias.webp";
import menelik from "./assets/images/portraits/menelik.webp";
import montezuma from "./assets/images/portraits/Montezuma.webp";
import mvemba from "./assets/images/portraits/mvemba.webp";
import nader from "./assets/images/portraits/nader.webp";
import nzinga from "./assets/images/portraits/nzinga.webp";
import pachacuti from "./assets/images/portraits/Pachacuti.webp";
import pedro from "./assets/images/portraits/pedro.webp";
import pericles from "./assets/images/portraits/Pericles.webp";
import peter from "./assets/images/portraits/Peter.webp";
import philip from "./assets/images/portraits/Philip.webp";
import poundmaker from "./assets/images/portraits/Poundmaker.webp";
import qin from "./assets/images/portraits/qin.webp";
import robert from "./assets/images/portraits/robert.webp";
import saladin from "./assets/images/portraits/Saladin.webp";
import saladinSultan from "./assets/images/portraits/saladinSultan.webp";
import seondeok from "./assets/images/portraits/Seondeok.webp";
import shaka from "./assets/images/portraits/Shaka.webp";
import simon from "./assets/images/portraits/simon.webp";
import suleiman from "./assets/images/portraits/Suleiman.webp";
import suleimanMuhtesem from "./assets/images/portraits/suleimanMuhtesem.webp";
import tamar from "./assets/images/portraits/Tamar.webp";
import teddy from "./assets/images/portraits/teddy.webp";
import teddyRR from "./assets/images/portraits/teddyRR.webp";
import tokugawa from "./assets/images/portraits/tokugawa.webp";
import tomyris from "./assets/images/portraits/Tomyris.webp";
import trajan from "./assets/images/portraits/Trajan.webp";
import victoria from "./assets/images/portraits/Victoria.webp";
import wilfried from "./assets/images/portraits/wilfried.webp";
import wilhelmina from "./assets/images/portraits/Wilhelmina.webp";
import { BeliefModel, beliefs } from "./beliefs";

export type CivModel = {
    id: string,
    portrait: string,
    leader: string,
    nation: string,
    labels: CivLabelModel[],
    strength: 1 | 2 | 3,
    difficulty: 1 | 2 | 3,
    strategies: string[],
    counters?: string[],
    pantheons: PantheonModel[],
    beliefs?: BeliefModel[]
}

export const civs: { [leader: string]: CivModel } = {
    abraham: {
        id: "abraham",
        portrait: abraham,
        leader: "Abraham Lincoln",
        nation: "American",
        strength: 2,
        difficulty: 2,
        labels: ["Production", "War"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into industrial zones once you unlocked a strong melee unit you want to push with (man-at-arms, musketman, infantry)."
        ],
        pantheons: [pantheons.cityPatronGoddess, pantheons.godOfCraftsmen]
    },
    alexander: {
        id: "alexander",
        portrait: alexander,
        leader: "Alexander",
        nation: "Macedonian",
        strength: 2,
        difficulty: 2,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into encampments and build your unique building.",
            "Start harassing opponents with your unique units."
        ],
        pantheons: [pantheons.godOfWarAndPlunder, pantheons.godOfTheForge, pantheons.cityPatronGoddess]
    },
    amanitore: {
        id: "amanitore",
        portrait: amanitore,
        leader: "Amanitore",
        nation: "Nubian",
        strength: 2,
        difficulty: 2,
        labels: ["Versatile"],
        strategies: [
            "Always make sure that you have at least one flat tile adjacent to city centers for your nubian pyramid. More is even better.",
            "You can do any opening.",
            "A good option can be to start with three holy sites with jesuit education. You have passive faith income from your pyramids.",
            "Place pyramids next to districts. District adjacency is less important with Amanitore."
        ],
        pantheons: [pantheons.religiousIdols, pantheons.godOfCraftsmen],
        beliefs: [beliefs.follower.jesuitEducation, beliefs.founder.layMinistry]
    },
    ambiorix: {
        id: "ambiorix",
        portrait: ambiorix,
        leader: "Ambiorix",
        nation: "Gallic",
        strength: 3,
        difficulty: 2,
        labels: ["Versatile", "Production", "Culture", "Carry"],
        strategies: [
            "Start with your unique industrial zone.",
        ],
        pantheons: [pantheons.stoneCircles, pantheons.godOfCraftsmen]
    },
    basil: {
        id: "basil",
        portrait: basil,
        leader: "Basil II",
        nation: "Byzantine",
        strength: 3,
        difficulty: 2,
        labels: ["War", "Religion", "Timing push"],
        strategies: [
            "Standard holy site opening.",
            "Play with the crusade belief, it is easy for Basil to convert enemy cities.",
            "Do a timing push with your unique unit."
        ],
        counters: [
            "Deny crusade."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.cityPatronGoddess],
        beliefs: [beliefs.enhancer.crusade]
    },
    batrieu: {
        id: "batrieu",
        portrait: batrieu,
        leader: "Bà Triệu",
        nation: "Vietnamese",
        strength: 3,
        difficulty: 3,
        labels: ["Versatile", "Culture"],
        strategies: [
            "You can do any opening.",
            "Place your unique encampment adjacent to as many districts as possible, to generate a lot of culture. They don't consume a district slot.",
            "Try to avoid desert and floodplains. You can't plant forests on those tiles.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: [pantheons.cityPatronGoddess]
    },
    catherine: {
        id: "catherine",
        portrait: catherineBq,
        leader: "Catherine de Medici (Black Queen)",
        nation: "French",
        strength: 2,
        difficulty: 1,
        labels: ["War"],
        strategies: [
            "Standard campus opening."
        ],
        pantheons: []
    },
    catherineMagnificence: {
        id: "catherineMagnificence",
        portrait: catherineMagnificence,
        leader: "Catherine de Medici (Magnificence)",
        nation: "French",
        strength: 1,
        difficulty: 2,
        labels: ["Culture"],
        strategies: [
            "Standard theather square opening."
        ],
        pantheons: []
    },
    chandragupta: {
        id: "chandragupta",
        portrait: chandragupta,
        leader: "Chandragupta",
        nation: "Indian",
        strength: 2,
        difficulty: 1,
        labels: ["Religion", "War"],
        strategies: [
            "Standard holy site opening.",
            "Defend yourself early with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath],
        beliefs: [beliefs.enhancer.crusade]
    },
    cleopatra: {
        id: "cleopatra",
        portrait: cleopatra,
        leader: "Cleopatra",
        nation: "Egyptian",
        strength: 2,
        difficulty: 1,
        labels: ["Gold", "Beginner-friendly", "Wide"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Quickly transition to international trade routes."
        ],
        pantheons: [pantheons.ladyOfTheReedsAndMarshes, pantheons.godOfWarAndPlunder, pantheons.religiousSettlements],
        beliefs: [beliefs.follower.religiousCommunity]
    },
    cyrus: {
        id: "cyrus",
        portrait: cyrus,
        leader: "Cyrus",
        nation: "Persian",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "War", "Beginner-friendly"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "You can do a timing push with your unique unit (with a general and ram)."
        ],
        pantheons: []
    },
    dido: {
        id: "dido",
        portrait: dido,
        leader: "Dido",
        nation: "Phoenician",
        strength: 2,
        difficulty: 1,
        labels: ["Naval", "Gold", "Wide", "Beginner-friendly"],
        strategies: [
            "Standard harbor opening.",
            "Mass produce settlers."
        ],
        pantheons: [pantheons.godOfTheSea, pantheons.religiousSettlements]
    },
    eleanor: {
        id: "eleanor",
        portrait: eleanor,
        leader: "Eleanor of Aquitaine",
        nation: "English",
        strength: 2,
        difficulty: 2,
        labels: ["Versatile", "Culture", "Naval"],
        strategies: [
            "Standard theather square opening."
        ],
        counters: [
            "Contest great works."
        ],
        pantheons: [pantheons.divineSpark]
    },
    eleanorFrance: {
        id: "eleanorFrance",
        portrait: eleanorFrance,
        leader: "Eleanor of Aquitaine",
        nation: "French",
        strength: 2,
        difficulty: 2,
        labels: ["Versatile", "Culture"],
        strategies: [
            "Standard harbor opening.",
            "Go into theather squares."
        ],
        counters: [
            "Contest great works."
        ],
        pantheons: [pantheons.divineSpark]
    },
    frederick: {
        id: "frederick",
        portrait: frederick,
        leader: "Frederick Barbarossa",
        nation: "German",
        strength: 3,
        difficulty: 1,
        labels: ["Production", "Versatile", "Carry", "Beginner-friendly"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into industrial zones, then campus, then encampment.",
            "Rush industrialization. Your high adjacency makes coal power plants very valuable.",
            "Mass produce cuirassier armies before researching tanks and steamroll your opponents."
        ],
        counters: [
            "Vulnerable early."
        ],
        pantheons: [pantheons.cityPatronGoddess]
    },
    gandhi: {
        id: "gandhi",
        portrait: gandhi,
        leader: "Gandhi",
        nation: "Indian",
        strength: 2,
        difficulty: 1,
        labels: ["Religion"],
        strategies: [
            "Standard holy site opening.",
            "Encourage other players to spread their religion to your cities.",
            "Defend yourself early with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath],
        beliefs: [beliefs.follower.choralMusic]
    },
    genghis: {
        id: "genghis",
        portrait: genghis,
        leader: "Genghis Khan",
        nation: "Mongolian",
        strength: 3,
        difficulty: 1,
        labels: ["War", "Timing push", "Carry", "Beginner-friendly"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into encampments and build your unique building.",
            "Do a timing push with your unique unit."
        ],
        pantheons: [pantheons.godOfWarAndPlunder]
    },
    gilgamesh: {
        id: "gilgamesh",
        portrait: gilgamesh,
        leader: "Gilgamesh",
        nation: "Sumerian",
        strength: 2,
        difficulty: 2,
        labels: ["Versatile"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
        ],
        pantheons: []
    },
    gitarja: {
        id: "gitarja",
        portrait: gitarja,
        leader: "Gitarja",
        nation: "Indonesian",
        strength: 2,
        difficulty: 2,
        labels: ["Naval", "Religion"],
        strategies: [
            "Standard holy site opening.",
            "Go into harbors.",
            "You can play with less holy sites.",
            "Try a caravel + unique unit timing push. You can buy ships with faith."
        ],
        pantheons: [pantheons.godOfTheSea],
        beliefs: [beliefs.follower.jesuitEducation]
    },
    gorgo: {
        id: "gorgo",
        portrait: gorgo,
        leader: "Gorgo",
        nation: "Greek",
        strength: 3,
        difficulty: 2,
        labels: ["Culture", "War"],
        strategies: [
            "Standard theather square opening.",
            "Always settle next to hills (place theather square on hill next to city center).",
            "You can do a timing push with your unique unit.",
            "Go for governments with the most military policy slots (Oligarchy, Monarchy, Fascism).",
            "Build Alhambra for an extra military policy slot.",
            "Survive until Fascism, then steamroll your opponents."
        ],
        counters: [
            "Vulnerable before she researches fascisms.",
            "Contest great works."
        ],
        pantheons: []
    },
    hammurabi: {
        id: "hammurabi",
        portrait: hammurabi,
        leader: "Hammurabi",
        nation: "Babylonian",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Science", "Beginner-friendly"],
        strategies: [
            "You can do any opening.",
            "In FFA, standard commercial hub + Magnus opening is recommended.",
            "In Teamers, standard campus opening is recommended.",
            "Build your unique building in every city."
        ],
        pantheons: []
    },
    harald: {
        id: "harald",
        portrait: harald,
        leader: "Harald Hardrada",
        nation: "Norwegian",
        strength: 3,
        difficulty: 2,
        labels: ["Religion", "Naval", "War"],
        strategies: [
            "Standard holy site opening.",
            "Go into harbors.",
            "Rush your unique holy site building.",
        ],
        pantheons: [pantheons.godOfTheSea],
        beliefs: [beliefs.follower.choralMusic]
    },
    hojo: {
        id: "hojo",
        portrait: hojo,
        leader: "Hojo Tokimune",
        nation: "Japanese",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly", "Carry", "Naval"],
        strategies: [
            "You can do any opening.",
            "Standard harbor opening is recommended.",
            "You can do a timing push with your unique unit.",
            "You can do a very strong caravel timing push."
        ],
        pantheons: [pantheons.godOfTheSea, pantheons.cityPatronGoddess],
        beliefs: [beliefs.follower.zenMeditation, beliefs.founder.layMinistry]
    },
    jadwiga: {
        id: "jadwiga",
        portrait: jadwiga,
        leader: "Jadwiga",
        nation: "Polish",
        strength: 3,
        difficulty: 2,
        labels: ["Religion", "Timing push"],
        strategies: [
            "Standard holy site opening.",
            "Pick the choral music belief to boost culture. This helps you reach your unique unit faster.",
            "Go into commercial hubs.",
            "Do a timing push with your unique unit (one of the strongest in the game)."
        ],
        counters: [
            "Attack her before she unlocks Winged Hussars.",
            "Spam Pikeman, which you can then upgrade to Pike & Shot, to defend against Winged Hussars."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath, pantheons.godOfWarAndPlunder],
        beliefs: [beliefs.follower.choralMusic, beliefs.follower.reliquaries, beliefs.worship.darEMehr, beliefs.enhancer.crusade]
    },
    jayavarman: {
        id: "jayavarman",
        portrait: jayavarman,
        leader: "Jayavarman VII",
        nation: "Khmer",
        strength: 3,
        difficulty: 2,
        labels: ["Religion", "Culture", "Tall"],
        strategies: [
            "Standard holy site opening.",
            "Build an aqueduct in every city.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess]
    },
    joao: {
        id: "joao",
        portrait: joao,
        leader: "João III",
        nation: "Portuguese",
        strength: 3,
        difficulty: 2,
        labels: ["Naval", "Gold", "Science"],
        strategies: [
            "Standard harbor opening.",
            "Go into campuses.",
            "Encourage at least one teammate to settle on coast."
        ],
        pantheons: [pantheons.godOfTheSea]
    },
    johnCurtin: {
        id: "johnCurtin",
        portrait: johnCurtin,
        leader: "John Curtin",
        nation: "Australian",
        strength: 3,
        difficulty: 2,
        labels: ["Versatile", "Science", "Carry", "Naval"],
        strategies: [
            "You can do any opening.",
            "In FFA, standard harbor + Magnus opening is recommended.",
            "In Teamers, standard campus opening is recommended.",
        ],
        pantheons: [pantheons.godOfTheSea, pantheons.divineSpark]
    },
    caesar: {
        id: "caesar",
        portrait: caesar,
        leader: "Julius Caesar",
        nation: "Roman",
        strength: 2,
        difficulty: 1,
        labels: ["War", "Gold"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Do a timing push with your unique unit.",
            "Start settling cities, once you unlocked your unique unit, to quickly build up military numbers."
        ],
        pantheons: [pantheons.godOfWarAndPlunder, pantheons.religiousSettlements]
    },
    kristina: {
        id: "kristina",
        portrait: kristina,
        leader: "Kristina",
        nation: "Swedish",
        strength: 3,
        difficulty: 2,
        labels: ["Culture", "Versatile"],
        strategies: [
            "Standard theather square opening",
            "Build wonders with great work slots, like great library and apadana. You get easy theming bonuses with Kristina."
        ],
        counters: [
            "Contest great works."
        ],
        pantheons: [pantheons.divineSpark]
    },
    kublai: {
        id: "kublai",
        portrait: kublai,
        leader: "Kublai Khan",
        nation: "Chinese",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Quickly transition to international trade routes."
        ],
        pantheons: [pantheons.godOfWarAndPlunder]
    },
    kublaiMongolia: {
        id: "kublaiMongolia",
        portrait: kublaiMongolia,
        leader: "Kublai Khan",
        nation: "Mongolian",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Timing push", "Beginner-friendly"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Quickly transition to international trade routes.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: [pantheons.godOfWarAndPlunder]
    },
    kupe: {
        id: "kupe",
        portrait: kupe,
        leader: "Kupe",
        nation: "Māori",
        strength: 2,
        difficulty: 3,
        labels: ["Naval", "Versatile", "Culture"],
        strategies: [
            "Very complicated leader. You can easily end up in awkward situations.",
            "Standard theather square or harbor opening."
        ],
        pantheons: []
    },
    ladySixSky: {
        id: "ladySixSky",
        portrait: ladySixSky,
        leader: "Lady Six Sky",
        nation: "Mayan",
        strength: 3,
        difficulty: 2,
        labels: ["Science", "Tall", "Carry"],
        strategies: [
            "Standard campus opening.",
            "You will need builders early to build farms for housing."
        ],
        counters: [
            "Deny settles."
        ],
        pantheons: [pantheons.ladyOfTheReedsAndMarshes]
    },
    lautaro: {
        id: "lautaro",
        portrait: lautaro,
        leader: "Lautaro",
        nation: "Mapuche",
        strength: 3,
        difficulty: 1,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into encampments.",
            "Do a timing push with your unique unit."
        ],
        counters: [
            "Don't enter golden age. jk <3"
        ],
        pantheons: []
    },
    mansamusa: {
        id: "mansamusa",
        portrait: mansamusa,
        leader: "Mansa Musa",
        nation: "Malian",
        strength: 3,
        difficulty: 3,
        labels: ["Gold", "Religion"],
        strategies: [
            "Standard holy site opening.",
            "Go into commercial hubs.",
            "Use your exceptional gold income to buy buildings to offset your production malus."
        ],
        counters: [
            "Vulnerable early.",
            "Use spies to siphon funds."
        ],
        pantheons: [pantheons.desertFolklore],
        beliefs: [beliefs.follower.feedTheWorld, beliefs.founder.stewardship]
    },
    matthias: {
        id: "matthias",
        portrait: matthias,
        leader: "Matthias Corvinus",
        nation: "Hungarian",
        strength: 3,
        difficulty: 2,
        labels: ["Gold", "War"],
        strategies: [
            "Standard commercial hub opening.",
            "Try doing city state quests. Focus city states next to opponents.",
            "Harass opponents with city state units, while continuing to improve your own cities."
        ],
        counters: [
            "Kill city states."
        ],
        pantheons: [pantheons.godOfWarAndPlunder]
    },
    menelik: {
        id: "menelik",
        portrait: menelik,
        leader: "Menelik II",
        nation: "Ethiopian",
        strength: 2,
        difficulty: 2,
        labels: ["Religion", "Versatile"],
        strategies: [
            "Standard holy site opening.",
            "Always settle on hills.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: [pantheons.sacredPath, pantheons.riverGoddess],
        beliefs: [beliefs.founder.stewardship]
    },
    montezuma: {
        id: "montezuma",
        portrait: montezuma,
        leader: "Montezuma",
        nation: "Aztec",
        strength: 2,
        difficulty: 2,
        labels: ["War", "Wide"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into campuses or encampments (depending on your push timing).",
            "Try to settle multiple continents, to have access to more luxuries."
        ],
        counters: [
            "Deny settles."
        ],
        pantheons: []
    },
    mvemba: {
        id: "mvemba",
        portrait: mvemba,
        leader: "Mvemba a Nzinga",
        nation: "Kongolese",
        strength: 1,
        difficulty: 2,
        labels: ["Culture", "Tall"],
        strategies: [
            "Standard theather square opening.",
            "Always build your unique district.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: []
    },
    nader: {
        id: "nader",
        portrait: nader,
        leader: "Nader Shah",
        nation: "Persian",
        strength: 2,
        difficulty: 1,
        labels: ["Culture", "War"],
        strategies: [
            "Standard commercial hub + Magnus opening."
        ],
        pantheons: [pantheons.godOfWarAndPlunder, pantheons.godOfTheForge, pantheons.cityPatronGoddess]
    },
    nzinga: {
        id: "nzinga",
        portrait: nzinga,
        leader: "Nzinga Mbande",
        nation: "Kongolese",
        strength: 2,
        difficulty: 1,
        labels: ["Tall", "Versatile", "Beginner-friendly"],
        strategies: [
            "You can do any opening.",
            "Try to quickly settle your continent, before other players deny your settles.",
            "Do not settle other continents."
        ],
        counters: [
            "Deny settles."
        ],
        pantheons: []
    },
    pachacuti: {
        id: "pachacuti",
        portrait: pachacuti,
        leader: "Pachacuti",
        nation: "Inca",
        strength: 2,
        difficulty: 1,
        labels: ["Tall", "Versatile", "Beginner-friendly"],
        strategies: [
            "You can do many openings.",
            "In FFA, standard commercial hub + Magnus opening is recommended.",
            "In Teamers, standard campus opening is recommended.",
            "Quickly build your unique improvement, ideally next to mountains.",
            "You can do a holy site + preserve opening (Also pick earth goddess pantheon)."
        ],
        pantheons: [
            pantheons.fertilityRites, pantheons.earthGoddess, pantheons.cityPatronGoddess
        ],
        beliefs: [beliefs.follower.jesuitEducation, beliefs.founder.stewardship]
    },
    pedro: {
        id: "pedro",
        portrait: pedro,
        leader: "Pedro II",
        nation: "Brazilian",
        strength: 3,
        difficulty: 2,
        labels: ["Versatile", "Carry"],
        strategies: [
            "You can do any opening.",
            "When doing a holy site opening, pick sacred path pantheon for exceptional holy site adjacency.",
            "You can do a timing push with your unique unit (one of the strongest in the game, but requires coastal settles)."
        ],
        pantheons: [
            pantheons.sacredPath, pantheons.cityPatronGoddess
        ],
        beliefs: [beliefs.follower.jesuitEducation, beliefs.follower.feedTheWorld]
    },
    pericles: {
        id: "pericles",
        portrait: pericles,
        leader: "Pericles",
        nation: "Greek",
        strength: 2,
        difficulty: 2,
        labels: ["Culture"],
        strategies: [
            "Standard theather square opening.",
            "Always settle next to hills (place theather square on hill next to city center).",
            "Build amphitheathers right away.",
            "Try to become suzerain of as many city states as possible (focus uncontested city states first)."
        ],
        counters: [
            "Kill city states."
        ],
        pantheons: []
    },
    peter: {
        id: "peter",
        portrait: peter,
        leader: "Peter",
        nation: "Russian",
        strength: 3,
        difficulty: 1,
        labels: ["Religion", "Wide", "Carry", "Culture", "Beginner-friendly"],
        strategies: [
            "Standard holy site opening.",
            "Pick the feed the world belief, as you will lack food in tundra.",
            "Pick tithe, to offset your lack of gold income.",
            "Go into theather squares, your holy sites generate additional great writer and artist points."
        ],
        pantheons: [
            pantheons.danceOfTheAurora, pantheons.goddessOfTheHunt, pantheons.riverGoddess
        ],
        beliefs: [beliefs.follower.feedTheWorld, beliefs.founder.tithe]
    },
    philip: {
        id: "philip",
        portrait: philip,
        leader: "Philip II",
        nation: "Spanish",
        strength: 3,
        difficulty: 2,
        labels: ["Naval", "Religion", "Gold", "Timing push"],
        strategies: [
            "Standard holy site opening.",
            "Go into harbors.",
            "You can do a timing push with your unique unit (don't forget to take missionaries with you)."
        ],
        pantheons: [
            pantheons.godOfTheSea, pantheons.riverGoddess
        ],
        beliefs: [beliefs.follower.jesuitEducation]
    },
    poundmaker: {
        id: "poundmaker",
        portrait: poundmaker,
        leader: "Poundmaker",
        nation: "Cree",
        strength: 3,
        difficulty: 1,
        labels: ["Gold", "Versatile", "Beginner-friendly", "Tall", "Wide"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Try to find a settle with as many pastures as possible. Send all trade routes to that city.",
            "Build your unique improvement."
        ],
        pantheons: [pantheons.godOfWarAndPlunder, pantheons.religiousSettlements, pantheons.cityPatronGoddess]
    },
    qin: {
        id: "qin",
        portrait: qin,
        leader: "Qin Shi Huang",
        nation: "Chinese",
        strength: 3,
        difficulty: 3,
        labels: ["Culture"],
        strategies: [
            "Build stonehenge to found your religion.",
            "Pick the divine inspiration belief.",
            "Try to build as many ancient and classical wonders as possible (use builder charges).",
            "Wonders and your unique improvement can help you achieve a quick culture victory."
        ],
        counters: [
            "Qin Shi Huang is vulnerable early, as he will focus wonder production above all else."
        ],
        pantheons: [],
        beliefs: [beliefs.follower.divineInspiration, beliefs.founder.sacredPlaces]
    },
    robert: {
        id: "robert",
        portrait: robert,
        leader: "Robert the Bruce",
        nation: "Scottish",
        strength: 2,
        difficulty: 2,
        labels: ["Science", "Versatile", "Carry"],
        strategies: [
            "Standard campus opening.",
            "Go into industrial zones.",
            "Build wonders that provide amenities (Temple of artemis & Colosseum especially).",
            "Always build your unique improvement next to city centers."
        ],
        counters: [
            "Contest Temple of Artemis & Colosseum."
        ],
        pantheons: []
    },
    saladin: {
        id: "saladin",
        portrait: saladin,
        leader: "Saladin (Vizier)",
        nation: "Arabian",
        strength: 3,
        difficulty: 2,
        labels: ["Religion", "Science", "Carry"],
        strategies: [
            "Standard holy site opening.",
            "Pick the choral music belief (this will be your main culture income).",
            "Go into campuses.",
            "Build campuses and holy sites next to each other.",
            "Pick the Dar-e Mehr worship building (for additional culture).",
            "Rush your worship building in every city (always purchase with faith).",
            "Pick tithe to offset your high gold maintenance.",
            "You can do a timing push with your unique unit."
        ],
        counters: [
            "Vulnerable early.",
            "Deny choral music & tithe.",
            "Build pikeman against a likely Mamluk push."
        ],
        pantheons: [
            pantheons.riverGoddess, pantheons.sacredPath
        ],
        beliefs: [beliefs.follower.choralMusic, beliefs.worship.darEMehr, beliefs.founder.tithe]
    },
    saladinSultan: {
        id: "saladinSultan",
        portrait: saladinSultan,
        leader: "Saladin (Sultan)",
        nation: "Arabian",
        strength: 3,
        difficulty: 2,
        labels: ["Religion", "Science", "War"],
        strategies: [
            "Standard holy site opening.",
            "Pick the choral music belief (this will be your main culture income).",
            "Go into campuses.",
            "Build campuses and holy sites next to each other.",
            "Pick the Dar-e Mehr worship building (for additional culture).",
            "Rush your worship building in every city.",
            "Pick tithe to offset your high gold maintenance.",
            "Do a timing push with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath],
        beliefs: [beliefs.follower.choralMusic, beliefs.worship.darEMehr, beliefs.founder.tithe]
    },
    seondeok: {
        id: "seondeok",
        portrait: seondeok,
        leader: "Seondeok",
        nation: "korean",
        strength: 3,
        difficulty: 1,
        labels: ["Science", "Culture", "Carry", "Beginner-friendly", "Tall"],
        strategies: [
            "Standard campus opening.",
            "Build campuses adjacent to as many hills as possible (not mountains).",
            "Quickly build builders to improve mines next to campuses.",
            "Go into theather squares.",
            "Don't build districts next to campuses, except theather squares.",
        ],
        pantheons: [pantheons.fertilityRites]
    },
    shaka: {
        id: "shaka",
        portrait: shaka,
        leader: "Shaka",
        nation: "Zulu",
        strength: 3,
        difficulty: 1,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into encampments.",
            "Do a timing push with your unique unit."
        ],
        pantheons: [pantheons.godOfTheForge, pantheons.cityPatronGoddess]
    },
    simon: {
        id: "simon",
        portrait: simon,
        leader: "Simón Bolívar",
        nation: "Gran Columbian",
        strength: 1,
        difficulty: 2,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into campuses.",
            "Go into encampments.",
            "Do a timing push with your unique unit."
        ],
        counters: [
            "This leader is only good at doing a timing push with his unique unique. Build Pike & Shot to stop that push dead in its tracks."
        ],
        pantheons: []
    },
    suleiman: {
        id: "suleiman",
        portrait: suleiman,
        leader: "Suleiman",
        nation: "Ottoman",
        strength: 2,
        difficulty: 2,
        labels: ["Timing push", "Gold"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Go into campuses.",
            "Pre-build warriors or swordsman and upgrade them with the mercenaries civic to janissaries for a very low price (and without the population cost).",
            "Do a timing push with your unique unit (one of the strongest in the game).",
            "Appoint your unique governour, place him next to opponent cities, pick the serasker promotion.",
            "Quickly research your unique bank."
        ],
        counters: [
            "Attack Suleiman early, where he has no bonuses.",
            "Korea's Hwachas are a great counter, since they are unlocked at the same technology as Janissaries, while Korea easily generates more science per turn."
        ],
        pantheons: [pantheons.cityPatronGoddess, pantheons.religiousSettlements]
    },
    suleimanMuhtesem: {
        id: "suleimanMuhtesem",
        portrait: suleimanMuhtesem,
        leader: "Suleiman (Muhteşem)",
        nation: "Ottoman",
        strength: 3,
        difficulty: 2,
        labels: ["Versatile", "Carry"],
        strategies: [
            "Standard commercial hub + Magnus opening."
        ],
        pantheons: []
    },
    tamar: {
        id: "tamar",
        portrait: tamar,
        leader: "Tamar",
        nation: "Georgian",
        strength: 2,
        difficulty: 2,
        labels: ["Religion", "Timing push", "Versatile"],
        strategies: [
            "Three holy site opening.",
            "Pick jesuit education. You have extra faith income from your unique walls.",
            "Pick papal primacy and try to generate as many envoys as possible",
            "Go into campuses.",
            "Go into theather squares.",
            "You can do a timing push with your unique unit."
        ],
        pantheons: [pantheons.religiousIdols],
        beliefs: [beliefs.follower.jesuitEducation, beliefs.founder.papalPrimacy]
    },
    teddy: {
        id: "teddy",
        portrait: teddy,
        leader: "Teddy Roosevelt (Bull Moose)",
        nation: "American",
        strength: 3,
        difficulty: 3,
        labels: ["Versatile", "Carry"],
        strategies: [
            "Standard holy site + preserve opening.",
            "Go into campuses.",
            "Chop rainforests and swamps. Don't build mines or quarries.",
            "Quickly research medieval faires to plant forests early."
        ],
        counters: [
            "Vulnerable early.",
            "Deny Eiffel Tower."
        ],
        pantheons: [pantheons.earthGoddess],
        beliefs: [beliefs.follower.jesuitEducation]
    },
    teddyRR: {
        id: "teddyRR",
        portrait: teddyRR,
        leader: "Teddy Roosevelt (Rough Rider)",
        nation: "American",
        strength: 2,
        difficulty: 1,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Do a timing push with your unique unit."

        ],
        pantheons: []
    },
    tokugawa: {
        id: "tokugawa",
        portrait: tokugawa,
        leader: "Tokugawa",
        nation: "Japanese",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly"],
        strategies: [
            "Standard harbor hub + Magnus opening."
        ],
        pantheons: [
            pantheons.godOfTheSea
        ]
    },
    tomyris: {
        id: "tomyris",
        portrait: tomyris,
        leader: "Tomyris",
        nation: "Scythian",
        strength: 2,
        difficulty: 3,
        labels: ["War", "Timing push"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "In Teamers, you can all-in early with your unique unit."
        ],
        pantheons: []
    },
    trajan: {
        id: "trajan",
        portrait: trajan,
        leader: "Trajan",
        nation: "Roman",
        strength: 3,
        difficulty: 1,
        labels: ["Beginner-friendly", "Versatile", "Timing push", "Gold"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "You can do a timing push with your unique unit (you can chop legions with legions).",
            "Build your unique aqueduct in every city."
        ],
        pantheons: [pantheons.cityPatronGoddess]
    },
    victoria: {
        id: "victoria",
        portrait: victoria,
        leader: "Victoria",
        nation: "English",
        strength: 2,
        difficulty: 1,
        labels: ["Naval", "Versatile", "Beginner-friendly"],
        strategies: [
            "Standard harbor opening."
        ],
        pantheons: [pantheons.godOfTheSea]
    },
    wilfried: {
        id: "wilfried",
        portrait: wilfried,
        leader: "Wilfried Laurier",
        nation: "Canadian",
        strength: 3,
        difficulty: 2,
        labels: ["Culture"],
        strategies: [
            "Standard theather square or holy site opening.",
            "Use your unique unit to mass produce national parks and secure a strong culture victory.",
            "Use your unique unit to defend yourself."
        ],
        pantheons: [pantheons.goddessOfTheHunt],
        beliefs: [beliefs.follower.jesuitEducation, beliefs.founder.layMinistry]
    },
    wilhelmina: {
        id: "wilhelmina",
        portrait: wilhelmina,
        leader: "Wilhelmina",
        nation: "Dutch",
        strength: 2,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly", "Naval"],
        strategies: [
            "Standard commercial hub + Magnus opening.",
            "Quickly transition to international trade routes."
        ],
        pantheons: []
    },
}