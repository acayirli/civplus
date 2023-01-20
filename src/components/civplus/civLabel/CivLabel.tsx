import { useState } from "react";
import { CivLabelModel } from "../../../labels";
import { Tag } from "../../meadow/tag/Tag";

import "./civLabel.css";

export function CivLabel({ label, onClick }: { label: CivLabelModel, onClick?: (label: CivLabelModel) => void }) {
    const [isActive, setIsActive] = useState<boolean>(false);

    function handleOnClick() {
        setIsActive(!isActive);
        
        if(onClick)
        {
            onClick(label);
        }
    }

    return (
        <Tag label={label} onClick={handleOnClick}></Tag>
    );
}