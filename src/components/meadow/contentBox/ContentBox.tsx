import React from "react";

import "./contentBox.css";

export function ContentBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="content_box">
            { children }
        </div>
    );
}