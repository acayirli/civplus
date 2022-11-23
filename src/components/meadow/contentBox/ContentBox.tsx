import React from "react";

import "./contentBox.css";

export function ContentBox({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`${className} content_box`}>
            { children }
        </div>
    );
}