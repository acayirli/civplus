import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CivModel } from "../../../../../civs";
import { Civ } from "../../../civ/Civ";

import "./civBanButton.css";

export function CivBanButton({ civ, banned, onClick }: { civ: CivModel, banned: boolean, onClick: (civName: string) => void }) {
    function handleOnClick() {
        onClick(civ.id);
    }

    return (
        <div className={`civ-ban-button ${banned ? "civ-ban-button--banned" : null}`} onClick={handleOnClick}>
            <Civ civ={civ} />
            <span className="civ-ban-button__ban-icon">
                <FontAwesomeIcon icon={faBan} />
            </span>
        </div>
    );
}