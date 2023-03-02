import { MouseEventHandler } from "react";
import { CivModel } from "../../../civs";
import { CivPortrait } from "../civPortrait/CivPortrait";
import "./civ.css";

export function Civ({ civ, onMouseEnter, onMouseLeave, className }: { civ: CivModel, onMouseEnter?: MouseEventHandler, onMouseLeave?: MouseEventHandler, className?: string }) {
    return (
        <div className={`civ ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CivPortrait civ={civ} />

            <div className="civ__title">
                <div className="fancy_title">{civ.leader}</div>
                <div className="civ__nation">{civ.nation}</div>
            </div>
        </div>
    );
}