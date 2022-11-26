import { CivLabelModel } from "../../../labels";

export function CivLabel({ label }: { label: CivLabelModel }) {
    return (
        <button className="civ_label" type="button">
            { label }
        </button>
    );
}