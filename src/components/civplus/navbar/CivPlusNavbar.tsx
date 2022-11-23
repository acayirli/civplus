import { Navbar } from "../../meadow/navbar/Navbar";
import { NavbarItem } from "../../meadow/navbar/navbarItem/NavbarItem";

import logo from "../../../assets/images/logos/civ_logo.webp";

export function CivPlusNavbar() {
    return (
        <Navbar>
            <img src={logo}></img>
            <NavbarItem text="Drafter" icon="" />
            <NavbarItem text="Teams" icon="" active />
            <NavbarItem text="Learn" icon="" />
            <NavbarItem text="About" icon="" />
        </Navbar>
    );
}