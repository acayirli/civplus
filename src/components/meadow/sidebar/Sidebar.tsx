import React from "react";
import "./sidebar.css";

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="sidebar">
            { children }
        </div>
    );
}