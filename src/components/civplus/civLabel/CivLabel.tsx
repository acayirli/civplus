import { useState } from "react";
import { CivLabelModel } from "../../../labels";

import "./civLabel.css";

export function CivLabel({ label, onClick }: { label: CivLabelModel, onClick?: (label: CivLabelModel) => void }) {
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