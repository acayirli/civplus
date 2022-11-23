import React from "react";
import "./main.css";

export function Main({ children }: { children: React.ReactNode }) {
    return (
        <div className="main">
            {children}
        </div>
    );
}