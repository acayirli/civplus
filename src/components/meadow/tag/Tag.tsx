import { useState } from "react";

import "./tag.css";

export function Tag({ label, onClick }: { label: string, onClick?: (label: string) => void }) {
    const [isActive, setIsActive] = useState<boolean>(false);

    function handleOnClick() {
        setIsActive(!isActive);
    }

    return (
        <button className={`civ_label ${onClick ? "civ_label--toggle" : ""} ${isActive ? "civ_label--active" : ""}`} type="button" onClick={onClick ? () => { handleOnClick(); onClick(label); } : undefined}>
            {label}
        </button>
    );
}