import React from "react";

import "./sidebarItem.css";

export function SidebarItem({ children }: { children: React.ReactNode }) {
    return (
        <button className="sidebar__item" type="button">
            {children}
        </button>
    );
}