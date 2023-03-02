import { Navbar } from "../../meadow/navbar/Navbar";
import { NavbarItem } from "../../meadow/navbar/navbarItem/NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faChartSimple, faCheck, faCircleInfo, faPeopleGroup, faRightLeft } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../assets/images/logos/civ_logo.webp";

export type Page = "Drafter" | "Learn" | "About" | "Stats";

export function CivPlusNavbar({ activePage, onChangePage }: { activePage: Page, onChangePage: (newActivePage: Page) => void }) {
    function handleDrafterOnClick() {
        onChangePage("Drafter");
    }

    function handleStatsOnClick() {
        onChangePage("Stats");
    }

    function handleLearnOnClick() {
        onChangePage("Learn");
    }

    function handleAboutOnClick() {
        onChangePage("About");
    }

    return (
        <Navbar>
            <img src={logo} style={{height: "40px"}}></img>
            <NavbarItem text="Drafter" icon={<FontAwesomeIcon icon={faRightLeft} />} active={activePage == "Drafter"} onClick={handleDrafterOnClick} />
            <NavbarItem text="Stats" icon={<FontAwesomeIcon icon={faChartSimple} />} active={activePage == "Stats"} onClick={handleStatsOnClick} />
            <NavbarItem text="Learn" icon={<FontAwesomeIcon icon={faBookOpen} />} active={activePage == "Learn"} onClick={handleLearnOnClick} />
            <NavbarItem text="About" icon={<FontAwesomeIcon icon={faCircleInfo} />} active={activePage == "About"} onClick={handleAboutOnClick}  />
        </Navbar>
    );
}