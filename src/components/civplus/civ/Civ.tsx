import { MouseEventHandler } from "react";
import { CivModel } from "../../../civs";
import "./civ.css";

export function Civ({ civ, onMouseEnter, onMouseLeave }: { civ: CivModel, onMouseEnter?: MouseEventHandler, onMouseLeave?: MouseEventHandler }) {
    return (
        <div className="civ" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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