import { Sidebar } from "../../../meadow/sidebar/Sidebar";
import { SidebarItem } from "../../../meadow/sidebar/sidebarItem/SidebarItem";

export function DrafterSidebar() {
    return (
        <Sidebar>
            <SidebarItem>
                Settings
            </SidebarItem>

            <SidebarItem>
                Bans
            </SidebarItem>

            <SidebarItem>
                Civs
            </SidebarItem>
        </Sidebar>
    );
}