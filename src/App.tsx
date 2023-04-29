import { useState } from "react";
import { AboutMain } from "./components/civplus/about/aboutMain/AboutMain";
import { DrafterMain } from "./components/civplus/drafter/drafterMain/DrafterMain";
import { CivPlusNavbar, Page } from "./components/civplus/navbar/CivPlusNavbar";
import { StatsMain } from "./components/civplus/stats/statsMain/StatsMain";
import { AppShell } from "./components/meadow/appShell/AppShell";
import { LeadersMain } from "./components/civplus/leaders/leadersMain/LearnMain";

export function App() {
    const [activePage, setActivePage] = useState<Page>("Drafter");

    function handleOnChange(newActivePage: Page) {
        setActivePage(newActivePage);
    }

    function getMainMarkup() {
        switch (activePage) {
            case "Drafter":
                return <DrafterMain />
            case "Stats":
                return <StatsMain />
            case "Leaders":
                return <LeadersMain />
            case "About":
                return <AboutMain />
            default:
                return <div>Unsupported app state.</div>
        }
    }

    return (
        <AppShell
            navbar={
                <CivPlusNavbar activePage={activePage} onChangePage={handleOnChange} />
            }
            main={
                getMainMarkup()
            } />
    );
}