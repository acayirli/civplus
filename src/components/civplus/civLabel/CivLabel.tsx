import { CivLabelModel } from "../../../labels";

import "./civLabel.css";

export function CivLabel({ label }: { label: CivLabelModel }) {
    return (
        <button className="civ_label" type="button">
            { label }
        </button>
    );
}