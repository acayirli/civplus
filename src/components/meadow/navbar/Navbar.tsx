import React from "react";
import "./navbar.css";

export function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <div className="navbar">
            {children}
        </div>
    );
}