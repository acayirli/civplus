import { Navbar } from "../../meadow/navbar/Navbar";
import { NavbarItem } from "../../meadow/navbar/navbarItem/NavbarItem";

export function CivPlusNavbar() {
    return (
        <Navbar>
            <NavbarItem text="Drafter" icon="" />
            <NavbarItem text="Teams" icon="" />
            <NavbarItem text="Lernen" icon="" />
            <NavbarItem text="Info" icon="" />
        </Navbar>
    );
}