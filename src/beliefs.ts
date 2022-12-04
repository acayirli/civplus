import cathedral from "./assets/images/beliefs/Cathedral.png";
import choralMusic from "./assets/images/beliefs/Choral Music.png";
import crossCulturalDialogue from "./assets/images/beliefs/Cross-Cultural Dialogue.png";
import crusade from "./assets/images/beliefs/Crusade.png";
import darEMehr from "./assets/images/beliefs/Dar-E Mehr.png";
import defenderOfTheFaith from "./assets/images/beliefs/Defender Of The Faith.png";
import divineInspiration from "./assets/images/beliefs/Divine Inspiration.png";
import feedTheWorld from "./assets/images/beliefs/Feed The World.png";
import gurdwara from "./assets/images/beliefs/Gurdwara.png";
import holyOrder from "./assets/images/beliefs/Holy Order.png";
import holyWaters from "./assets/images/beliefs/Holy Waters.png";
import itinerantPreachers from "./assets/images/beliefs/Itinerant Preachers.png";
import jesuitEducation from "./assets/images/beliefs/Jesuit Education.png";
import layMinistry from "./assets/images/beliefs/Lay Ministry.png";
import meetingHouse from "./assets/images/beliefs/Meeting House.png";
import missionaryZeal from "./assets/images/beliefs/Missionary Zeal.png";
import monasticIsolation from "./assets/images/beliefs/Monastic Isolation.png";
import mosque from "./assets/images/beliefs/Mosque.png";
import pagoda from "./assets/images/beliefs/Pagoda.png";
import papalPrimacy from "./assets/images/beliefs/Papal Primacy.png";
import pilgrimage from "./assets/images/beliefs/Pilgrimage.png";
import religiousColonization from "./assets/images/beliefs/Religious Colonization.png";
import religiousCommunities from "./assets/images/beliefs/Religious Communities.png";
import religiousUnity from "./assets/images/beliefs/Religious Unity.png";
import reliquaries from "./assets/images/beliefs/Reliquaries.png";
import sacredPlaces from "./assets/images/beliefs/Sacred Places.png";
import scripture from "./assets/images/beliefs/Scripture.png";
import stewardship from "./assets/images/beliefs/Stewardship.png";
import stupa from "./assets/images/beliefs/Stupa.png";
import synagogue from "./assets/images/beliefs/Synagogue.png";
import tithe from "./assets/images/beliefs/Tithe.png";
import warriorMonks from "./assets/images/beliefs/Warrior Monks.png";
import wat from "./assets/images/beliefs/Wat.png";
import workEthic from "./assets/images/beliefs/Work Ethic.png";
import worldChurch from "./assets/images/beliefs/World Church.png";
import zenMeditation from "./assets/images/beliefs/Zen Meditation.png";

export type BeliefModel = {
    image: string
}

export const beliefs: { [beliefCategory: string]: { [belief: string]: BeliefModel } } = {
    follower: {
        choralMusic: { image: choralMusic },
        workEthic: { image: workEthic },
        feedTheWorld: { image: feedTheWorld },
        reliquaries: { image: reliquaries },
        divineInspiration: { image: divineInspiration },
        jesuitEducation: { image: jesuitEducation },
        religiousCommunity: { image: religiousCommunities },
        warriorMonks: { image: warriorMonks },
        zenMeditation: { image: zenMeditation },
    },
    worship: {
        cathedral: { image: cathedral },
        darEMehr: { image: darEMehr },
        gurdwara: { image: gurdwara },
        meetingHouse: { image: meetingHouse },
        mosque: { image: mosque },
        pagoda: { image: pagoda },
        stupa: { image: stupa },
        synagoge: { image: synagogue },
        wat: { image: wat },
    },
    founder: {
        crossCulturalDialogue: { image: crossCulturalDialogue },
        layMinistry: { image: layMinistry },
        papalPrimacy: { image: papalPrimacy },
        pilgrimage: { image: pilgrimage },
        religiousUnity: { image: religiousCommunities },
        sacredPlaces: { image: sacredPlaces },
        stewardship: { image: stewardship },
        tithe: { image: tithe },
        worldChurch: { image: worldChurch },
    },
    enhancer: {
        crusade: { image: crusade },
        defenderOfTheFaith: { image: defenderOfTheFaith },
        holyOrder: { image: holyOrder },
        holyWaters: { image: holyWaters },
        itinerantPreachers: { image: itinerantPreachers },
        missionaryZeal: { image: missionaryZeal },
        monasticIsolation: { image: monasticIsolation },
        religiousColonization: { image: religiousColonization },
        scripture: { image: scripture },
    }
}