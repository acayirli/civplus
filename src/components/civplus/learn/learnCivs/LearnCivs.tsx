import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CivModel, civs } from "../../../../civs";
import { CivLabelModel, labels } from "../../../../labels";
import { Button } from "../../../meadow/button/Button";
import { Space } from "../../../meadow/space/Space";
import { CivButton } from "../../civButton/CivButton";
import { CivCard } from "../../civCard/CivCard";
import { CivLabel } from "../../civLabel/CivLabel";
import { CivLabelFilters } from "../../CivLabelFilters/CivLabelFilters";
import { CivsContentBox } from "../../civsContentBox/CivsContentBox";
import "./learnCivs.css";

export function LearnCivs() {
    const [selectedCiv, setSelectedCiv] = useState<CivModel | undefined>(undefined);
    const [activeLabels, setActiveLabels] = useState<CivLabelModel[]>([]);

    function handleOnClickCivButton(civ: CivModel) {
        setSelectedCiv(civ);
    }

    function handleOnClickBack() {
        setSelectedCiv(undefined);
    }

    function handleOnChangeLabelFilters(labels: CivLabelModel[]) {
        setActiveLabels(labels);
    }

    return (
        <div className="learn-civs">
            <h2>Learn</h2>

            {
                selectedCiv
                    ? <div>
                        <Button text="Back" icon={<FontAwesomeIcon icon={faCircleLeft} />} onClick={handleOnClickBack} variant="secondary" />
                        <Space spacing="md" />
                        <CivCard civ={selectedCiv} />
                    </div>
                    : <div>
                        <CivLabelFilters labels={labels} onChange={handleOnChangeLabelFilters} />

                        <Space spacing="md" />

                        <p>Click on any leader to learn more about them.</p>

                        <CivsContentBox>
                            {
                                Object.values(civs).map((civ) => <CivButton key={civ.id} civ={civ} onClick={handleOnClickCivButton}
                                    className={activeLabels.length > 0 && !activeLabels.some(label => civ.labels.includes(label)) ? "learn-civs__disabled_civ" : ""}></CivButton>)
                            }
                        </CivsContentBox>
                    </div>
            }
        </div>
    );
}