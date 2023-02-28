import { CivModel } from "../../../civs";

import "./civPortrait.css";

export function CivPortrait({ civ }: { civ: CivModel }) {
    return (
        <div className="civ_portrait">
            <img src={civ.portrait}></img>
        </div>
    );
}