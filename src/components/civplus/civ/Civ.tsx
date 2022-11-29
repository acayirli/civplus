import { MouseEventHandler } from "react";
import { CivModel } from "../../../civs";
import "./civ.css";

export function Civ({ civ, onMouseEnter, onMouseLeave, className }: { civ: CivModel, onMouseEnter?: MouseEventHandler, onMouseLeave?: MouseEventHandler, className?: string }) {
    return (
        <div className={`civ ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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