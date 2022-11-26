import { CivLabelModel } from "./labels"
import { PantheonModel, pantheons } from "./pantheons";

import abraham from "./assets/images/portraits/abraham.webp";
import alexander from "./assets/images/portraits/alexander.webp";
import amanitore from "./assets/images/portraits/amanitore.webp";
import ambiorix from "./assets/images/portraits/ambiorix.webp";
import basil from "./assets/images/portraits/basil.webp";
import batrieu from "./assets/images/portraits/batrieu.webp";
import catherineBq from "./assets/images/portraits/catherineBq.webp";
import catherineMagnificence from "./assets/images/portraits/catherineMagnificence.webp";
import chandragupta from "./assets/images/portraits/chandragupta.webp";
import cleopatra from "./assets/images/portraits/cleopatra.webp";
import cyrus from "./assets/images/portraits/cyrus.webp";
import dido from "./assets/images/portraits/dido.webp";
import eleanor from "./assets/images/portraits/eleanor.webp";
import eleanorFrance from "./assets/images/portraits/eleanorFrance.webp";
import frederick from "./assets/images/portraits/frederick.webp";
import gandhi from "./assets/images/portraits/gandhi.webp";
import genghis from "./assets/images/portraits/genghis.webp";
import gilgamesh from "./assets/images/portraits/gilgamesh.webp";
import gitarja from "./assets/images/portraits/gitarja.webp";
import gorgo from "./assets/images/portraits/gorgo.webp";
import hammurabi from "./assets/images/portraits/hammurabi.webp";
import harald from "./assets/images/portraits/harald.webp";
import hojo from "./assets/images/portraits/hojo.webp";
import jadwiga from "./assets/images/portraits/jadwiga.webp";
import jayavarman from "./assets/images/portraits/jayavarman.webp";
import joao from "./assets/images/portraits/joao.webp";
import johnCurtin from "./assets/images/portraits/johnCurtin.webp";
import caesar from "./assets/images/portraits/caesar.webp";
import kristina from "./assets/images/portraits/kristina.webp";
import kublai from "./assets/images/portraits/kublai.webp";
import kublaiMongolia from "./assets/images/portraits/kublaiMongolia.webp";
import kupe from "./assets/images/portraits/kupe.webp";
import ladySixSky from "./assets/images/portraits/ladySixSky.webp";
import lautaro from "./assets/images/portraits/lautaro.webp";
import mansamusa from "./assets/images/portraits/mansamusa.webp";
import matthias from "./assets/images/portraits/matthias.webp";
import menelik from "./assets/images/portraits/menelik.webp";
import montezuma from "./assets/images/portraits/montezuma.webp";
import mvemba from "./assets/images/portraits/mvemba.webp";
import nzinga from "./assets/images/portraits/nzinga.webp";
import pachacuti from "./assets/images/portraits/pachacuti.webp";
import pedro from "./assets/images/portraits/pedro.webp";
import pericles from "./assets/images/portraits/pericles.webp";
import peter from "./assets/images/portraits/peter.webp";
import philip from "./assets/images/portraits/philip.webp";
import poundmaker from "./assets/images/portraits/poundmaker.webp";
import qin from "./assets/images/portraits/qin.webp";
import robert from "./assets/images/portraits/robert.webp";
import saladin from "./assets/images/portraits/saladin.webp";
import saladinSultan from "./assets/images/portraits/saladinSultan.webp";
import seondeok from "./assets/images/portraits/seondeok.webp";
import shaka from "./assets/images/portraits/shaka.webp";
import simon from "./assets/images/portraits/simon.webp";
import suleiman from "./assets/images/portraits/suleiman.webp";
import tamar from "./assets/images/portraits/tamar.webp";
import teddy from "./assets/images/portraits/teddy.webp";
import teddyRR from "./assets/images/portraits/teddyRR.webp";
import tomyris from "./assets/images/portraits/tomyris.webp";
import trajan from "./assets/images/portraits/trajan.webp";
import victoria from "./assets/images/portraits/victoria.webp";
import wilfried from "./assets/images/portraits/wilfried.webp";
import wilhelmina from "./assets/images/portraits/wilhelmina.webp";

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
    pantheons: PantheonModel[]
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
            "Start with a standard commercial hub and magnus opening, but quickly go into industrial zones. Don't forget to research man-at-arms or musketman before completing industrial zones, so you can do a strong timing push with the latest melee units."
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
            "Start with a standard commercial hub opening, but then go into encampments to build your unique encampment building as fast as possible. Afterwards start mass producing units and harassing enemies, ideally taking their cities. You don't get any war weariness, make use of that."
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
            "Whenever you settle a city, make sure there is a flat tile adjacent to your city center. Build the nubian pyramid on that flat tile and always build the pyramid first. You can go into any playstyle afterwards",
            "You can play Amanitore religiously, since you generate passive faith from your unique improvement. I recommend only building three holy sites and choosing the Jesuit Education belief. You don't need more faith."
        ],
        pantheons: [pantheons.religiousIdols, pantheons.godOfCraftsmen]
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
            "Your unique industrial zone is very strong, build it first or second in every city. Prioritize producing builders, so you can improve mines. Mines generate additional culture and trigger a culture bomb. Don't forget that you can't build districts adjacent to the city center (Not even harbors)!"
        ],
        pantheons: []
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
            "Prepare for a timing push with your unique knights. When you found your religion, always choose the Crusade belief, even if you fight against other religious players. Your religion spreads any time you kill an enemy unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.cityPatronGoddess]
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
            "Try to place your districts on rainforests or swamps, since normal forests give you extra culture, which you will generate plenty of already from other sources. One of those other sources is your unique encampment. Build it in every city adjacent to as many districts as possible (even other encampments)."
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
            "This civs offers nothing special. Play a standard opening."
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
            "Focus theather squares."
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
            "Standard holy site play.",
            "Defend yourself early with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath]
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
            "Standard commercial hub play."
        ],
        pantheons: [pantheons.ladyOfTheReedsAndMarshes, pantheons.godOfWarAndPlunder, pantheons.religiousSettlements]
    },
    cyrus: {
        id: "cyrus",
        portrait: cyrus,
        leader: "Cyrus",
        nation: "Persian",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "War"],
        strategies: [
            "Standard commerical hub play.",
            "Four cities with commercial hubs into Immortal push."
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
        labels: ["Gold", "Wide"],
        strategies: [
            "Standard harbor play. Spam settlers."
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
        labels: ["Versatile", "Culture"],
        strategies: [
            "Focus theather squares and get great works. Don't forget wonders like Great Library and Apadana.",
        ],
        counters: [
            "Contest great works. Leaders like Perciles, Gorgo, Peter, Qin Shi Huang and Sweden are good at this."
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
            "Focus theather squares and get great works. Don't forget wonders like Great Library and Apadana."
        ],
        counters: [
            "Contest great works. Leaders like Perciles, Gorgo, Peter, Qin Shi Huang and Sweden are good at this."
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
        labels: ["Production", "Versatile", "Carry"],
        strategies: [
            "Start with commercial hubs into industrial zones. Commercial hub adjacency is not important, use them to boost industrial adjacency. The build campuses and encampments. Focus industrialization in the tech tree. Spam Cuirassiers with your high production before researching tanks."
        ],
        counters: [
            "Since Frederick will focus commercial hubs and industrial zones, his stats will be bad, punish him for that."
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
            "Standard religious play",
            "If you have teammates, they should found religions and spread it to your cities, so you can benefit from multiple founder beliefs.",
            "Defend yourself early with your unique unit."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath]
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
            "Start with commercial hubs into encampments. Build your unique encampment building and spam keshigs. Keshigs can destroy city walls, if your timing is good.",
            "You could do a super quick horse rush.",
            "Prepare your whole game for a strong tank push by starting with commercials into campus, then industrial zone and encampment."
        ],
        pantheons: [pantheons.godOfWarAndPlunder]
    },
    Gilgamesh: {
        id: "gilgamesh",
        portrait: gilgamesh,
        leader: "Gilgamesh",
        nation: "Sumerian",
        strength: 2,
        difficulty: 2,
        labels: ["Versatile"],
        strategies: [
            "Standard commercial hub play."
        ],
        pantheons: []
    },
    Gitarja: {
        id: "gitarja",
        portrait: gitarja,
        leader: "Gitarja",
        nation: "Indonesian",
        strength: 2,
        difficulty: 2,
        labels: ["Naval", "Religion"],
        strategies: [
            "Standard harbor play",
            "You have passive faith income from your cities, which means you don't have to build holy sites in every city. You could play with jesuit education for example.",
            "Try a caravel timing push. You can buy ships with faith."
        ],
        counters: [
            "Philip is a naval leader, who has bonus combat strength against other religions and can create fleets earlier."
        ],
        pantheons: [pantheons.godOfTheSea]
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
            "Build a theather square first in every city. Always settle cities next to a hill, since your unique theather square can only be built on hills, and wants to be next to your city center for a +2 adjacency. Always take government types with the most military policy slots (Oligarchy, Monarchy, Fascisms) and build the wonder Alhambra for an additional miltary policy slot. When you reach Fascisms (usually far before anyone else) you have your strongest timing."
        ],
        counters: [
            "Vulnerable before she researches fascisms.",
            "Contest great works"
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
        labels: ["Versatile", "Science"],
        strategies: [
            "Standard commercial hub play. Try to get as many eurekas as possible. Build your unique city center building in every city (try to always settle river)."
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
            "Holy sites into harbors. Build your unique holy site building as quickly as possible."
        ],
        counters: [
            "Vulnerable from land.",
            "Philip is strong against religious naval leaders."
        ],
        pantheons: [pantheons.godOfTheSea]
    },
    hojo: {
        id: "hojo",
        portrait: hojo,
        leader: "Hojo Tokimune",
        nation: "Japanese",
        strength: 3,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly", "Carry"],
        strategies: [
            "Standard harbor play. Then just try to build districts adjacent to as many districts as possible. With Hojo you can do almost any playstyle, he is one of the most versatile leaders."
        ],
        pantheons: [pantheons.godOfTheSea, pantheons.cityPatronGoddess]
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
            "Standard commercial hub play with holy sites.",
            "One of the strongest timing pushes in the game. If you find a relic from a village, definitly take the reliquaries belief, otherwise you can also take the choral music belief, to boost your culture as much as possible (which will lead to winged hussars). When you find a relic, you have to give it to a teammate before founding your religion, otherwise the relic from founding a religion will be lost."
        ],
        counters: [
            "Attack her before she unlocks Winged Hussars.",
            "Spam Pikeman, which you can then upgrade to Pike & Shot, to defend against Winged Hussars."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.godOfTheSea, pantheons.godOfWarAndPlunder]
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
            "Standard holy site play. Plan your aqueducts and build them in every city. Build your unique holy site building as fast as possible.",
            "Your unique trebuchet is very good for a timing push"
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
            "At least one of your teammates should settle on coast, so you can trade with them. Build feitorias. Standard harbor play into campus."
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
        labels: ["Versatile", "Science", "Carry"],
        strategies: [
            "In team games, start with campus and theather, to boost your stats as much as possible. Your unique improvement is extremely good.",
            "In FFA you will need harbors or commercial hubs."
        ],
        pantheons: []
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
            "Start with a low number of cities and commercial hubs. Build settlers while researching legions, man-at-arms or musketman. Settle cities once one of those units are researched, then push."
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
            "Wonders like great library & apadana are themeable with only two great works of writing, always go for them. Settle a city on each resource type and build your unique improvement in every city."
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
        labels: ["Gold", "Versatile"],
        strategies: [
            "Standard commercial hub play."
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
        labels: ["Gold", "Versatile", "Timing push"],
        strategies: [
            "Standard commercial hub play.",
            "You could try a timing push with keshigs."
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
            "Very complicated and unique civ. You can easily end up in awkward situations when you settle your first city. Your unique theather square building is strong.",
            "You could go for a preserve play, since your unimproved tiles already get benefits from Kupe's abilities."
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
            "Start with your unique campus in every city. Quickly produce builders and build farms, ideally next to campuses."
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
            "Do a timing push with your unique unit. Your combat bonus is incredibly strong."
        ],
        counters: [
            "Don't enter golden age. (jk <3)"
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
            "Start with holy sites into commercial hubs. You will have a desert city, from which all international trade routes must start. Buy buildings with gold."
        ],
        counters: [
            "Very vulnerable early."
        ],
        pantheons: [pantheons.desertFolklore]
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
            "Start with commercial hubs. Try to do city state quests and become suzerain of as many as possible. Obviously focus city states close to your enemies. Levy and upgrade and attack. You can continue building your empire, while your enemies have to deal with stronger city state units."
        ],
        counters: [
            "Kill city states. Frederick excels at that."
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
            "Start with only three holy sites, you generate enough faith from other sources (traders and unique improvement). Don't forget to always settle on hills."
        ],
        pantheons: []
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
            "You want to settle on multiple continents, to get more than four luxuries. You can do good pushes with either man-at-arms, musketman or infantry."
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
            "Focus theather squares. Build your unique district."
        ],
        pantheons: []
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
            "Try to fit as many cities as possible in your capital continent (this means you should also settle tiles with no water source if necessary)."
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
            "Get builders quickly to build your unique improvement. Build it adjacent to mountains for maximum effect.",
            "You can start with commercial hubs or campuses.",
            "You could also try a religious strategy, where you build only a single holy site to found your religions, and then go for preserves. Preserves can boost mountain yields, which are always breathtaking. Also take the earth goddess pantheon to further boost your faith income from mountains."
        ],
        pantheons: [
            pantheons.fertilityRites, pantheons.earthGoddess, pantheons.cityPatronGoddess
        ]
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
            "You can start with any district (Holy site, Commercial, Campus, Theather).",
            "If you want to play with holy sites, take the sacred path pantheon for insane holy site adjacency.",
            "Your unique battleship is incredibly strong."
        ],
        pantheons: [
            pantheons.sacredPath, pantheons.cityPatronGoddess
        ]
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
            "Rush theather squares and amphitheathers in every city. Try to become suzerain of as many cities as possible. Try to get the city states first, which no one else cares about and which are far away from other players (you will stay suzerain easily).",
            "Build Apadana and foreign ministry.",
        ],
        counters: [
            "Kill city states. Frederick Barbarossa has +7 combat strength against city states."
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
            "Spam holy sites. Don't forget to build theather squares, since your holy sites will generate additional great writer and artist points.",
            "Take the \"Feed the World\" belief, since you will lack food in tundra."
        ],
        pantheons: [
            pantheons.danceOfTheAurora, pantheons.goddessOfTheHunt, pantheons.riverGoddess
        ]
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
            "You can start with only three holy sites and then go for harbors and other districts. Choose the \"Jesuit Education\" belief, you will generate faith from trade routes and your unique improvement.",
            "You can also play a style where you spam holy sites.",
            "Do a timing push with Conquistadors. Don't forget to take missionaries with you. The \"Crusade\" belief could be useful, even against other religious players."
        ],
        pantheons: [
            pantheons.godOfTheSea, pantheons.riverGoddess
        ]
    },
    poundmaker: {
        id: "poundmaker",
        portrait: poundmaker,
        leader: "Poundmaker",
        nation: "Cree",
        strength: 3,
        difficulty: 1,
        labels: ["Gold", "Beginner-friendly", "Tall", "Wide"],
        strategies: [
            "Quickly research horses (the strategic resource). Find a settle with a lot of pastures (horses, sheeps, milk). Build a commercial hub first in every city, and send a trader to the city with the most pastures. Put magnus with the trader promotion into that city for maximum effect.",
            "Your unique improvement is good and often worth building.",
            "Your unique scouts are as strong as warriors, this could catch players off guard."
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
            "Try to build as many ancient and classical wonders as possible. Produce builders to boost wonder production. Found a religion with stonehenge and choose the belief that gives you more faith for wonders.",
            "Your high amount of early wonders plus your unique improvement can help you to achieve one of the fastet possible culture victories."
        ],
        counters: [
            "Qin Shi Huang is vulnerable early, as he will focus wonder production above all else."
        ],
        pantheons: []
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
            "Build your unique improvement in every city adjacent to the city center. Ideally you play an entertainment complex between two golf courses, which are also adjacent to city centers.",
            "Focus campus and industrial zone.",
            "Pray that you spawn on a continent split.",
            "Rush Temple of Artemis & Colosseum for maximum amenities."
        ],
        counters: [
            "Rush Temple of Artemis & Colosseum to deny it to Robert the Bruce (it's always worth rushing anyway)."
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
            "Build a holy site in every city. Build a campus second in every city. Cluster holy sites and campuses next to each other. Take the choral music belief and Dar-e Mehr worship building, these two will be your main culture income.",
            "Get your worship building as fast as possible and always purchase it with faith, since it is extremely discounted, and it boosts your stats by 20%.",
            "Convert your team, you get extra science.",
            "The tithe belief can be a good option to offset Saladin's extreme gold costs.",
            "You will need extra gold from teammates."
        ],
        counters: [
            "Like most religious leaders, Saladin is vulnerable early.",
            "Deny choral music & tithe.",
            "Build pikeman against a likely Mamluk push."
        ],
        pantheons: [
            pantheons.riverGoddess, pantheons.sacredPath
        ]
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
            "The \"Sultan\" persona of Saladin trades stats for extra combat effectiveness. Spam holy sites and campuses, and do a mamluk push."
        ],
        pantheons: [pantheons.riverGoddess, pantheons.sacredPath]
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
            "Start with a campus in every city. In team games you can go for theather squares afterwards. Don't build any districts next to campuses, except theather squares.",
            "Build campuses next to as many hills as possible and quickly improve hills with mines.",
            "Do a timing push with Hwachas. Don't forget to recruit a general."
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
            "Start with commercial hubs to boost your cities and finance your war. Go for encampments and push with corps of your unique unit."
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
            "Start with commercial hubs into campuses and focus research towards Llanero. Then do a timing push."
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
            "Settle four to five cities. Start with commercial hubs into campuses. Traders boost your cities, campuses help you research your unique unit as fast as possible. Spam warriors or swordsman, which you can later upgrade to Janissary at an incredibly low price. Don't forget oligarchic legacy.",
            "You could go wide and rush your unique bank, which will double the amount of traders you have compared to anyone else."
        ],
        counters: [
            "Attack Suleiman early, where he has no bonuses.",
            "Korea's Hwachas are a great counter, since they are unlocked at the same technology as Janissaries, while Korea easily generates more science per turn."
        ],
        pantheons: [pantheons.cityPatronGoddess, pantheons.religiousSettlements]
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
            "Build only three holy sites. You will generate enough faith from other sources (unique walls and envoys). That makes \"Jesuit Education\" a great choice for a founder belief.",
            "Choose the belief which doubles your envoys against city states which follow your religion, and try to generate as many envoys as possible."
        ],
        pantheons: [pantheons.religiousIdols]
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
            "Settle near areas with high appeal (mountains, natural wonders, forests, cliffs). Don't build mines, chop rainforests and swamps. Rush lumber mills (you will need them, since you won't build mines).",
            "Use holy sites, preserves & theather squares to boost appeal of tiles from charming to breathtaking.",
            "After you researched medieval faires, you can plant forests early. Plant forests everywhere.",
            "Rush Eiffel Tower (boosts appeal and the \"Steel\" technology also boosts lumber mills)."
        ],
        counters: [
            "Vulnerable early.",
            "Deny Eiffel Tower."
        ],
        pantheons: [pantheons.earthGoddess]
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
            "Do a timing push with rough riders, which is a very strong unique unit."
        ],
        pantheons: []
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
            "In team games you can spam your unique horse archer and horseman to protect your carry."
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
            "Start with commercial hubs in every city.",
            "You can do a timing push with Legions (don't forget Oligarchy, a ram and a general). Chop more Legions with Legions (they have one builder charge)."
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
        labels: ["Naval", "Versatile"],
        strategies: [
            "Always settle coastal and build a harbor. Try to settle on as many continents as possible."
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
            "Focus theather squares.",
            "Once you unlock your unique unit, spam national parks, then use the mounties to defend yourself. This can give you one of the most consistent culture victories."
        ],
        pantheons: [pantheons.goddessOfTheHunt]
    },
    wilhelmina: {
        id: "wilhelmina",
        portrait: wilhelmina,
        leader: "Wilhemina",
        nation: "Dutch",
        strength: 2,
        difficulty: 1,
        labels: ["Versatile", "Beginner-friendly"],
        strategies: [
            "Play a standard game. Build a polder everywhere you can. Trade internationally."
        ],
        pantheons: []
    },
}