import { CivModel } from "../../../civs";
import "./civ.css";

export function Civ({ civ }: { civ: CivModel }) {
    return (
        <div className="civ">
            <div className="civ__portrait">
                <img src={civ.portrait}></img>
            </div>

            <div className="civ__title">
                <div className="civ__leader">{civ.leader}</div>
                <div className="civ__nation">{civ.nation}</div>
            </div>
        </div>
    );
}