import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CivModel } from "../../../civs";
import { Civ } from "../civ/Civ";

import "./civButton.css";

export function CivButton({ civ, className, onClick }: { civ: CivModel, className?: string, onClick?: (civ: CivModel) => void }) {
    function handleOnClick() {
        if(onClick) {
            onClick(civ);
        }
    }

    return (
        <div className={`civ-button ${className}`} onClick={handleOnClick}>
            <Civ civ={civ} />
        </div>
    );
}