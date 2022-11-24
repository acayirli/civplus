import React from "react";
import "./main.css";

export function Main({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`main ${className}`}>
            {children}
        </div>
    );
}