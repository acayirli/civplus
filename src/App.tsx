import { DrafterMain } from "./components/civplus/drafter/drafterMain/DrafterMain";
import { DrafterSidebar } from "./components/civplus/drafter/drafterSidebar/DrafterSidebar";
import { CivPlusNavbar } from "./components/civplus/navbar/CivPlusNavbar";
import { AppShell } from "./components/meadow/appShell/AppShell";
import { Button } from "./components/meadow/button/Button";
import { Main } from "./components/meadow/main/Main";
import { Navbar } from "./components/meadow/navbar/Navbar";
import { NavbarItem } from "./components/meadow/navbar/navbarItem/NavbarItem";
import { Sidebar } from "./components/meadow/sidebar/Sidebar";

export function App() {
    return (
        <AppShell
            navbar={
                <CivPlusNavbar />
            }
            main={
                <DrafterMain />
            } />
    );
}