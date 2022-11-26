import { faBan, faCrown, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "../../../meadow/sidebar/Sidebar";
import { SidebarItem } from "../../../meadow/sidebar/sidebarItem/SidebarItem";

export function DrafterSidebar() {
    return (
        <Sidebar>
            <SidebarItem>
                <FontAwesomeIcon icon={faGear} style={{marginRight: "5px"}} />
                Settings
            </SidebarItem>

            <SidebarItem>
                <FontAwesomeIcon icon={faBan} style={{marginRight: "5px"}} />
                Bans
            </SidebarItem>

            <SidebarItem>
                <FontAwesomeIcon icon={faCrown} style={{marginRight: "5px"}} />
                Civs
            </SidebarItem>
        </Sidebar>
    );
}