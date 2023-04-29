import { Navbar } from "../../meadow/navbar/Navbar";
import { NavbarItem } from "../../meadow/navbar/navbarItem/NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faChartSimple, faCheck, faCircleInfo, faCrown, faPeopleGroup, faRightLeft } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../assets/images/logos/civ_logo.webp";

export type Page = "Drafter" | "Leaders" | "About" | "Stats";

export function CivPlusNavbar({ activePage, onChangePage }: { activePage: Page, onChangePage: (newActivePage: Page) => void }) {
    function handleDrafterOnClick() {
        onChangePage("Drafter");
    }

    function handleStatsOnClick() {
        onChangePage("Stats");
    }

    function handleLearnOnClick() {
        onChangePage("Leaders");
    }

    function handleAboutOnClick() {
        onChangePage("About");
    }

    return (
        <Navbar>
            <img src={logo} style={{height: "40px"}}></img>
            <NavbarItem text="Drafter" icon={<FontAwesomeIcon icon={faRightLeft} />} active={activePage == "Drafter"} onClick={handleDrafterOnClick} />
            <NavbarItem text="Stats" icon={<FontAwesomeIcon icon={faChartSimple} />} active={activePage == "Stats"} onClick={handleStatsOnClick} />
            <NavbarItem text="Leaders" icon={<FontAwesomeIcon icon={faCrown} />} active={activePage == "Leaders"} onClick={handleLearnOnClick} />
            <NavbarItem text="About" icon={<FontAwesomeIcon icon={faCircleInfo} />} active={activePage == "About"} onClick={handleAboutOnClick}  />
        </Navbar>
    );
}