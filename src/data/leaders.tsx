import abraham from "../assets/avatars/abraham.webp";
import alexander from "../assets/avatars/alexander.webp";
import amanitore from "../assets/avatars/amanitore.webp";
import ambiorix from "../assets/avatars/ambiorix.webp";
import basil from "../assets/avatars/basil.webp";
import batrieu from "../assets/avatars/batrieu.webp";
import catherineBq from "../assets/avatars/catherine.webp";
import catherineMagnificence from "../assets/avatars/catherineMagnificence.webp";
import chandragupta from "../assets/avatars/chandragupta.webp";
import cleopatra from "../assets/avatars/cleopatra.webp";
import cleopatraPto from "../assets/avatars/cleopatraPtolemaic.webp";
import cyrus from "../assets/avatars/cyrus.webp";
import dido from "../assets/avatars/dido.webp";
import eleanor from "../assets/avatars/eleanor.webp";
import eleanorFrance from "../assets/avatars/eleanorFrance.webp";
import elizabeth from "../assets/avatars/elizabeth.webp";
import frederick from "../assets/avatars/frederick.webp";
import gandhi from "../assets/avatars/gandhi.webp";
import genghis from "../assets/avatars/genghis.webp";
import gilgamesh from "../assets/avatars/gilgamesh.webp";
import gitarja from "../assets/avatars/gitarja.webp";
import gorgo from "../assets/avatars/gorgo.webp";
import hammurabi from "../assets/avatars/hammurabi.webp";
import harald from "../assets/avatars/harald.webp";
import haraldVarangian from "../assets/avatars/haraldVarangian.webp";
import hojo from "../assets/avatars/hojo.webp";
import jadwiga from "../assets/avatars/jadwiga.webp";
import jayavarman from "../assets/avatars/jayavarman.webp";
import joao from "../assets/avatars/Joao.webp";
import johnCurtin from "../assets/avatars/john.webp";
import caesar from "../assets/avatars/julius.webp";
import kristina from "../assets/avatars/kristina.webp";
import kublai from "../assets/avatars/kublai.webp";
import kublaiMongolia from "../assets/avatars/kublaiMongolia.webp";
import kupe from "../assets/avatars/Kupe.webp";
import ladySixSky from "../assets/avatars/ladySixSky.webp";
import lautaro from "../assets/avatars/lautaro.webp";
import ludwig from "../assets/avatars/ludwig.webp";
import mansamusa from "../assets/avatars/mansa.webp";
import matthias from "../assets/avatars/matthias.webp";
import menelik from "../assets/avatars/menelik.webp";
import montezuma from "../assets/avatars/montezuma.webp";
import mvemba from "../assets/avatars/mvemba.webp";
import nader from "../assets/avatars/nader.webp";
import nzinga from "../assets/avatars/nzinga.webp";
import pachacuti from "../assets/avatars/pachacuti.webp";
import pedro from "../assets/avatars/pedro.webp";
import pericles from "../assets/avatars/pericles.webp";
import peter from "../assets/avatars/peter.webp";
import philip from "../assets/avatars/philip.webp";
import poundmaker from "../assets/avatars/poundmaker.webp";
import qin from "../assets/avatars/qin.webp";
import qinUnifier from "../assets/avatars/qinUnifier.webp";
import ramses from "../assets/avatars/ramses.webp";
import robert from "../assets/avatars/robert.webp";
import saladin from "../assets/avatars/saladin.webp";
import saladinSultan from "../assets/avatars/saladinSultan.webp";
import seondeok from "../assets/avatars/seondeok.webp";
import sejong from "../assets/avatars/sejong.webp";
import shaka from "../assets/avatars/shaka.webp";
import simon from "../assets/avatars/simon.webp";
import suleiman from "../assets/avatars/suleiman.webp";
import suleimanMuhtesem from "../assets/avatars/suleimanMuhtesem.webp";
import sundiata from "../assets/avatars/sundiata.webp";
import tamar from "../assets/avatars/tamar.webp";
import teddy from "../assets/avatars/teddy.webp";
import teddyRR from "../assets/avatars/teddyRoughRider.webp";
import theodora from "../assets/avatars/theodora.webp";
import tokugawa from "../assets/avatars/tokugawa.webp";
import tomyris from "../assets/avatars/tomyris.webp";
import trajan from "../assets/avatars/trajan.webp";
import victoria from "../assets/avatars/victoria.webp";
import victoriaSteam from "../assets/avatars/victoriaAgeOfSteam.webp";
import wilfried from "../assets/avatars/wilfrid.webp";
import wilhelmina from "../assets/avatars/wilhelmina.webp";
import wuzetian from "../assets/avatars/wuzetian.webp";
import yongle from "../assets/avatars/yongle.webp";

export type LeaderType = {
	id: string;
	portrait: string;
	leader: string;
	nation: string;
};

export const leaders: { [leader: string]: LeaderType } = {
	abraham: {
		id: "abraham",
		portrait: abraham,
		leader: "Abraham Lincoln",
		nation: "American",
	},
	alexander: {
		id: "alexander",
		portrait: alexander,
		leader: "Alexander",
		nation: "Macedonian",
	},
	amanitore: {
		id: "amanitore",
		portrait: amanitore,
		leader: "Amanitore",
		nation: "Nubian",
	},
	ambiorix: {
		id: "ambiorix",
		portrait: ambiorix,
		leader: "Ambiorix",
		nation: "Gallic",
	},
	basil: {
		id: "basil",
		portrait: basil,
		leader: "Basil II",
		nation: "Byzantine",
	},
	batrieu: {
		id: "batrieu",
		portrait: batrieu,
		leader: "Bà Triệu",
		nation: "Vietnamese",
	},
	catherine: {
		id: "catherine",
		portrait: catherineBq,
		leader: "Catherine de Medici (Black Queen)",
		nation: "French",
	},
	catherineMagnificence: {
		id: "catherineMagnificence",
		portrait: catherineMagnificence,
		leader: "Catherine de Medici (Magnificence)",
		nation: "French",
	},
	chandragupta: {
		id: "chandragupta",
		portrait: chandragupta,
		leader: "Chandragupta",
		nation: "Indian",
	},
	cleopatra: {
		id: "cleopatra",
		portrait: cleopatra,
		leader: "Cleopatra (Egyptian)",
		nation: "Egyptian",
	},
	cleopatraPto: {
		id: "cleopatraPto",
		portrait: cleopatraPto,
		leader: "Cleopatra (Ptolemaic)",
		nation: "Egyptian",
	},
	cyrus: {
		id: "cyrus",
		portrait: cyrus,
		leader: "Cyrus",
		nation: "Persian",
	},
	dido: {
		id: "dido",
		portrait: dido,
		leader: "Dido",
		nation: "Phoenician",
	},
	eleanor: {
		id: "eleanor",
		portrait: eleanor,
		leader: "Eleanor of Aquitaine",
		nation: "English",
	},
	eleanorFrance: {
		id: "eleanorFrance",
		portrait: eleanorFrance,
		leader: "Eleanor of Aquitaine",
		nation: "French",
	},
	elizabeth: {
		id: "elizabeth",
		portrait: elizabeth,
		leader: "Elizabeth I",
		nation: "English",
	},
	frederick: {
		id: "frederick",
		portrait: frederick,
		leader: "Frederick Barbarossa",
		nation: "German",
	},
	gandhi: {
		id: "gandhi",
		portrait: gandhi,
		leader: "Gandhi",
		nation: "Indian",
	},
	genghis: {
		id: "genghis",
		portrait: genghis,
		leader: "Genghis Khan",
		nation: "Mongolian",
	},
	gilgamesh: {
		id: "gilgamesh",
		portrait: gilgamesh,
		leader: "Gilgamesh",
		nation: "Sumerian",
	},
	gitarja: {
		id: "gitarja",
		portrait: gitarja,
		leader: "Gitarja",
		nation: "Indonesian",
	},
	gorgo: {
		id: "gorgo",
		portrait: gorgo,
		leader: "Gorgo",
		nation: "Greek",
	},
	hammurabi: {
		id: "hammurabi",
		portrait: hammurabi,
		leader: "Hammurabi",
		nation: "Babylonian",
	},
	harald: {
		id: "harald",
		portrait: harald,
		leader: "Harald Hardrada (Konge)",
		nation: "Norwegian",
	},
	haraldVarangian: {
		id: "haraldVarangian",
		portrait: haraldVarangian,
		leader: "Harald Hardrada (Varangian)",
		nation: "Norwegian",
	},
	hojo: {
		id: "hojo",
		portrait: hojo,
		leader: "Hojo Tokimune",
		nation: "Japanese",
	},
	jadwiga: {
		id: "jadwiga",
		portrait: jadwiga,
		leader: "Jadwiga",
		nation: "Polish",
	},
	jayavarman: {
		id: "jayavarman",
		portrait: jayavarman,
		leader: "Jayavarman VII",
		nation: "Khmer",
	},
	joao: {
		id: "joao",
		portrait: joao,
		leader: "João III",
		nation: "Portuguese",
	},
	johnCurtin: {
		id: "johnCurtin",
		portrait: johnCurtin,
		leader: "John Curtin",
		nation: "Australian",
	},
	caesar: {
		id: "caesar",
		portrait: caesar,
		leader: "Julius Caesar",
		nation: "Roman",
	},
	kristina: {
		id: "kristina",
		portrait: kristina,
		leader: "Kristina",
		nation: "Swedish",
	},
	kublai: {
		id: "kublai",
		portrait: kublai,
		leader: "Kublai Khan",
		nation: "Chinese",
	},
	kublaiMongolia: {
		id: "kublaiMongolia",
		portrait: kublaiMongolia,
		leader: "Kublai Khan",
		nation: "Mongolian",
	},
	kupe: {
		id: "kupe",
		portrait: kupe,
		leader: "Kupe",
		nation: "Māori",
	},
	ladySixSky: {
		id: "ladySixSky",
		portrait: ladySixSky,
		leader: "Lady Six Sky",
		nation: "Mayan",
	},
	lautaro: {
		id: "lautaro",
		portrait: lautaro,
		leader: "Lautaro",
		nation: "Mapuche",
	},
	ludwig: {
		id: "ludwig",
		portrait: ludwig,
		leader: "Ludwig II",
		nation: "German",
	},
	mansamusa: {
		id: "mansamusa",
		portrait: mansamusa,
		leader: "Mansa Musa",
		nation: "Malian",
	},
	matthias: {
		id: "matthias",
		portrait: matthias,
		leader: "Matthias Corvinus",
		nation: "Hungarian",
	},
	menelik: {
		id: "menelik",
		portrait: menelik,
		leader: "Menelik II",
		nation: "Ethiopian",
	},
	montezuma: {
		id: "montezuma",
		portrait: montezuma,
		leader: "Montezuma",
		nation: "Aztec",
	},
	mvemba: {
		id: "mvemba",
		portrait: mvemba,
		leader: "Mvemba a Nzinga",
		nation: "Kongolese",
	},
	nader: {
		id: "nader",
		portrait: nader,
		leader: "Nader Shah",
		nation: "Persian",
	},
	nzinga: {
		id: "nzinga",
		portrait: nzinga,
		leader: "Nzinga Mbande",
		nation: "Kongolese",
	},
	pachacuti: {
		id: "pachacuti",
		portrait: pachacuti,
		leader: "Pachacuti",
		nation: "Inca",
	},
	pedro: {
		id: "pedro",
		portrait: pedro,
		leader: "Pedro II",
		nation: "Brazilian",
	},
	pericles: {
		id: "pericles",
		portrait: pericles,
		leader: "Pericles",
		nation: "Greek",
	},
	peter: {
		id: "peter",
		portrait: peter,
		leader: "Peter",
		nation: "Russian",
	},
	philip: {
		id: "philip",
		portrait: philip,
		leader: "Philip II",
		nation: "Spanish",
	},
	poundmaker: {
		id: "poundmaker",
		portrait: poundmaker,
		leader: "Poundmaker",
		nation: "Cree",
	},
	qin: {
		id: "qin",
		portrait: qin,
		leader: "Qin Shi Huang (Mandate of Heaven)",
		nation: "Chinese",
	},
	qinUnifier: {
		id: "qinUnifier",
		portrait: qinUnifier,
		leader: "Qin Shi Huang (Unifier)",
		nation: "Chinese",
	},
	ramses: {
		id: "ramses",
		portrait: ramses,
		leader: "Ramses II",
		nation: "Egyptian",
	},
	robert: {
		id: "robert",
		portrait: robert,
		leader: "Robert the Bruce",
		nation: "Scottish",
	},
	saladin: {
		id: "saladin",
		portrait: saladin,
		leader: "Saladin (Vizier)",
		nation: "Arabian",
	},
	saladinSultan: {
		id: "saladinSultan",
		portrait: saladinSultan,
		leader: "Saladin (Sultan)",
		nation: "Arabian",
	},
	seondeok: {
		id: "seondeok",
		portrait: seondeok,
		leader: "Seondeok",
		nation: "Korean",
	},
	sejong: {
		id: "sejong",
		portrait: sejong,
		leader: "Sejong",
		nation: "Korean",
	},
	shaka: {
		id: "shaka",
		portrait: shaka,
		leader: "Shaka",
		nation: "Zulu",
	},
	simon: {
		id: "simon",
		portrait: simon,
		leader: "Simón Bolívar",
		nation: "Gran Columbian",
	},
	suleiman: {
		id: "suleiman",
		portrait: suleiman,
		leader: "Suleiman (Kanuni)",
		nation: "Ottoman",
	},
	suleimanMuhtesem: {
		id: "suleimanMuhtesem",
		portrait: suleimanMuhtesem,
		leader: "Suleiman (Muhteşem)",
		nation: "Ottoman",
	},
	sundiata: {
		id: "sundiata",
		portrait: sundiata,
		leader: "Sundiata Keita",
		nation: "Malian",
	},
	tamar: {
		id: "tamar",
		portrait: tamar,
		leader: "Tamar",
		nation: "Georgian",
	},
	teddy: {
		id: "teddy",
		portrait: teddy,
		leader: "Teddy Roosevelt (Bull Moose)",
		nation: "American",
	},
	teddyRR: {
		id: "teddyRR",
		portrait: teddyRR,
		leader: "Teddy Roosevelt (Rough Rider)",
		nation: "American",
	},
	theodora: {
		id: "theodora",
		portrait: theodora,
		leader: "Theodora",
		nation: "Byzantine",
	},
	tokugawa: {
		id: "tokugawa",
		portrait: tokugawa,
		leader: "Tokugawa",
		nation: "Japanese",
	},
	tomyris: {
		id: "tomyris",
		portrait: tomyris,
		leader: "Tomyris",
		nation: "Scythian",
	},
	trajan: {
		id: "trajan",
		portrait: trajan,
		leader: "Trajan",
		nation: "Roman",
	},
	victoria: {
		id: "victoria",
		portrait: victoria,
		leader: "Victoria (Age of Empire)",
		nation: "English",
	},
	victoriaSteam: {
		id: "victoriaSteam",
		portrait: victoriaSteam,
		leader: "Victoria (Age of Steam)",
		nation: "English",
	},
	wilfried: {
		id: "wilfried",
		portrait: wilfried,
		leader: "Wilfried Laurier",
		nation: "Canadian",
	},
	wilhelmina: {
		id: "wilhelmina",
		portrait: wilhelmina,
		leader: "Wilhelmina",
		nation: "Dutch",
	},
	wuzetian: {
		id: "wuzetian",
		portrait: wuzetian,
		leader: "Wu Zetian",
		nation: "Chinese",
	},
	yongle: {
		id: "yongle",
		portrait: yongle,
		leader: "Yongle ",
		nation: "Chinese",
	},
};
