import { PantheonModel } from "../../../pantheons";

import "./pantheon.css";

export function Pantheon({ pantheon }: { pantheon: PantheonModel }) {
    return (
        <img className="pantheon" src={pantheon.image} />
    );
}