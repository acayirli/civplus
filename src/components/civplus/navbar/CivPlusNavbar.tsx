import { Navbar } from "../../meadow/navbar/Navbar";
import { NavbarItem } from "../../meadow/navbar/navbarItem/NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCheck, faCircleInfo, faPeopleGroup, faRightLeft } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../assets/images/logos/civ_logo.webp";

export function CivPlusNavbar() {
    return (
        <Navbar>
            <img src={logo}></img>
            <NavbarItem text="Drafter" icon={<FontAwesomeIcon icon={faRightLeft} />} active />
            <NavbarItem text="Teams" icon={<FontAwesomeIcon icon={faPeopleGroup} />} disabled />
            <NavbarItem text="Learn" icon={<FontAwesomeIcon icon={faBookOpen} />} disabled />
            <NavbarItem text="About" icon={<FontAwesomeIcon icon={faCircleInfo} />} disabled />
        </Navbar>
    );
}